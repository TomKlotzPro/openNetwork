<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click.prevent="commands.bold()"
        >
          <Icon name="bold" size="large" />
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click.prevent="commands.italic()"
        >
          <Icon name="italic" size="large" />
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click.prevent="commands.bullet_list"
        >
          <Icon name="list-ul" size="large" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click.prevent="commands.ordered_list"
        >
          <Icon name="list-ol" size="large" />
        </button>
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
