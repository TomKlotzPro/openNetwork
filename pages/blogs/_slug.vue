<template>
  <span>
    <UserTile
      :name="blog.author.name"
      :avatar="blog.author.avatar"
      :date="blog.createdAt | formatDate"
    />
    <div class="blog-editor-container">
      <EditorView :initialContent="blog.content" />
    </div>
    <div
      class="mt-8 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl"
    >
      <Comments :author="blog.author" :blog="blog"></Comments>
    </div>
  </span>
</template>

<script>
import EditorView from "~/components/editor/EditorView";
import Comments from "~/components/shared/Comments";
import UserTile from "~/components/shared/UserTile";
export default {
  head() {
    return {
      title: this.blog.title,
      meta: [
        { hid: "description", name: "description", content: this.blog.subtitle }
      ]
    };
  },
  components: {
    EditorView
  },
  computed: {
    blog() {
      return this.$store.state.blog.item;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("blog/fetchBlogBySlug", params.slug);
  }
};
</script>

<style></style>
