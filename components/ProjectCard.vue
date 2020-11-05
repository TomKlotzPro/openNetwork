<template>
  <div
    class="md:flex shadow-lg  mx-6 md:mx-auto my-8 max-w-lg md:max-w-2xl h-64"
  >
    <img
      class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
      src="https://lh3.googleusercontent.com/proxy/feqntPZ2xX2r-ybB2sUvjgZT_jHb0ePgv2asMAEpubIww_-IT2VvD7smgS4oqBsDIS0TCjAE5ZkBO2O-u9fXoulcx4zTP5HQTyv9BJttLIwbnW8Q9Ixhd59vO6dPyg1EBw"
      alt="bag"
    />
    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
        <h3 class="mt-0 mb-2 truncate font-hind text-lg md:text-2xl text-grey-700 font-normal leading-snug mr-auto">Open Network</h3>
        <p class="text-nebula-500 font-poppins text-xs md:text-xs font-semibold tracking-widest uppercase">
          By Tom Klotz
        </p>
      </div>
       <p class="font-hind text-base md:text-lg leading-7 text-grey-500 truncate white-space">
        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis
        numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ
      </p>
      <div class="flex items-center justify-center mt-4 top-auto">
        <span class="mr-auto">
          <Button buttonWidth="40">Learn More</Button>
        </span>
        <Button buttonColor="black" buttonWidth="40">Git Repo</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {};
</script>

<style scoped>
.white-space {
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
