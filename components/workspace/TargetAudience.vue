<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Target your Audience
      </h2>
    </div>

    <div class="hidden w-full sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="my-4">
      <MultiLineTextInput
      @addInput="addInput('wsl')"
      @removeInput="removeInput($event,'wsl')"
      @updateinput="updateinput($event, 'wsl')"
      :inputs="project.wsl"
      label = "What will the community benefit"
      placeHolder="What is the added value of your project?"
      />
      <MultiLineTextInput
      @addInput="addInput('requirements')"
      @removeInput="removeInput($event,'requirements')"
      @updateinput="updateinput($event, 'requirements')"
      :inputs="project.requirements"
      label = "What skills are needed to contribute"
      placeHolder="e.g. Have a solid knowledge on NodeJS"
      />
    </div>
  </span>
</template>

<script>
import Button from "~/components/shared/Button";
import MultiLineTextInput from "~/components/form/MultiLineTextInput";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Button,
    MultiLineTextInput
  },
  methods: {
    addInput(field) {
      this.$store.commit('user/project/addInput', field)
    },
    removeInput(index, field) {
      this.$store.commit('user/project/removeInput', {field, index})
    },
    updateinput({payload, index}, field) {
      this.$store.dispatch('user/project/updateInput', {field, payload, index})
    }
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style></style>
