<template>
  <nuxt-link v-if="to" :to="to" :class="[buttonCheck, buttonStyles.container]">
    <div class="text">
      <p :class="buttonStyles.paragraph">
        <slot></slot>
      </p>
    </div>
  </nuxt-link>
  <component
    v-else
    :is="setButtonType"
    :class="[buttonStyles.container, buttonCheck]"
  >
    <div class="text">
      <p :class="[buttonStyles.paragraph, buttonDisabled && 'text-grey-400']">
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
    },
    buttonDisabled: {
      type: Boolean
    }
  },
  data() {
    return {
      setButtonType: this.buttonType,
      buttonStyles: {
        container:
          "rounded-md border-0 inline-flex overflow-hidden px-6 md:px-8 text-white items-center justify-center relative cursor-pointer font-hind no-underline h-11 md:h-12",
        paragraph:
          "relative z-10 pointer-events-none font-hind text-sm md:text-lg"
      }
    };
  },
  computed: {
    buttonCheck: function() {
      if (this.buttonColor === "nebula") return "button nebula text-white";
      else if (this.buttonColor === "black") return "button black text-white";
      else if (this.buttonColor === "disabled")
        return "button disabled text-white";
      else return "button white text-grey-500";
    }
  }
};
</script>

<style scoped>
/** Button General */
.button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
}
.button:hover {
  transform: translateY(-2px);
}
.button:focus {
  outline: 0px;
}
/** Button General End */
/** Button Nebula */
.button.nebula {
  background: radial-gradient(100% 100% at 100% 0%, #5adaff 0%, #3c4fe0 100%);
  box-shadow: 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 rgba(58, 65, 111, 0.5);

  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  min-width: 200px;
}
.button.nebula:hover {
  box-shadow: 0 4px 8px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #2b3cbb;
}
.button.nebula:focus {
  box-shadow: inset 0 0 0 1.5px #2b3cbb, 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #2b3cbb;
}
.button.nebula:active {
  box-shadow: inset 0 3px 7px #2b3cbb;
  transform: translateY(2px);
}
/** Button Nebula End */
/** Button White */
.button.white {
  background: #f5f5fa;
  box-shadow: 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #cfd1e3;
  min-width: 200px;
}
.button.white:hover {
  box-shadow: 0 4px 8px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #cfd1e3;
  transform: translateY(-2px);
}
.button.white:focus {
  box-shadow: inset 0 0 0 1.5px #cfd1e3, 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #cfd1e3;
}
.button.white:active {
  box-shadow: inset 0 3px 7px #cfd1e3;
  transform: translateY(2px);
}
/** Button White End */
/** Button Black */
.button.black {
  background: radial-gradient(100% 100% at 100% 0%, #5a5e9a 0%, #23263b 100%);
  box-shadow: 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 rgba(58, 65, 111, 0.5);

  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  min-width: 200px;
}
.button.black:hover {
  box-shadow: inset 0 0 0 1.5px #23263b, 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #23263b;
}
.button.nebula:focus {
  box-shadow: inset 0 0 0 1.5px #23263b, 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #23263b;
}
.button.nebula:active {
  box-shadow: inset 0 3px 7px #23263b;
  transform: translateY(2px);
}
/** Button Disabled */
.button.disabled {
  background: #cccccc;
  box-shadow: 0 2px 4px rgba(45, 35, 66, 0.4),
    0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -3px 0 #999999;
  min-width: 200px;
}
/** Button Disabled End */
</style>
