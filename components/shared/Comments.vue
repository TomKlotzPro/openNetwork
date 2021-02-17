<template>
  <section aria-labelledby="notes-title">
    <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 id="notes-title" class="text-lg font-medium text-gray-900">
            Comments
          </h2>
        </div>
        <!-- Comment -->
        <div
          class="bg-gray-50 px-4 py-6 sm:px-6"
          v-if="project.comments.length === 0 || project.comments === null"
        >
          <div class="flex space-x-3">
            <div class="min-w-0 flex-1">
              <div class="mt-3 flex items-center justify-between">
                <span
                  class="group inline-flex items-start text-sm space-x-2 text-grey-800 hover:text-grey-900"
                >
                  <!-- Heroicon name: solid/question-mark-circle -->
                  <svg
                    class="flex-shrink-0 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    No comments on this project
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Comment
          v-else
          v-for="comment in project.comments"
          :key="comment._id"
          :comment="comment"
          @event_child="eventChild"
        ></Comment>
      </div>
      <div v-if="isAuth" class="bg-gray-50 px-4 py-6 sm:px-6">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="user.avatar"
              :alt="user.name"
            />
          </div>
          <div class="min-w-0 flex-1">
            <form @submit.prevent="addComment">
              <div>
                <label for="comment" class="sr-only">About</label>
                <textarea
                  id="comment"
                  name="comment"
                  v-model="commentText"
                  rows="3"
                  class="shadow-sm block w-full focus:ring-blue-500 focus:border-nebula-500 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add a note"
                ></textarea>
              </div>
              <div class="mt-3 flex items-center justify-between">
                <Button
                  buttonType="button"
                  type="submit"
                  buttonColor="nebula"
                  class="sm:flex"
                  >Comment</Button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comment from "~/components/shared/Comment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      comments: [],
      commentText: "",
      lastParent: null
    };
  },
  watch: {
    comments: async function() {
      await this.$store.dispatch(
        "project/fetchProjectBySlug",
        this.project.slug
      );
      this.commentText = "";
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  },
  methods: {
    eventChild: function(data) {
      this.lastParent = data.parent_id;
      const userInfo = {
        name: this.user.name,
        email: this.user.email,
        avatar: this.user.avatar,
        user: this.user._id,
        replies: []
      };
      this.$store.commit("project/updateProjectComment", {
        comments: this.project.comments,
        userInfo,
        text: data.text,
        id: data.parent_id
      });
      this.$store
        .dispatch("project/createProjectReviewReply", {
          projectID: this.project._id,
          comments: this.project.comments
        })
        .then(project => {
          this.comments = project.comments;
          this.$toasted.global.on_success({
            message: "Reply Added!"
          });
        })
        .catch(_ => {
          this.$toasted.global.on_error({
            message: "Something went wrong..."
          });
        });
    },
    addComment: function() {
      if (this.commentText.trim() === "") return false;
      const projectData = {
        projectID: this.project._id,
        comment: this.commentText
      };
      this.$store
        .dispatch("project/createProjectReview", projectData)
        .then(project => {
          this.comments = project.comments;
          this.$toasted.global.on_success({
            message: "Comment Added!"
          });
        })
        .catch(_ => {
          this.$toasted.global.on_error({
            message: "Something went wrong..."
          });
        });
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated"
    })
  }
};
</script>

<style></style>
