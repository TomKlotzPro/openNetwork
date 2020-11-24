<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Project Landing Page
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="col-span-6 mb-3">
      <Input
        @input="$event => emitProjectValue($event, 'title')"
        :value="project.title"
        name="project_title"
        placeholder="ES6 BackEnd REST API"
        type="text"
        stylesLabel="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
      >
        Project Title
      </Input>
    </div>
    <div class="col-span-6 mb-3">
      <Input
        @input="$event => emitProjectValue($event, 'subtitle')"
        :value="project.subtitle"
        name="project_sub_title"
        placeholder="Implementing the NextGen JavaScript BackEnd REST API"
        type="text"
        stylesLabel="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
      >
        Project subtitle
      </Input>
    </div>
    <div class="col-span-6 mb-3">
      <label
        for="project_description"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project Description</label
      >
      <div class="rounded shadow">
        <!-- TODO: Refactor Input component to use textarea -->
        <textarea
          @input="$event => emitProjectValue($event, 'description')"
          :value="project.description"
          id="project_description"
          rows="3"
          class="form-textarea mt-1 block w-full transition text-l text-grey-800 border focus:shadow-none focus:border-grey-800 focus:outline-none sm:text-sm sm:leading-5"
          placeholder="Write something catchy about your awesome project!"
        ></textarea>
      </div>
    </div>

    <div class="col-span-6 sm:col-span-3 mb-3">
      <label
        for="project_category"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project Category</label
      >
      <SelectOption
        :options="categories"
        :value="project.category"
        @input="$event => emitProjectValue($event, 'category')"
      ></SelectOption>
    </div>

    <div class="col-span-6 sm:col-span-3">
      <label
        for="git_repository"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Git Repository</label
      >
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center px-3 rounded-l border shadow border-r-0 border-sols bg-sols text-white text-xs tracking-widest"
        >
          URL
        </span>
        <Input
          @input="$event => emitProjectValue($event, 'productLink')"
          :value="project.productLink"
          name="git_repository"
          placeholder="https://www.example.com"
          type="text"
          addStyles="rounded-l-none"
          noLabel
        />
      </div>
    </div>
  </span>
</template>

<script>
import Input from "~/components/shared/Input";
import SelectOption from "~/components/SelectOption";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items;
    }
  },
  methods: {
    emitProjectValue(payload, field) {
      this.$emit("projectValueUpdated", { payload, field });
    }
  },
  components: {
    Input,
    SelectOption
  }
};
</script>

<style></style>
