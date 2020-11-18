<template>
  <Fragment v-if="noLabel">
    <span class="text-grey-400 absolute positioning">
      {{ remainingLength }}
    </span>
    <input
      :id="name"
      class="w-full px-3 py-2 h-12 text-l leading-tight text-grey-800 rounded shadow appearance-none border focus:border-grey-800 focus:outline-none"
      :class="[error ? 'border-red-600 focus:border-red-600' : '', addStyles]"
      v-bind="$attrs"
      :maxlength="maxLength"
      :value="value"
      @input="emitInputValue"
    />

    <span v-if="error">
      <p class="text-xs italic text-red-600">
        <slot></slot>
      </p>
    </span>
  </Fragment>
  <Fragment v-else>
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
  data() {
    return {
      currentValue: ""
    };
  },
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
    addStyles: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    noLabel: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 50,
      required: false
    }
  },
  computed: {
    inputLength() {
      return this.currentValue.length || 0;
    },
    remainingLength() {
      if (this.inputLength > 0 && this.inputLength < this.maxLength) {
        return this.maxLength - this.inputLength;
      } else if (this.inputLength === 0) {
        return this.maxLength;
      } else {
        return 0;
      }
    }
  },
  methods: {
    emitInputValue($event) {
      this.currentValue = $event.target.value;
      this.$emit("input", this.currentValue);
    }
  }
};
</script>

<style scoped>
.positioning {
  right: 23%;
  top: 53%;
}
</style>
