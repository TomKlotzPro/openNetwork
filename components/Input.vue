<template>
  <Fragment>
    <label class="block mb-2 text-l font-bold text-grey-800" :for="name">
      <slot></slot>
    </label>
    <input
      :id="name"
      class="w-full px-3 py-2 h-12 text-l leading-tight text-grey-800 rounded shadow appearance-none border focus:border-grey-800 focus:outline-none"
      :class="error ? 'border-red-600 focus:border-red-600' : ''"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="error">
      <p class="text-xs italic text-red-600">
        <slot name="error_required"></slot>
      </p>
      <p class="text-xs italic text-red-600">
        <slot name="error_message"></slot>
      </p>
    </span>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "Input",
  components: {
    Fragment
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped></style>
