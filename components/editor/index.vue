<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="editor editor-squished">
        <BasicMenu :editor="editor">
          <template #saveButton>
            <Button
              @click.native="emitUpdate"
              buttonType="button"
              :buttonColor="isSaving ? 'disabled' : 'nebula'"
              :disabled="isSaving"
              class="inline-block m-0"
              :buttonDisabled="isSaving"
              >Save</Button
            >
          </template>
        </BasicMenu>
        <BubbleMenu :editor="editor" />
        <EditorContent class="editor__content" :editor="editor" />
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import BubbleMenu from "~/components/editor/BubbleMenu";
import BasicMenu from "~/components/editor/BasicMenu";
import Button from "~/components/shared/Button";
import {
  Heading,
  Bold,
  Code,
  Italic,
  Strike,
  Underline,
  History,
  Blockquote,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  CodeBlockHighlight,
  Placeholder
} from "tiptap-extensions";
import Title from "~/components/editor/components/Title";
import Subtitle from "~/components/editor/components/Subtitle";
import Doc from "~/components/editor/components/Doc";

// Code Highlighting
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import css from "highlight.js/lib/languages/css";
import csharp from "highlight.js/lib/languages/csharp";
import php from "highlight.js/lib/languages/php";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import ruby from "highlight.js/lib/languages/ruby";
import objectivec from "highlight.js/lib/languages/objectivec";
import scala from "highlight.js/lib/languages/scala";
import scss from "highlight.js/lib/languages/scss";
import sql from "highlight.js/lib/languages/sql";
import rust from "highlight.js/lib/languages/rust";
import bash from "highlight.js/lib/languages/bash";
import kotlin from "highlight.js/lib/languages/kotlin";
import swift from "highlight.js/lib/languages/swift";
import basic from "highlight.js/lib/languages/basic";
import http from "highlight.js/lib/languages/http";
import json from "highlight.js/lib/languages/json";
import ocaml from "highlight.js/lib/languages/ocaml";
import vim from "highlight.js/lib/languages/vim";
import powershell from "highlight.js/lib/languages/powershell";
import yml from "highlight.js/lib/languages/yaml";
// Code Highlighting

export default {
  components: {
    EditorContent,
    BubbleMenu,
    BasicMenu,
    Button
  },
  props: {
    isSaving: {
      required: false,
      default: false
    }
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
        new Doc(),
        new Title(),
        new Subtitle(),
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: node => {
            if (node.type.name === "title") {
              return "Article title";
            }
            if (node.type.name === "subtitle") {
              return "Give us a catchy subtitle!";
            }
            return "Start sharing your knowledge...";
          }
        }),
        new Heading({ levels: [1, 2, 3] }),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Blockquote(),
        new HorizontalRule(),
        new OrderedList(),
        new BulletList(),
        new ListItem(),
        new CodeBlockHighlight({
          languages: {
            javascript,
            python,
            c,
            cpp,
            css,
            csharp,
            php,
            go,
            java,
            ruby,
            objectivec,
            scala,
            scss,
            sql,
            rust,
            bash,
            kotlin,
            swift,
            basic,
            http,
            json,
            ocaml,
            vim,
            powershell,
            yml
          }
        })
      ]
    });
    this.$emit('editorMounted', this.editor)
  },
  beforeDestroy() {
    // To destroy editor instance when it's no longer needed
    this.editor && this.editor.destroy();
  },
  methods: {
    emitUpdate() {
      const content = this.getContent()
      this.$emit('editorSaved', content)
    },
    getContent() {
      const htmlContent = this.editor.getHTML();
      const title = this.getNodeValueByName("title");
      const subtitle = this.getNodeValueByName("subtitle");
      return {content: htmlContent, title, subtitle}
    },
    getNodeValueByName(name) {
      const docContent = this.editor.state.doc.content;
      const nodes = docContent.content;
      const node = nodes.find(node => node.type.name === name);

      if (node) {
        return node.textContent;
      }
      return "";
    }
  }
};
</script>

<style scoped></style>
