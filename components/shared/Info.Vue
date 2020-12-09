<template>
  <div
    class="mx-auto inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div>
      <div
        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-grey-100"
      >
        <svg
          class="h-6 w-6 text-grey-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path
            fillRule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3
          class="text-base leading-6 font-medium text-grey-300 uppercase tracking-widest"
          id="modal-headline"
        >
          {{ info }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: String,
      required: false
    }
  }
};
</script>
