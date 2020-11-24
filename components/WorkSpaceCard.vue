<template>
  <div class="p-2 sm:p-10 cursor-pointer" @click="$emit('on-click')">
    <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg">
      <div class="space-y-10">
        <span class="items-center justify-center grid">
          <span :style="imageStyles"></span>
        </span>
        <div class="px-6 py-4">
          <div class="space-y-5">
            <div
              class="text-grey-800 font-poppins text-lg lg:text-2xl font-semibold text-xl mb-2 leading-tight"
            >
              {{ title }}
            </div>
            <p
              class="text-grey-500 font-hind text-lg lg:text-2xl font-normal leading-normal"
            >
              <slot></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    imageStyles() {
      return {
        "background-image": `url(${require(`../assets/images/${this.image}`)})`,
        "background-repeat": "no-repeat",
        width: "130px",
        height: "130px",
        "background-position": "center"
      };
    }
  }
};
</script>

<style scoped>
</style>
