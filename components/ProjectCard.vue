<template>
  <div
    class="md:flex shadow-lg  mx-6 md:mx-auto my-8 max-w-lg md:max-w-2xl h-64"
  >
    <img
      class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
      :src="project.image"
      alt="bag"
    />
    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
        <h3 class="mt-0 mb-2 truncate font-hind text-lg w-56 md:text-2xl text-grey-700 font-normal leading-snug mr-auto">{{project.title}}</h3>
        <p class="text-nebula-500 font-poppins text-xs md:text-xs font-semibold tracking-widest uppercase">
          By {{project.author.name}}
        </p>
      </div>
       <p class="font-hind text-base md:text-lg leading-7 text-grey-500 truncate white-space">
        {{project.description}}
      </p>
      <div class="flex items-center justify-center mt-4 top-auto">
        <span class="mr-auto">
          <Button buttonType="a" buttonWidth="40">Learn More</Button>
        </span>
        <Button buttonType="a" buttonColor="black" buttonWidth="40">Git Repo</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.white-space {
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
