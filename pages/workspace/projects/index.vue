<template>
  <div
    class="bg-sols text-white rounded shadow-xl py-5 px-5  md:flex shadow-lg  mx-6 md:mx-auto my-0 max-w-xl md:max-w-5xl"
  >
    <div class="flex flex-wrap -mx-3 items-center">
      <div class="w-1/4 px-3 text-center hidden md:block">
        <div class="w-full">
          <img class="w-full h-full" src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1603290126/Algolia_com_Blog_assets/Featured_images/ecommerce-holiday-planning/agpkozvg7m8wxc8z4j0d.png">
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
        <div class="p-5 xl:px-8 md:py-5">
          <h3 class="font-hind text-white text-3xl md:text-4xl font-normal leading-none">Raspberry API Back-End</h3>
          <p class="text-white font-hind text-base lg:text-lg font-normal leading-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sit
            asperiores perferendis odit enim natus ipsum reprehenderit eos eum
            impedit tenetur nemo corporis laboriosam veniam dolores quos
            necessitatibus, quaerat debitis.
          </p>
          <div class="flex">
            <div class="pill bg-green-500 bg-opacity-75 text-white rounded-sm text-sm uppercase tracking-widest px-4 py-1 mr-2">
              Published
            </div>
            <div class="pill bg-gray-400 rounded-sm text-xs px-4 py-1 mr-2">
              #TailwindCSS
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
        <div class="p-5 xl:px-8 md:py-5">
          <Button buttonType="button" buttonColor="nebula" buttonWidth="full" class="mb-4">
            Sign In
          </Button>
          <Button buttonType="button" buttonColor="nebula" buttonWidth="full">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  layout: "workspace",
  components: { Button }
};
</script>

<style scoped>
</style>
