<template>
  <div class="flex-shrink-0 pr-2">
    <button
      id="pinned-project-options-menu-0"
      @click="toggleDropdown"
      aria-haspopup="true"
      class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none"
    >
      <span class="sr-only">Open options</span>
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isActive"
        class="z-10 mx-3 origin-top-right absolute w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="pinned-project-options-menu-0"
      >
        <div class="py-1" role="none">
          <a
            v-for="(item, index) in items"
            :key="item.name"
            @click.prevent="emitOption(index)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    emitOption(optionIndex) {
      this.$emit("optionChanged", this.items[optionIndex]);
    },
    toggleDropdown(e) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style></style>
