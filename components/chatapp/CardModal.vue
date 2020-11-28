<template>
  <div>
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
    >
      <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <div class="float-right mb-4">
          <Button buttonWidth="5" @click.native="HideModal"> X </Button>
        </div>

        <form
          @submit.prevent="onSubmit"
          class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
        >
          <div class="mb-4">
            <Input
              v-model="channelForm.channel"
              name="Channel"
              placeholder="My Channel"
              type="text"
            />
          </div>
          <hr class="mb-6 border-t mt-8" />
          <Button buttonType="button" buttonColor="nebula" buttonWidth="full">
            Create
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      channelForm: {
        channel: "",
      },
    };
  },
  computed: {},
  methods: {
    HideModal() {
      this.$emit("update", !this.showing);
    },

    onSubmit() {
      console.log(this.channelForm.channel);
      this.$store
        .dispatch("user/channel/createChannel", this.channelForm)
        .then((_) => this.HideModal());
    },
  },
};
</script>

<style scoped>
</style>