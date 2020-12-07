export const commands = {
  DELETE_ARTICLE: "DELETE_ARTICLE",
  EDIT_ARTICLE: "EDIT_ARTICLE",
  TOGGLE_FEATURE: "TOGGLE_FEATURE",
};

const createOption = (name, command) => ({
  name,
  command
});

const DELETE_ARTICLE = createOption("Delete Article", commands.DELETE_ARTICLE);
const EDIT_ARTICLE = createOption("Edit Article", commands.EDIT_ARTICLE);
const FEATURE_ARTICLE = createOption("Feature Article", commands.TOGGLE_FEATURE);
const UN_FEATURE_ARTICLE = createOption("Unfeature Article", commands.TOGGLE_FEATURE);


const DELETE_DRAFT = createOption("Delete Draft", commands.DELETE_ARTICLE);
const EDIT_DRAFT = createOption("Edit Draft", commands.EDIT_ARTICLE);

export const createPublishedOptions = (isFeatured) => {
  const defaultOptions = [EDIT_ARTICLE, DELETE_ARTICLE];
  isFeatured ? defaultOptions.push(UN_FEATURE_ARTICLE) : defaultOptions.push(FEATURE_ARTICLE)
  return defaultOptions;
}
export const createDraftsOptions = () => [EDIT_DRAFT, DELETE_DRAFT];
