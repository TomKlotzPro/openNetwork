<template>
  <div class="flex mt-2">
    <Input
      @input="text"
      ref="input"
      name="Reply Input"
      v-model="commentText"
      @keyup.enter="addComment"
      placeholder="Your comment"
      type="text"
      noLabel
    />
    <Button
      buttonType="button"
      @click.native="addComment"
      buttonColor="nebula"
      class="ml-3 w-32"
      >Add</Button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentText: '',
    }
  },
  methods: {
    addComment() {
      if (this.commentText.trim() === '') return false;
      this.$emit('addComment', this.commentText.trim());
      this.commentText = ''
    },
    text() {
      this.$emit('text', this.commentText.trim())
    }
  }
};
</script>

<style></style>
