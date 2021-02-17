<template>
  <Fragment>
    <Navbar exitLink="/workspace/projects">
      <template #actionMenu>
        <Button
          buttonType="button"
          @click.native = "updateProject"
          :buttonColor="!canUpdateProject ? 'disabled' : 'nebula'"
          :disabled="!canUpdateProject"
          buttonWidth="40"
          :buttonDisabled="!canUpdateProject"
        >
          Save
        </Button>
      </template>
    </Navbar>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6 mt-6">
        <div class="md:col-span-1 mx-auto">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg font-semibold uppercase tracking-widest text-xs leading-6 text-grey-700 mb-2"
            >
              Project Editing
            </h3>
            <ul class="mt-4 text-sm leading-5 text-gray-600">
              <li
                class="border-l-4 border-grey-200 py-2 pl-4 pr-2 mb-4"
                :class="activeComponentStyle(1)"
              >
                <a @click.prevent="navigateToComponent(1)"
                  >Target Your Audience</a
                >
              </li>
              <li
                class="border-l-4 border-grey-200 py-2 pl-4 pr-2 mb-4"
                :class="activeComponentStyle(2)"
              >
                <a @click.prevent="navigateToComponent(2)"
                  >Project Landing Page</a
                >
              </li>
              <li
                class="border-l-4 border-grey-200 py-2 pl-4 pr-2 mb-4"
                :class="activeComponentStyle(3)"
              >
                <a @click.prevent="navigateToComponent(3)"
                  >Project Tasks</a
                >
              </li>
            </ul>
          </div>

          <div class="px-4 sm:px-0">
            <h3
              class="text-lg font-semibold uppercase tracking-widest text-xs leading-6 text-grey-700 mb-2"
            >
              Project Management
            </h3>
            <ul class="mt-4 text-sm leading-5 text-gray-600">
              <li
                class="border-l-4 border-grey-200 py-2 pl-4 pr-2 mb-4"
                :class="activeComponentStyle(4)"
              >
                <a @click.prevent="navigateToComponent(4)"
                  >Tags and Image</a
                >
              </li>
              <li
                class="border-l-4 border-grey-200 py-2 pl-4 pr-2 mb-4"
                :class="activeComponentStyle(5)"
              >
                <a @click.prevent="navigateToComponent(5)">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2 mr-8 mb-3">
          <div>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white sm:p-6">
                <keep-alive>
                  <component
                  @projectValueUpdated="handleProjectUpdate"
                  :is="activeComponent" :project="project"> </component>
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import LandingPage from "~/components/workspace/LandingPage";
import Status from "~/components/workspace/Status";
import Navbar from "~/components/shared/Navbar";
import TagsImage from "~/components/workspace/TagsImage";
import TargetAudience from "~/components/workspace/TargetAudience";
import Tasks from "~/components/workspace/Tasks";
import Input from "~/components/shared/Input";
import ComponentsMixin from '~/mixins/ComponentsMixin';
import { mapState } from 'vuex'
export default {
  layout: "workspace",
  components: {
    Fragment,
    Status,
    TagsImage,
    TargetAudience,
    Tasks,
    LandingPage,
    Navbar
  },
  mixins: [ComponentsMixin],
  data() {
    return {
      steps: ["TargetAudience", "LandingPage", "Tasks", "TagsImage", "Status"]
    };
  },
  async fetch({store, params}) {
    await store.dispatch('user/project/fetchProjectById', params.id)
    await store.dispatch('category/fetchCategories')
  },
  computed: {
    ...mapState ({
      project: ({user}) => user.project.item,
      canUpdateProject: ({user}) => user.project.canUpdateProject
    })
  },
  methods: {
    updateProject() {
      this.$store.dispatch('user/project/updateProject').then(() => this.$toasted.global.on_success({
        message: 'Your project update was successful!'
      })).catch(error => {
        console.log(error);
        this.$toasted.global.on_error({
        message: 'Sorry something went wrong!'
      })})
    },
    handleProjectUpdate({payload, field}) {
      this.$store.dispatch('user/project/updateProjectValue', {field, payload})
    }
  }
};
</script>

<style></style>
