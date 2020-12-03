<template>
  <Fragment>
    <Navbar exitLink="/workspace/blogs">
      <template #actionMenu>
        <Button
          @click.native="openModal"
          buttonType="button"
          buttonColor="nebula"
          buttonWidth="40"
        >
          Publish
        </Button>
      </template>
    </Navbar>
    <Editor />
    <Modal :isOpen="isOpen" @updateOpen="updateOpen" />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Navbar from "~/components/shared/Navbar";
import Button from "~/components/shared/Button";
import Modal from "~/components/shared/Modal";
import Editor from "~/components/editor";
export default {
  layout: "workspace",
  components: {
    Fragment,
    Button,
    Navbar,
    Editor
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    updateOpen(isOpen) {
      this.isOpen = isOpen
    }
  }
};
</script>

<style></style>
