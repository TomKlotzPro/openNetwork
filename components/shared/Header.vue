<template>
  <div class="text-center ">
    <h2
      class="text-4xl font-extrabold font-poppins text-sols sm:text-5xl sm:tracking-tight lg:text-6xl"
    >
      <slot name="title"></slot>
    </h2>
    <p class="mt-5 text-xl text-grey-500">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
