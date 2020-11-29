<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Status
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="project_status"
          class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
          >Status</label
        >
        <SelectOption
          :value="project.status"
          status="true"
          @change="$event => emitProjectValue($event, 'status')"
        ></SelectOption>
      </div>
    </div>
  </span>
</template>

<script>
import SelectOption from "~/components/SelectOption";
export default {
  components: {
    SelectOption
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitProjectValue(payload, field) {
      this.$emit("projectValueUpdated", { payload, field });
    }
  }
};
</script>

<style></style>
