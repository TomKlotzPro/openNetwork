<template lang="">
  <button
    class="group font-bold flex flex-col py-4 px-6 bg-gray-100 border border-gray-300 rounded hover:bg-blue-800"
  >
    <div class="content-center">
      <svg
        class="h-3 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="group-hover:text-white">{{ upvoteNumber }}</span>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    upvoteNumber: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang=""></style>
