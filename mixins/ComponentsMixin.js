export default {
  data() {
    return {
      activeStep: 1,
      steps: []
    };
  },
  computed: {
    activeComponent() {
      return this.steps[this.activeStep - 1]
    }
  },
  methods: {
    navigateToComponent(step) {
      this.activeStep = step;
    },
    activeComponentStyle(step) {
      return this.activeStep === step ? 'border-nebula-500' : ''
    }
  }
};
