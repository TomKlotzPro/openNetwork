<template>
  <div class="mb-4">
    <div class="relative">
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :class="[error ? 'border-red-600 focus:border-red-600' : '']" v-model="selected" @change="change"
      >
        <option value="default">Select Difficulty</option>
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
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
    change(e) {
      if (this.options) {
        const selectedName = e.target.value;
        const option = this.options.find(option => {
          return selectedName === option;
        });
        this.$emit("input", option);
      }
    }
  }
};
</script>

<style></style>
