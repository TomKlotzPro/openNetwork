<template>
  <component
    v-if="event"
    :is="setlinkType"
    :class="linkStyles"
    @click="$emit('on-click')"
  >
    <span>
      <slot></slot>
    </span>
  </component>
  <component
    v-else-if="provide"
    :is="setlinkType"
    :class="provide"
    @click="$emit('on-click')"
  >
    <span>
      <slot></slot>
    </span>
  </component>
  <nuxt-link v-else-if="customNuxtLink" :to="customNuxtLink" :class="custom" @click="$emit('on-click')">
    <slot></slot>
  </nuxt-link>
  <nuxt-link v-else-if="link" :to="link" :class="linkStyles">
    <span>
      <slot></slot>
    </span>
  </nuxt-link>
  <component v-else :is="setlinkType" :class="linkStyles">
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    linkType: {
      type: String,
      default: "a"
    },
    link: {
      type: String,
      required: false
    },
    customNuxtLink: {
      type: String,
      required: false
    },
    provide: {
      type: String,
      required: false
    },
    event: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      setlinkType: this.linkType,
      linkStyles:
        "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-grey-500 items-center justify-center uppercase hover:text-nebula-500 tracking-widest font-semibold text-xs",
      custom:
        "border-transparent text-grey-500 hover:border-grey-300 hover:text-grey-700 inline-flex items-center px-1 pt-1 border-b-2 text-xs font-medium uppercase tracking-widest text-xs"
    };
  }
};
</script>

<style></style>
