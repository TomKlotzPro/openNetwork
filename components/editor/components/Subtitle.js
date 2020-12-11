import { Node } from "tiptap";

export default class Subtitle extends Node {
  get name() {
    return "subtitle";
  }

  get schema() {
    return {
      content: "inline*", //* means we can provide zero or as many characters that we need
      //Defines how the editor detects my node from pasted HTML
      parseDOM: [
        {
          tag: "h2"
        }
      ],
      /**
       * This is how this node (Title) will be rendered
       * h1 by default an 0 to signify there is no content by default i.e null
       *
       */
      toDOM: () => ["h2", { class: "subtitle" }, 0]
    };
  }
}
