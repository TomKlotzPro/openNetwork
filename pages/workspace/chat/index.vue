<template>
  <div class="container mx-auto">
    <div class="container ml-2">
      <div class="mt-2">
        <Button buttonColor="nebula" buttonWidth="40" @click.native="ShowModal">
          New Channel
        </Button>
      </div>
    </div>
    <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div class="flex flex-wrap w-full -mx-5 overflow-hidden">
        <Card
          v-for="channel in channels"
          :key="channel._id"
          :title="channel.channel"
          :channelId="channel._id"
        />
        <CardModal :showing="ModalShowing" @update="HideModal"> </CardModal>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/chatapp/ChannelCard";
import CardModal from "~/components/chatapp/CardModal";

export default {
  components: {
    Card,
    CardModal,
  },
  data() {
    return {
      ModalShowing: false,
    };
  },
  computed: {
    channels() {
      return this.$store.state.user.channel.items;
    },
  },
  methods: {
    ShowModal() {
      this.ModalShowing = true;
    },
    HideModal(value) {
      this.ModalShowing = value;
    },
  },
  /**
   * fetch() : when server-rendering the page,
   * set fetchOnServer to false if we only want fetch on client side ;) (Just discovered this options on Nuxt's doc)
   */
  fetch({ store }) {
    return store.dispatch("user/channel/fetchChannels");
  },
};
</script>

<style scoped>
</style>