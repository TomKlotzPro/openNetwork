
<template>
  <div>
    <div class="container ml-2">
      <div class="mt-2">
        <Button buttonColor="nebula" buttonWidth="40" @click.native="ShowModal">
          New Conversation
        </Button>
      </div>
    </div>
    <div class="chat-page container mx-auto mt-6 mb-6">
      <div class="flex flex-wrap w-full -mx-5 overflow-hidden">
        <Card
          v-for="conversation in conversations"
          :key="conversation._id"
          :title="conversation.conversation"
          :conversationId="conversation._id"
        />
        <CardModal :showing="ModalShowing" @update="HideModal"> </CardModal>
      </div>
      <div class="flex flex-wrap items-end mb-4">
        <div class="flex-1 px-2" v-if="user">Welcome {{ user.name }}</div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-2 md:w-3/4">
          <chat></chat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
import Chat from "@/components/chatapp/Chat";
import { mapGetters } from "vuex";
import socket from "~/plugins/socket.io.js";
import CardModal from "~/components/chatapp/CardModal";

export default {
  name: "chat-view",
  components: {
    Chat,
    CardModal,
  },
  data() {
    return {
      ModalShowing: false,
    };
  },
  beforeMount() {
    socket.on("new-message", (message) => {
      this.$store.dispatch("chat/chat/pushMessage", message);
    });
  },
  methods: {
    ShowModal() {
      this.ModalShowing = true;
    },
    HideModal(value) {
      this.ModalShowing = value;
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
    }),
    conversations() {
      return this.$store.state.chat.conversation.items;
    },
  },
};
</script>

<style >
.online {
  color: green;
}

.offline {
  color: red;
}

.me,
.offline,
.online {
  margin-right: 3px;
  font-size: 10px;
}

.chat {
  box-sizing: border-box;
  height: calc(100vh - 90px);
  padding-bottom: 125px;
}

.chat.app-height {
  position: absolute !important;
  height: calc(100% - 97px);
  margin-top: 97px;
  padding-bottom: 75px;
}

.chat.chat-history {
  height: calc(100% - 60px) !important;
}
</style>

