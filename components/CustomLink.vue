<template>
  <component
    v-if="event"
    :is="setlinkType"
    :class="[
      defaultLink ? defaultStyles : linkStyles,
      isActive
        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
    ]"
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
  <nuxt-link
    v-else-if="customLink"
    :to="url"
    :class="[
      custom,
      isActive
        ? 'border-nebula-500 text-sols'
        : 'border-transparent text-grey-500 hover:border-grey-300 hover:text-grey-700'
    ]"
  >
    <slot></slot>
  </nuxt-link>
  <nuxt-link v-else-if="link" :to="link" :class="linkStyles">
    <span>
      <slot></slot>
    </span>
  </nuxt-link>
  <nuxt-link
    v-else-if="defaultLink"
    :to="url"
    :class="[
      defaultStyles,
      isActive
        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
    ]"
  >
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
    url: {
      type: String,
      required: false
    },
    customLink: {
      type: Boolean,
      required: false
    },
    provide: {
      type: String,
      required: false
    },
    defaultLink: {
      type: Boolean,
      required: false
    },
    styles: {
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
        "inline-flex items-center px-1 pt-1 border-b-2 text-xs font-medium uppercase tracking-widest",
      defaultStyles:
        "block pl-3 pr-4 py-2 border-l-4 text-xs font-medium uppercase tracking-widest"
    };
  },
  computed: {
    isActive() {
      return this.url === this.$route.path;
    }
  }
};
</script>

<style></style>
