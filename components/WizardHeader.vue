<template>
  <Fragment>
    <h2
      class="my-0 mx-auto text-sols text-xl lg:text-3xl font-hind font-normal leading-none text-center"
    >
      {{ title }}
    </h2>
    <p
      class="mt-2 lg:mt-3 mb-0 text-grey-400 font-hind text-base lg:text-lg font-normal leading-relaxed text-center"
    >
      {{ subTitle }}
    </p>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
