<template>
  <div
    class="flex p-5 lg:p-3 items-center justify-center min-h-screen"
  >
    <div class="m-auto">
      <div
        class="rounded-sm p-12 relaive card-shadow text-center bg-gradient-to-b from-white to-grey-100"
      >
        <div class="md:flex md:flex-col md:justify-between">
          <h1 class="mt-0 mb-8 text-grey-900 lg:text-2xl font-normal font-hind">
            <div class="lg:text-4xl">{{ title }}</div>
          </h1>
          <div
            class="mt-0 mb-0 text-grey-600 text-base lg:text-lg font-normal leading-snug lg:leading-relaxed"
          >
            {{ content }}
          </div>
        </div>
        <Button :to="link" buttonColor="nebula" class="my-8 mx-auto lg:my-12">{{
          linkText
        }}</Button>
        <div class="grid info-grid gap-x-8 lg:gap-x-12">
          <ErrorInfo
            title="Support"
            subTitle="Need help?"
            link="support@opntwk.google.com"
          />
          <ErrorInfo
            title="Contribute"
            subTitle="Check out our Github repository"
            link="https://github.com/TomKlotzPro/openNetwork"
            linkText="Github"
          />
        </div>
      </div>
      <nuxt-link to="/">
      <LogoNode class="block mt-12 mx-auto flex-shrink h-40 w-40"/>
    </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import ErrorInfo from "./ErrorInfo";
import LogoNode from "../assets/images/opentwk_w_name.svg?inline";

export default {
  components: {
    Button,
    ErrorInfo,
    LogoNode
  },
  props: {
    title: {
      required: true,
      type: String
    },
    content: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    },
    linkText: {
      required: false,
      type: String
    }
  }
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.15),
    0 2px 4px 0 rgba(93, 100, 148, 0.2);
}
@media (min-width: 500px) {
  .info-grid {
    grid-template-columns: repeat(2, 6fr);
  }
}
</style>
