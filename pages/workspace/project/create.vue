<template>
  <div id="createProject" v-cloak>
    <Navbar exitLink="/workspace/projects" />
    <div class="flex justify-center items-center min-h-full">
      <div class="w-full lg:w-1/3 xl:w-2/4 py-5 px-4 my-10">
        <form-wizard
          class="w-full rounded-sm mx-auto my-0 relative bg-white shadow-lg rounded overflow-hidden"
          shape="tab"
          back-button-text="Back"
          next-button-text="Next"
          finish-button-text="Submit"
          ref="wizard"
          color="#5468ff"
          error-color="#ee243c"
          :start-index="0"
          @on-complete="createProject"
        >
          <div slot="title"></div>
          <tab-content
            title="Project Title"
            class="grid"
            :before-change="() => validateStep('title')"
          >
            <WizardHeader
              title="Give a title to your project."
              subTitle="No worries you can change it later."
            />
            <span class="w-3/5 mx-auto mt-5">
              <Input
                name="project_name"
                :error="$v.title.$error"
                noLabel
                showTextCount
                :maxLength="60"
                placeholder="C# REST API"
                v-model="title"
                >Title is required!</Input
              >
            </span>
          </tab-content>
          <tab-content
            title="Project Category"
            class="grid"
            :before-change="() => validateStep('category')"
          >
            <WizardHeader
              title="Which category fits your project?"
              subTitle="If your are not sure about it you can change it later."
            />
            <span class="w-3/5 mx-auto mt-5">
              <SelectOption
                :options="categories"
                v-model="category"
                :error="$v.category.$error"
                >Category is required</SelectOption
              >
            </span>
          </tab-content>
          <Button buttonType="button" slot="prev">Previous</Button>
          <Button buttonType="button" buttonColor="nebula" slot="next"
            >Next</Button
          >
          <Button buttonType="button" buttonColor="nebula" slot="finish"
            >Finish</Button
          >
        </form-wizard>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
import WizardHeader from "~/components/WizardHeader";
import SelectOption from "~/components/SelectOption";
import Navbar from "~/components/shared/Navbar";
import { required } from "vuelidate/lib/validators";
export default {
  layout: "workspace",
  components: {
    Button,
    Input,
    WizardHeader,
    Navbar,
    SelectOption,
  },
  data() {
    return {
      title: "",
      category: "",
    };
  },
  validations: {
    title: {
      required,
    },
    category: {
      required,
    },
  },
  computed: {
    categories() {
      return this.$store.state.category.items;
    },
  },
  fetch({ store }) {
    return store.dispatch("category/fetchCategories");
  },
  methods: {
    validateStep(step) {
      this.$v[step].$touch();
      const isValid = !this.$v[step].$invalid;
      return isValid;
    },
    createProject() {
      this.$store
        .dispatch("user/project/createProject", {
          title: this.title,
          category: this.category,
        })
        .then((_) => this.$router.push("/workspace/projects"));
    },
  },
};
</script>

<style lang="scss">
// Vue Form Wizard
.vue-form-wizard {
  .wizard-header {
    padding: 0;
  }
  .wizard-tab-content {
    width: 100%;
    float: left;
    padding: 2rem 1rem;
  }

  // Tab navigation
  .wizard-nav {
    position: relative;
    text-align: center;
    display: flex;
    flex-wrap: wrap;

    li,
    a {
      flex: 1;
      align-items: center;
      flex-wrap: wrap;
    }

    > li > a {
      color: #718096;

      &.disabled {
        pointer-events: none;
        cursor: default;
      }
    }

    > li.active > a .wizard-icon {
      color: #fff;
    }

    // Step title
    .stepTitle {
      letter-spacing: 0.025em;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-family: "Poppins", sans-serif;
      line-height: 2;
    }

    // Step number
    .wizard-icon-circle {
      width: 100%;
      background-color: #e2e8f0;
      border-radius: 0;

      &.checked:hover {
        background-color: #cbd5e0;
      }

      .wizard-icon-container {
        display: flex;
        justify-content: center;
        flex: 1;
        width: 100%;
        border: none;
        background-color: #e2e8f0;
      }

      .wizard-icon {
        font-size: 1.5rem;
        font-style: normal;
        line-height: 2;
        font-family: "Poppins", sans-serif;
      }
    }
  }

  // Progress bar
  &.md .wizard-navigation .wizard-progress-with-circle {
    position: absolute;
    bottom: 0;
    top: unset;
    height: 0.25rem;
    width: 100%;
    background-color: #e2e8f0;

    .wizard-progress-bar {
      position: relative;
      height: 0.25rem;
    }
  }

  // Footer
  .wizard-card-footer {
    width: 100%;
    float: left;
    padding: 1.5rem 1rem;

    .wizard-footer-left {
      float: left;
    }

    .wizard-footer-right {
      float: right;
    }

    // Buttons
    .wizard-btn {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;

      &:focus {
        outline: 0;
      }

      &:hover {
        background-color: #c53030 !important;
      }
    }
  }
}
</style>
