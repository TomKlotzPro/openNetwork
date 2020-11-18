<template>
  <div class="mb-4">
    <div class="relative">
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :class="[error ? 'border-red-600 focus:border-red-600' : '']"
        @change="change"
      >
        <option value="default">Select Category</option>
        <option
          v-for="option in options"
          :key="option._id"
          :value="option.name"
          :selected="selectedOption(option)"
          >{{ option.name }}</option
        >
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
    <span v-if="error">
      <p class="text-xs italic text-red-600">
        <slot></slot>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  props: ["options", "value", "error"],
  data() {
    return {
      selected: null
    };
  },
  methods: {
    selectedOption(option) {
      if (this.value) {
        return option.name === this.value.name;
      }

      return false;
    },
    change(e) {
      const selectedName = e.target.value;
      const option = this.options.find(option => {
        return selectedName === option.name;
      });
      this.$emit("input", option);
    }
  }
};
</script>

<style></style>
