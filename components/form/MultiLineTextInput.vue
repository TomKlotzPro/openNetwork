<template>
  <div class="mt-3">
    <label
      for="project_title"
      class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
      >{{ label }}</label
    >
    <!-- TODO: Change the key of this div-->
    <!--We could fo example generate a key when receiving props-->
    <div
      v-for="(input, index) in inputs"
      :key="input.index"
      class="flex mt-2"
      @mouseover="hover = index"
      @mouseleave="hover = null"
    >
      <Input
        @input="emitUpdate($event, index)"
        name="project_advantage"
        :value="input.value"
        :placeholder="placeHolder"
        type="text"
        noLabel
      />
      <Button
        buttonType="button"
        @click.native="emitRemove(index)"
        buttonColor="black"
        :class="['ml-3 w-32', hover === index ? 'opacity-100' : 'opacity-0']"
        >Delete</Button
      >
    </div>
    <Button
      buttonType="button"
      @click.native="emitAdd"
      buttonColor="nebula"
      class="mt-3 w-32"
      >Add</Button
    >
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    inputs: {
      type: Array,
      required: true
    },
    placeHolder: {
      type: String,
      required: false
    }
  },
  components: {
    Button,
    Input
  },
  data() {
    return {
      hover: null
    };
  },
  computed: {
    lastInput() {
      return this.inputs[this.inputs.length - 1];
    },
    hasInputs() {
      return this.inputs.length > 0;
    },
    hasLastInputValue() {
      return this.lastInput && this.lastInput.value !== "";
    },
    canDeleteInput() {
      return this.inputs.length > 1;
    },
    canAddInput() {
      return this.hasInputs && this.hasLastInputValue;
    }
  },
  methods: {
    emitAdd() {
      if (this.canAddInput || this.inputs.length === 0) {
        this.$emit("addInput");
      }
    },
    emitRemove(index) {
      this.canDeleteInput && this.$emit("removeInput", index);
    },
    emitUpdate(payload, index) {
      this.$emit("updateinput", { payload, index });
    }
  }
};
</script>

<style></style>
