<template>
  <div class="p-2 sm:p-4 cursor-pointer" @click="$emit('on-click')">
    <div
      class="py-16 max-w-lg rounded overflow-hidden shadow-lg"
      :class="styles"
    >
      <div class="space-y-10">
        <span class="items-center justify-center grid">
          <span :style="imageStyles"></span>
        </span>
        <div class="px-6 py-4">
          <div class="space-y-5">
            <div
              class="text-sols flex font-hind text-lg lg:text-2xl font-semibold mb-2 leading-tight"
            >
              {{ title }}
              <p
                v-if="info"
                class="inline-flex items-center px-3 py-0.5 rounded text-xs font-semibold uppercase tracking-widest"
                :class="'bg-nebula-100 border ml-2 border-nebula-500 text-nebula-500'"
              >
                <span>
                  🔥 Coming soon
                </span>
              </p>
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
    },
    styles: {
      type: String,
      required: false
    }
    ,
    info: {
      type: Boolean,
      required: false
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

<style scoped></style>
