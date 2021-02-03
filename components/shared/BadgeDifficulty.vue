<template>
  <div class="flex space-x-2">
    <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 rounded-full" :class="classColor">{{ difficulty }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classColor: null
    };
  },
  props: {
    difficulty: {
      type: String,
      required: true
    }
  },
  mounted() {
    switch(this.difficulty) {
      case 'very easy':
        this.classColor = "bg-teal-200 text-teal-800";
        break;
      case 'easy':
        this.classColor = "bg-green-200 text-green-800";
        break;
      case 'medium':
        this.classColor = "bg-yellow-200 text-yellow-800";
        break;
      case 'hard':
        this.classColor = "bg-orange-200 text-orange-800";
        break;
      case 'very hard':
        this.classColor = "bg-red-200 text-red-800";
        break;
    }
    this.initialContent && this.editor.setContent(this.initialContent);
  },
};
</script>