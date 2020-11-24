<template>
  <ErrorView
    title="Error 401"
    content="You are not authenticated, please login"
    link="/signin"
    linkText="sign in"
  />
</template>

<script>
import ErrorView from "@/components/ErrorView";
export default {
  layout: "custom",
  components: {
    ErrorView
  }
};
</script>
