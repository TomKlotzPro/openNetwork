export const commands = {
  DELETE_ARTICLE: "DELETE_ARTICLE",
  EDIT_ARTICLE: "EDIT_ARTICLE"
};

const createOption = (name, command) => ({
  name,
  command
});

const DELETE_ARTICLE = createOption("Delete Article", commands.DELETE_ARTICLE);
const EDIT_ARTICLE = createOption("Edit Article", commands.EDIT_ARTICLE);

const DELETE_DRAFT = createOption("Delete Draft", commands.DELETE_ARTICLE);
const EDIT_DRAFT = createOption("Edit Draft", commands.EDIT_ARTICLE);

export const createPublishedOptions = () => [EDIT_ARTICLE, DELETE_ARTICLE];
export const createDraftsOptions = () => [EDIT_DRAFT, DELETE_DRAFT];
