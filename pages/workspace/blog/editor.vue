<template>
  <Fragment>
    <Navbar exitLink="/workspace/blogs"> </Navbar>
    <Editor @editorSaved="saveBlog" />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Navbar from "~/components/shared/Navbar";
import Editor from "~/components/editor";
import Button from "~/components/shared/Button";
export default {
  layout: "workspace",
  components: {
    Fragment,
    Navbar,
    Button
  },
  methods: {
    saveBlog(blogData) {
      this.$store
        .dispatch("user/blog/createBlog", blogData)
        .then(blog => this.$router.push(`/workspace/blog/${blog._id}/edit`));
    }
  }
};
</script>

<style></style>
