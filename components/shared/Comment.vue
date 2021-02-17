<template>
  <div class="px-4 py-6 sm:px-6">
    <ul class="space-y-8">
      <li>
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="comment.avatar"
              :alt="comment.name"
            />
          </div>
          <div>
            <div class="text-sm">
              <a href="#" class="font-medium text-gray-900">{{
                comment.name
              }}</a>
            </div>
            <div class="mt-1 text-sm text-gray-700">
              <p>
                {{ comment.comment }}
              </p>
            </div>
            <div class="mt-2 text-sm space-x-2">
              <span class="text-gray-500 font-medium">{{
                comment.createdAt | formatDate
              }}</span>
              <span v-show="isAuth" class=" space-x-2">
                <span class="text-gray-500 font-medium">&middot;</span>
                <button
                  @click="clickReply()"
                  type="button"
                  class="text-gray-900 font-medium focus:outline-none"
                >
                  {{ replyText }}
                </button>
              </span>
              <span v-show="comment.replies.length" class=" space-x-2">
                <span class="text-gray-500 font-medium">&middot;</span>
                <button
                  @click="toggleGroup()"
                  type="button"
                  class="text-gray-900 font-medium focus:outline-none"
                >
                  {{ toggleText }}
                </button>
              </span>
            </div>
            <div class="mt-2 text-sm space-x-2">
              <span v-if="comment.replies.length !== 0">
                <span class="text-grey-700 font-medium focus:outline-none">
                  {{ comment.replies.length }}
                  {{ comment.replies.length === 1 ? "reply" : "replies" }}
                </span>
              </span>
            </div>
            <div
              class="mt-1 pl-3"
              v-show="comment.replies.length && !isGroupRolledUp"
            >
              <comment-nested
                v-for="reply in comment.replies"
                :key="reply._id"
                :comment="reply"
                @event_child="emit"
              ></comment-nested>
            </div>
            <AddComment
              ref="form"
              v-show="isReplying"
              :comment="comment"
              @text="changeText"
              @addComment="addComment"
            ></AddComment>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AddComment from "~/components/shared/AddComment";
import { mapGetters } from "vuex";
export default {
  mounted() {
    console.log(this.comment.user);
  },
  name: "comment-nested",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isGroupRolledUp: true,
      isReplying: false,
      commentText: ""
    };
  },
  methods: {
    toggleGroup() {
      this.isGroupRolledUp = !this.isGroupRolledUp;
    },
    clickReply() {
      this.isReplying = !this.isReplying;
      if (this.isReplying) {
        const self = this;
        setTimeout(function() {
          self.$refs.form.$refs.input.focus();
        }, 0);
      }
    },
    changeText(data) {
      this.commentText = data;
    },
    emit(data) {
      this.$emit("event_child", data);
    },
    addComment(text) {
      this.isReplying = false;
      this.isGroupRolledUp = false;
      this.$emit("event_child", {
        parent_id: this.comment._id,
        text: text
      });
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated"
    }),
    replyText() {
      if (this.isReplying) {
        return "Cancel";
      } else {
        return "Reply";
      }
    },
    toggleText() {
      if (this.isGroupRolledUp) {
        return "Expand";
      } else {
        return "Collapse";
      }
    }
  }
};
</script>

<style></style>
