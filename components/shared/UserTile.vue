<template>
  <div class="pt-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
      >
        <div class="ml-4 mt-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 rounded-full" :src="avatar" alt="" />
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-7 font-normal text-grey-600">
                {{ name }}
              </h3>
              <p class="text-sm font-hind font-normal text-grey-500">
                <span> @{{ slugifyName }} | {{ date }} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    slugifyName() {
      return slugify(this.name, {
        replacement: "_",
        remove: null,
        lower: true
      });
    }
  }
};
</script>

<style></style>
