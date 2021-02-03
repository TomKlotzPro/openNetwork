<template>
  <div class="py-4 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="editor editor-squished textEditor">
        <ProjectMenu :editor="editor" />
        <EditorContent class="editor__content" :editor="editor"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import ProjectMenu from "~/components/editor/ProjectMenu";
import {
  Bold,
  Italic,
  History,
  OrderedList,
  BulletList,
  ListItem
} from "tiptap-extensions";
export default {
  components: {
    EditorContent,
    ProjectMenu
  },
  data() {
    return {
      editor: null
    };
  },
  // Called only on client side because tiptap does not support server side
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Italic(),
        new History(),
        new OrderedList(),
        new BulletList(),
        new ListItem()
      ],
      onUpdate: () => {
        this.emitUpdate()
      }
    });
  },
  beforeDestroy() {
    // To destroy editor instance when it's no longer needed
    this.editor && this.editor.destroy();
  },
  methods: {
    emitUpdate() {
      const content = this.editor.getHTML()
      this.$emit('input', content)
    }
  }
};
</script>

<style>
.textEditor .editor__content p {
    font-size: 1rem;
    line-height: 1.5rem;
}
</style>
