<template>
  <footer class="pt-48 bg-white">
    <div class="pt-12 bg-white px-5 relative">
      <div
        class="md:flex m-auto p-4 md:items-center md:justify-between max-w-7xl"
      >
        <div class="flex text-grey-500 items-center justify-center">
          <LogoNode class="mr-4 h-6 w-6" />
          <span
            class="text-grey-500 font-hind text-xs md:text-xs font-semibold tracking-widest uppercase"
          >
            <span class="font-light">
              2020 Openetwork - All rights reserved.
            </span>
          </span>
        </div>
        <ul
          class="align-center flex justify-center space-x-3 md:flex m-0 p-0 pt-4 md:pt-0 md:align-center sm:justify-end list-none align-center"
        >
          <li
            class="text-grey-500 font-hind text-xs lg:text-xs font-semibold tracking-widest uppercase"
          >
            <span class="text-grey-500 font-light no-underline">MADE</span>
          </li>
          <li
            class="text-grey-500 font-hind text-xs lg:text-xs font-semibold tracking-widest uppercase md:ml-6 lg:ml-12"
          >
            <span class="text-grey-500 font-light no-underline">WITH</span>
          </li>
          <li
            class="text-grey-500 font-hind text-xs lg:text-xs font-semibold tracking-widest uppercase md:ml-6 lg:ml-12"
          >
            <span class="text-grey-500 font-light no-underline">❤</span>
          </li>
          <li
            class="text-grey-500 font-hind text-xs lg:text-xs font-semibold tracking-widest uppercase md:ml-6 lg:ml-12"
          >
            <span class="text-grey-500 font-light no-underline">in</span>
          </li>
          <li
            class="text-grey-500 font-hind text-xs lg:text-xs font-semibold tracking-widest uppercase md:ml-6 lg:ml-12"
          >
            <span class="text-grey-500 font-light no-underline">France</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoNode from "../../assets/images/opentwk.svg?inline";

export default {
  components: {
    LogoNode
  }
};
</script>
