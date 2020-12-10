<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <Icon name="list-ul" size="large" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <Icon name="list-ol" size="large" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <Icon name="quote-right" size="large" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <Icon name="file-code" size="large" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <Icon name="ruler-horizontal" size="large" />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <Icon name="undo-alt" size="large" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <Icon name="redo" size="large" />
        </button>
        <div class="ml inline-block">
          <slot name="saveButton"></slot>
        </div>
      </div>
    </editor-menu-bar>
  </div>
</template>

<script>
import Icon from "~/components/shared/Icon";
import { EditorMenuBar } from "tiptap";
export default {
  components: {
    EditorMenuBar,
    Icon
  },
  props: {
    editor: Object
  }
};
</script>
<style scoped>
.ml {
  margin-left: 36rem;
}
</style>
