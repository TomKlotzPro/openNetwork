<template>
  <div
    class="bg-sols text-white rounded shadow-xl py-5 px-5  md:flex shadow-lg  mx-6 md:mx-auto my-0 max-w-xl md:max-w-5xl mb-4"
  >
    <div class="flex flex-wrap m-auto w-full items-center">
      <div class="w-1/4 px-3 text-center hidden md:block">
        <div class="w-full">
          <img
            class="w-full h-full"
            :src="image || 'https://dummyimage.com/640x360/fff/aaa'"
          />
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
        <div class="p-5 xl:px-8 md:py-5">
          <h3
            class="font-hind text-white text-2xl md:text-3xl font-normal leading-none"
          >
            {{ title }}
          </h3>
          <p
            class="text-white font-hind text-base lg:text-lg font-normal leading-normal my-4"
            v-if="description"
          >
            {{ description | shortenText(150) }}
          </p>
          <p
            class="text-white font-hind text-base lg:text-lg font-normal leading-normal my-4"
            v-else
          >
            No description yet!
          </p>
          <div class="flex">
            <div
              class="pill bg-opacity-75 text-white rounded-sm text-sm uppercase tracking-widest px-4 py-1 mr-2"
              :class="setProjectStatusClass(status)"
            >
              {{ status }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
        <div class="p-5 xl:px-8 md:py-5">
          <Button
            :to="to"
            buttonColor="nebula"
            buttonWidth="full"
            class="mb-4"
          >
            {{ buttonActionName }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
export default {
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    buttonActionName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  components: {
    Button
  },
  methods: {
    setProjectStatusClass(status) {
      if (!status) return ''
      if (status === 'published') return 'bg-green-500'
      if (status === 'active') return 'bg-nebula-500'
      if (status === 'inactive') return 'bg-orange-500'
      if (status === 'deleted') return 'bg-red-500'
    }
  }
};
</script>

<style scoped></style>
