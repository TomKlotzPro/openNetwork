<template>
  <div class="bg-nebula-100 border-l-4 border-nebula-500 p-4 m-4 rounded">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
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
      </div>
      <div class="ml-3">
        <p class="text-sm text-sols">
          You have no credits left.
          <a
            href="#"
            class="font-medium underline text-nebula-700 hover:text-sols"
          >
            Upgrade your account to add more credits.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
};
</script>

<style></style>
