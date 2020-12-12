<template>
  <Fragment>
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div>
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-nebula-100"
          >
            <slot name="svg"></slot>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-xs uppercase tracking-widest font-semibold leading-6 text-nebula-500"
              id="modal-headline"
            >
              {{ headline }}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                <slot></slot>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <Button buttonColor="nebula" :href="url" target="_blank" class="mx-auto">{{
            buttonText
          }}</Button>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Button from "~/components/shared/Button";
export default {
  components: {
    Fragment,
    Button
  },
  props: {
    svg_name: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
</script>
