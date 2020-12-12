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
  </span>
</template>

<script>
import EditorView from "~/components/editor/EditorView";
import UserTile from "~/components/shared/UserTile";
export default {
  head() {
    return {
      title: this.blog.title,
      meta: [
        {hid: 'description', name: 'description', content: this.blog.subtitle}
      ]
    }
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
