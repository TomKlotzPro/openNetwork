<template>
  <div class="border-l-4 p-4 m-4 rounded" :class="alertStyles">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
          v-if="icon === 'link'"
          class="h-5 w-5 text-nebula-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        <svg
          v-if="icon === 'error'"
          class="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-sols font-medium">
          {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: ""
    },
    content: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    alertStyles() {
      if (this.icon === "error") {
        return "bg-red-100 border-red-500";
      }
      if (this.icon === "link") {
        return "bg-nebula-100 border-nebula-500";
      }
    }
  }
};
</script>

<style></style>
