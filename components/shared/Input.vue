<template>
  <Fragment v-if="noLabel">
    <span v-if="showTextCount" class="text-grey-400 absolute positioning">
      {{ remainingLength }}
    </span>
    <input
      :id="name"
      class="w-full px-3 py-2 h-12 text-base leading-tight text-grey-800 rounded shadow appearance-none border focus:border-grey-800 focus:outline-none"
      :class="[error ? 'border-red-600 focus:border-red-600' : '', addStyles]"
      v-bind="$attrs"
      :maxlength="maxLength"
      :value="value"
      ref="input"
      @input="emitInputValue"
    />

    <span v-if="error">
      <p class="text-xs italic text-red-600">
        <slot></slot>
      </p>
    </span>
  </Fragment>
  <Fragment v-else-if="tagInput">
    <label
      :class="
        stylesLabel
          ? stylesLabel
          : 'block mb-2 text-base font-bold text-grey-800'
      "
      :for="name"
    >
      <slot></slot>
    </label>
    <div
      class="w-full h-12 border border-solid border-input text-base py-0 px-2.5 rounded shadow"
    >
      <div
        v-for="(tag, index) in tags"
        :key="tag"
        class="h-7 float-left custom_margin bg-nebula-500 leading-8 py-0 px-2 rounded text-white uppercase tracking-widest font-hind font-normal"
      >
        <span class="cursor-pointer opacity-75" @click="emitRemoveTag(index)"
          >x</span
        >
        {{ tag }}
      </div>
      <input
        type="text"
        placeholder="Enter a tag..."
        class="border-none border-0 outline-none text-sm leading-10 bg-none bg-transparent styles focus:outline-none focus:ring-0 p-0"
        @keydown.enter="emitAddTag"
        @keydown.188="emitAddTag"
        @keydown.delete="emitRemoveLastTag"
      />
    </div>
  </Fragment>
  <Fragment v-else>
    <label
      :class="
        stylesLabel
          ? stylesLabel
          : 'block mb-2 text-base font-bold text-grey-800'
      "
      :for="name"
    >
      <slot></slot>
    </label>
    <input
      :id="name"
      class="w-full px-3 py-2 h-12 text-base leading-tight text-grey-800 rounded shadow appearance-none border focus:border-grey-800 focus:outline-none"
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
    tagInput: {
      type: Boolean,
      required: false
    },
    noLabel: {
      type: Boolean,
      default: false
    },
    showTextCount: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      required: false
    },
    stylesLabel: {
      type: String,
      required: false
    },
    tags: {
      type: Array,
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
    focus: function() {
      this.$refs.input.focus();
    },
    emitInputValue($event) {
      this.currentValue = $event.target.value;
      this.$emit("input", this.currentValue);
    },
    emitRemoveLastTag($event) {
      if (event.target.value.length === 0) {
        this.emitRemoveTag(this.tags.length - 1);
      }
    },
    emitRemoveTag(index) {
      this.$emit("removeTag", index);
    },
    emitAddTag(event) {
      event.preventDefault();
      let value = event.target.value.trim();
      if (value.length > 0) {
        this.$emit("addTag", value);
        event.target.value = "";
      }
    }
  }
};
</script>

<style scoped>
.positioning {
  right: 23%;
  top: 53%;
}
.custom_margin {
  margin-right: 10px;
  margin-top: 9px;
}
.styles {
  line-height: 50px;
}
</style>
