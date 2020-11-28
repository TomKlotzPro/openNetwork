<template>
  <!-- wrapper -->
  <section class="m-2 font-sans leading-normal flex">
    <!-- card container -->
    <div class="max-w-lg w-full shadow-lg rounded overflow-hidden m-4 sm:flex">
      <div
        class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
        style="background-image: url('https://unsplash.it/804/800')"
      ></div>

      <!-- card-content -->
      <div class="px-6 py-4">
        <h2 class="mb-2 font-black">{{ title }}</h2>

        <!-- button -->
        <Button
          buttonColor="nebula"
          buttonWidth="full"
          @click.native="goToChannel"
        >
          Go to channel
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    channelId: {
      default: "",
    },
  },
  methods: {
    goToChannel() {
      this.$store
        .dispatch("chat/conversation/setConversations", this.channelId)
        .then((_) => {
          this.$router.push("/workspace/chat/conversations/");
        });
    },
  },
};
</script>

<style scoped>
</style>