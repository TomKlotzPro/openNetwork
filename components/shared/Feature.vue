<template>
  <div>
    <div
      class="flex items-center justify-center h-12 w-12 rounded text-white"
      :class="styles"
    >
      <slot name="svg"></slot>
    </div>
    <div class="mt-5">
      <dt class="text-lg leading-6 font-medium font-hind text-sols">
        <slot name="headline"></slot>
      </dt>
      <dd class="mt-2 font-hind text-base text-grey-500">
        <slot name="description"></slot>
      </dd>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styles: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
