<template>
  <a
    class="bg-white px-6 md:px-8 rounded font-hind h-10 md:h-12 flex items-center justify-center no-underline"
    :class="[buttonCheck, buttonWidth ? 'w-' + buttonWidth : 'w-48']"
  >
    <div class="text">
      <p
        class="font-hind text-xs md:text-xs font-semibold uppercase tracking-widest"
      >
        <slot></slot>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["buttonColor", "buttonWidth"],
  computed: {
    buttonCheck: function() {
      if (this.buttonColor === "nebula") {
        const classes = "nebula-button text-white";
        return classes;
      } else if (this.buttonColor === "black") {
        const classes = "black-button text-white";
        return classes;
      } else {
        const classes = "white-button text-grey-500";
        return classes;
      }
    }
  }
};
</script>

<style scoped>
.white-button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
  background: linear-gradient(#fff, #e4e4e9) no-repeat;
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
}
.nebula-button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
  text-shadow: 0 1px 0 #2b3cbb;
  background: linear-gradient(#aeb7ff, #5468ff) no-repeat;
  box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #4b58ba;
}
.black-button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
  text-shadow: 0 1px 0 #23263b;
  background: linear-gradient(#484c7a, #36395a) no-repeat;
  box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #5a5e9a;
}
.white-button:hover,
.white-button:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  transform: translateY(-2px);
}
.nebula-button:hover,
.nebula-button:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #4b58ba;
  transform: translateY(-2px);
}
.black-button:hover,
.black-button:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #5a5e9a;
  transform: translateY(-2px);
}
.white-button:active {
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #e4e4e9;
  transform: translateY(2px);
}
.nebula-button:active {
  background-blend-mode: multiply, normal;
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #5468ff;
  transform: translateY(2px);
}
.blaack-button:active {
  background-blend-mode: multiply, normal;
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #36395a;
  transform: translateY(2px);
}
</style>
