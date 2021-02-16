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

    <div v-for="(task, index) in project.tasks" 
    :key="task._id"
    @mouseover="hover = index"
    @mouseleave="hover = null">
      <div class="w-full">
        <h3
          class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
        >
          Task : {{task.title}}
        </h3>
      </div>
      <div class="col-span-6 mb-3">
        <BadgeDifficulty :difficulty="task.difficulty" />
      </div>
      <div class="col-span-6 mb-3">
        <p>Description : <span v-html="task.description"></span></p>
      </div>

      <Button
        buttonType="button"
        @click.native="removeTask(index)"
        buttonColor="black"
        buttonWidth="32"
        :class="['ml-3', hover === index ? '' : 'hidden']"
        >Delete</Button
      >

      <div class="hidden sm:block">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
    </div>

    <div class="col-span-6 mb-3">
      <Input
        v-model="taskForm.title"
        name="task_title"
        placeholder="Implement integration tests"
        type="text"
        stylesLabel="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        :error="$v.taskForm.title.$error"
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
        :error="$v.taskForm.difficulty.$error"
      >
        <template
          v-slot:error_required
          v-if="!$v.taskForm.difficulty.required"
        >
          Task difficulty must be selected
        </template>
      </SelectDifficulty>
    </div>
    <div class="col-span-6 mb-3">
      <label
        for="project_description"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Task Description</label
      >
      <div class="rounded shadow text-base">
        <TaskDescriptionEditor
          :initialContent="taskForm.description"
          v-model="taskForm.description"
          :error="$v.taskForm.description.$error">
          <template
            v-if="!$v.taskForm.description.required"
            v-slot:error_required
          >
            Task description is required
          </template>
          <template
            v-if="!$v.taskForm.description.minLength"
            v-slot:error_message
          >
            Task description minimum length is 3 characters
          </template>
        </TaskDescriptionEditor>
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
import BadgeDifficulty from "~/components/shared/BadgeDifficulty";
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
      difficulties : ['very easy', 'easy', 'medium', 'hard', 'very hard'],
      hover: null
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
    
    addTask() {
      this.$v.taskForm.$touch();
      if(this.isFormValid) {
        const {title, difficulty, description} = this.taskForm;
        this.$store.dispatch('user/project/addProjectTask', {title, difficulty, description});
        this.taskForm.title = "";
        this.taskForm.difficulty = "";
        this.taskForm.description = "";
      }
    },
    removeTask(index) {
      this.$store.dispatch('user/project/removeProjectTask', index);
    }
  },
  components: {
    Input,
    SelectDifficulty,
    TaskDescriptionEditor,
    BadgeDifficulty
  }
};
</script>

