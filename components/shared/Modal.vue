<template>
  <Fragment>
    <div v-show="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                @click="closeModal"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <template v-if="blogStatus === 'active'">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                  :class="!publishError ? 'bg-nebula-100' : 'bg-red-100'"
                >
                  <svg
                    v-if="!publishError"
                    class="h-5 w-5 text-nebula-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    v-else
                    class="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-hind tracking-tighter font-semibold text-sols"
                    id="modal-headline"
                  >
                    Review Details
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to publish your article? Once
                      published your article's url will be permanent and can't
                      be changed later. forever. This action cannot be undone.
                    </p>
                    <p
                      v-if="!publishError"
                      class="text-xs mt-2 text-nebula-500 uppercase tracking-widest"
                    >
                      Your url:
                    </p>
                  </div>
                </div>
              </div>
              <Alert v-if="!publishError" icon="link" :content="slug" />
              <Alert v-else icon="error" :content="publishError" />
            </template>
            <template v-else>
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center bg-orange-100 justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    class="h-6 w-6 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-hind tracking-tighter font-semibold text-sols"
                    id="modal-headline"
                  >
                    Review Details
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to unpublish your article? Once you
                      unpublish your article, it is no longer displayed within
                      th community.
                    </p>
                  </div>
                </div>
              </div>
            </template>
            <div class="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
              <Button
                v-if="blogStatus === 'active'"
                buttonType="button"
                buttonColor="nebula"
                buttonWidth="40"
                @click.native="emitSubmit"
              >
                Submit
              </Button>
              <Button
                v-else
                buttonType="button"
                buttonColor="nebula"
                buttonWidth="40"
                @click.native="emitUnpublish"
              >
                Submit
              </Button>
              <Button
                @click.native="closeModal"
                buttonType="button"
                buttonWidth="40"
                class="sm:ml-4"
              >
                Cancel
              </Button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Button from "~/components/shared/Button";
import Alert from "~/components/shared/Alert";
export default {
  components: {
    Fragment,
    Button
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    publishError: {
      type: String,
      required: false,
      default: ""
    },
    slug: {
      type: String,
      required: false,
      default: ""
    },
    blogStatus: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    closeModal() {
      let isOpen = this.isOpen;
      isOpen = false;
      this.$emit("updateOpen", isOpen);
    },
    emitSubmit() {
      this.$emit("submitted");
    },
    emitUnpublish() {
      this.$emit("unpublish");
    }
  }
};
</script>

<style></style>
