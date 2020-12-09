import { Node } from "tiptap";

export default class Title extends Node {
  get name() {
    return "title";
  }

  get schema() {
    return {
      content: "inline*", //* means we can provide zero or as many characters that we need
      //Defines how the editor detects my node from pasted HTML
      parseDOM: [
        {
          tag: "h1"
        }
      ],
      /**
       * This is how this node (Title) will be rendered
       * h1 by default an 0 to signify there is no content by default i.e null
       *
       */
      toDOM: () => ["h1", { class: "title" }, 0]
    };
  }
}
