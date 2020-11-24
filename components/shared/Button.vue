<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :class="[
      buttonCheck,
      buttonWidth ? 'w-' + buttonWidth : 'w-48',
      buttonStyles.container
    ]"
  >
    <div class="text">
      <p :class="buttonStyles.paragraph">
        <slot></slot>
      </p>
    </div>
  </nuxt-link>
  <component
    v-else
    :is="setButtonType"
    :class="[
      buttonCheck,
      buttonWidth ? 'w-' + buttonWidth : 'w-48',
      buttonStyles.container
    ]"
  >
    <div class="text">
      <p :class="buttonStyles.paragraph">
        <slot></slot>
      </p>
    </div>
  </component>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  props: {
    buttonType: {
      type: String,
      default: "a"
    },
    to: {
      type: String,
      default: ""
    },
    buttonColor: {
      type: String
    },
    buttonWidth: {
      type: String
    }
  },
  data() {
    return {
      setButtonType: this.buttonType,
      buttonStyles: {
        container:
          "bg-white px-6 md:px-8 rounded font-hind h-10 md:h-12 flex items-center cursor-pointer justify-center no-underline",
        paragraph:
          "font-hind text-xs md:text-xs font-semibold uppercase tracking-widest"
      }
    };
  },
  computed: {
    buttonCheck: function() {
      if (this.buttonColor === "nebula") return "button nebula text-white";
      else if (this.buttonColor === "black") return "button black text-white";
      else return "button white text-grey-500";
    }
  }
};
</script>

<style scoped>
.button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
}
.button:hover,
.button:focus {
  transform: translateY(-2px);
}
.button.white {
  background: linear-gradient(#fff, #e4e4e9) no-repeat;
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
}
.button.nebula {
  text-shadow: 0 1px 0 #2b3cbb;
  background: linear-gradient(#aeb7ff, #5468ff) no-repeat;
  box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #4b58ba;
}
.button.black {
  text-shadow: 0 1px 0 #23263b;
  background: linear-gradient(#484c7a, #36395a) no-repeat;
  box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #5a5e9a;
}
.button.white:hover,
.button.white:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  transform: translateY(-2px);
}
.button.nebula:hover,
.button.nebula:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #4b58ba;
}
.button.black:hover,
.button.black:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #5a5e9a;
}
.button.white:active {
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #e4e4e9;
}
.button.nebula:active {
  background-blend-mode: multiply, normal;
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #5468ff;
}
.button.black:active {
  background-blend-mode: multiply, normal;
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #36395a;
}
</style>
