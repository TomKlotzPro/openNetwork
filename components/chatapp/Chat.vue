<template>
  <div class="chat border rounded bg-white relative">
    <template>
      <div
        class="chat-header flex items-center text-xs border-b p-2 absolute pin-t pin-l w-full"
      >
        <div class="mr-2"></div>

        <div class="chat-about text-lg">
          <div class="chat-with">
            Chat with
            <span class="text-green-dark" v-text="recipient.username"></span>
          </div>
        </div>
      </div>
      <!-- end chat-header -->

      <div class="app-height w-full absolute pin-t">
        <div class="chat-history mt-2 p-4" v-scroll-bottom>
          <template v-for="message in messages">
            <chat-message
              :me="me"
              :recipientUser="recipient"
              :message="message"
              :key="message.id"
            ></chat-message>
          </template>
        </div>

        <chat-new-message v-on:newMessage="pushMessage"></chat-new-message>
      </div>
    </template>
  </div>
</template>

<script>
import ChatNewMessage from "./ChatNewMessage";
import ChatMessage from "./ChatMessage";
import { mapGetters } from "vuex";

export default {
  name: "chat",
  components: {
    ChatNewMessage,
    ChatMessage,
  },
  computed: {
    ...mapGetters({
      conversation: "chat/chat/currentConversation",
      recipient: "auth/authUser",
    }),
    conversationId() {
      return this.conversation ? this.conversation._id : null;
    },
    messages() {
      return this.conversation ? this.conversation.messages : [];
    },
    me() {
      return this.$auth.user;
    },
  },
  methods: {
    pushMessage(message) {
      this.$store.dispatch("chat/chat/sendMessage", message);
    },
  },
  directives: {
    scrollBottom: {
      componentUpdated(el) {
        el.scrollTop = el.scrollHeight;
      },
    },
  },
};
</script>
