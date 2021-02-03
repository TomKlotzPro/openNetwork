<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Project Tasks
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class="col-span-6 mb-3">
      <Input
        v-model="taskForm.title"
        name="task_title"
        placeholder="Implement integration tests"
        type="text"
        stylesLabel="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
      >
        Task Title
        <template
          v-slot:error_required
          v-if="!$v.taskForm.title.required"
        >
          Task title is required
        </template>
        <template
          v-slot:error_message
          v-if="!$v.taskForm.title.minLength"
        >
          Task title minimum length is 3 characters
        </template>
      </Input>
    </div>

    <div class="col-span-6 sm:col-span-3 mb-3">
      <label
        for="project_category"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Task Difficulty</label
      >
      <SelectDifficulty
        v-model="taskForm.difficulty"
        :options="difficulties"
        :selected="taskForm.difficulty"
      ></SelectDifficulty>
    </div>
    <div class="col-span-6 mb-3">
      <label
        for="project_description"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Task Description</label
      >
      <div class="rounded shadow text-base">
        <TaskDescriptionEditor
          v-model="taskForm.description" />
        <!-- <div
          v-if="!$v.taskForm.description.required"
        >
          Task description is required
        </div>
        <div
          v-if="!$v.taskForm.description.minLength"
        >
          Task description minimum length is 3 characters
        </div> -->
      </div>
    </div>
    <div>
      <Button
      buttonType="button"
      buttonColor="nebula"
      buttonWidth="32"
      class="mt-3"
      @click.native="addTask"
      >Add</Button>
    </div>
  </span>
</template>

<script>
import Input from "~/components/shared/Input";
import TaskDescriptionEditor from "~/components/editor/TaskDescriptionEditor";
import SelectDifficulty from "~/components/SelectDifficulty";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      taskForm: {
        title: "",
        description: "",
        difficulty: "",
      },
      difficulties : ['very easy', 'easy', 'medium', 'hard', 'very hard']
    };
  },
  validations: {
    taskForm: {
      title: {
        required,
        minLength: minLength(3),
      },
      description: {
        required,
        minLength: minLength(3),
      },
      difficulty: {
        required,
      },
    },
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.taskForm.$invalid;
    },
  },
  methods: {
    emitProjectValue(payload, field) {
      this.$emit("projectValueUpdated", { payload, field });
    },
    addTask() {
      this.$v.taskForm.$touch();
      console.log(this.taskForm)
      if(this.isFormValid) {
        this.$store.dispatch('user/project/addProjectTask', this.taskForm);
        //add new task to for
      }
    }
  },
  components: {
    Input,
    SelectDifficulty,
    TaskDescriptionEditor
  }
};
</script>

<style></style>
