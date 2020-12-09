<template>
  <Fragment>
    <Navbar exitLink="/workspace/blogs">
      <template #actionMenu>
        <Button
          @click.native="openModal"
          buttonType="button"
          buttonColor="nebula"
          buttonWidth="40"
        >
          {{ blog.status === "active" ? "Publish" : "Unpublish" }}
        </Button>
      </template>
    </Navbar>
    <Editor
      @editorMounted="initEditorContent"
      @editorSaved="updateBlog"
      :isSaving="isSaving"
      ref="editor"
    />
    <Modal
      :isOpen="isOpen"
      @updateOpen="updateOpen"
      @submitted="publishBlog"
      @unpublish="unPublishBlog"
      :publishError="publishError"
      :slug="slugLink"
      :blogStatus="blog.status"
    />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Navbar from "~/components/shared/Navbar";
import Button from "~/components/shared/Button";
import Modal from "~/components/shared/Modal";
import Editor from "~/components/editor";
import slugify from "slugify";
import { mapState } from "vuex";
export default {
  layout: "workspace",
  components: {
    Fragment,
    Button,
    Navbar,
    Editor
  },
  computed: {
    ...mapState({
      blog: ({ user }) => user.blog.item,
      isSaving: ({ user }) => user.blog.isSaving
    }),
    slugLink() {
      return this.getCurrentUrl() + "/blogs/" + this.slug;
    }
  },
  async fetch({ params, store }) {
    await store.dispatch("user/blog/fetchBlogById", params.id);
  },
  data() {
    return {
      isOpen: false,
      publishError: "",
      slug: ""
    };
  },
  methods: {
    openModal($event) {
      this.isOpen = true;
      const title = this.$refs.editor.getNodeValueByName("title");
      this.publishError = "";
      this.slug = "";
      if (title && title.length >= 24) {
        this.slug = this.slugify(title);
      } else {
        this.publishError =
          "Your title should long and descriptive with a minimum of 24 characters";
      }
    },
    getCurrentUrl() {
      //process.client will return true if we are in browser environment
      return process.client && window.location.origin;
    },
    updateOpen(isOpen) {
      this.isOpen = isOpen;
    },
    initEditorContent(editor) {
      if (this.blog && this.blog.content) {
        editor.setContent(this.blog.content);
      }
    },
    updateBlog(blogData) {
      if (!this.isSaving) {
        this.$store
          .dispatch("user/blog/updateBlog", {
            data: blogData,
            id: this.blog._id
          })
          .then(_ => {
            this.$toasted.global.on_success({
              message: "Article Updated!"
            });
          })
          .catch(error => {
            this.$toasted.global.on_error({
              message: "Sorry something went wrong!"
            });
          });
      }
    },
    publishBlog() {
      const blogContent = this.$refs.editor.getContent();
      blogContent.status = "published";

      this.$store
        .dispatch("user/blog/updateBlog", {
          data: blogContent,
          id: this.blog._id
        })
        .then(_ => {
          this.$toasted.global.on_success({
            message: "Article has been published!"
          });
          this.isOpen = false;
        })
        .catch(error => {
          this.$toasted.global.on_error({
            message: "Sorry something went wrong!"
          });
        });
    },
    unPublishBlog() {
      const blogContent = this.$refs.editor.getContent();
      blogContent.status = "active";

      this.$store
        .dispatch("user/blog/updateBlog", {
          data: blogContent,
          id: this.blog._id
        })
        .then(_ => {
          this.$toasted.global.on_success({
            message: "Article has been unpublished!"
          });
          this.isOpen = false;
        })
        .catch(error => {
          this.$toasted.global.on_error({
            message: "Sorry something went wrong!"
          });
        });
    },
    slugify(text) {
      return slugify(text, {
        replacement: "-",
        remove: null,
        lower: true
      });
    }
  }
};
</script>

<style></style>
