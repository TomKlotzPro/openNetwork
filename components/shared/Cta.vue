<template>
  <div class="bg-white" v-if="cta_type === 'image_in_container'">
    <div class="max-w-7xl mx-auto pb-16">
      <div
        class="bg-sols rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div
          class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <slot name="headline"></slot>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">
              <slot name="description"></slot>
            </p>
            <slot name="button"></slot>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            v-if="image"
            class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            :src="require(`@/assets/images/${image}`)"
            :alt="altImg"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative bg-white rounded-lg shadow-xl"
    v-else-if="cta_type === 'image_next_to_container'"
  >
    <div
      class="h-56 bg-transparent sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img
        class="w-full h-full rounded-tl-lg rounded-bl-lg object-cover"
        :src="require(`@/assets/images/${image}`)"
        alt=""
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-sols">
          <slot name="intro"></slot>
        </h2>
        <p
          class="mt-2 text-sols text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          <slot name="headline"></slot>
        </p>
        <p class="mt-3 text-lg text-sols">
          <slot name="description"></slot>
        </p>
        <div class="mt-8">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    },
    altImg: {
      type: String,
      required: false
    },
    cta_type: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
