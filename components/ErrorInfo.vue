<template>
  <div>
    <h2
      class="mt-0 mb-2 text-grey-900 text-xs font-semibold tracking-widest uppercase font-poppins"
    >
      {{ title }}
    </h2>
    <p class="m-0 text-grey-600 text-sm font-normal leading-snug">
      {{ subTitle }}
      <br />
      <a :href="'mailto:'+link" class="text-nebula-500">{{ linkText ? linkText : link }}</a>
    </p>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  props: {
    title: {
      required: true,
      type: String
    },
    subTitle: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    },
    linkText: {
      required: false,
      type: String
    }
  }
};
</script>
