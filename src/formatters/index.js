import makeStylish from "./stylish.js";
import makePlain from "./plain.js";

export default makeFormat = (tree, formatName) => {
  switch (formatName) {
    case "stylish":
      return `${makeStylish(tree)}\n`;
    case "plain":
      return `${makePlain(tree)}\n`;
    case "json":
      return JSON.stringify(tree, null, " ");
    default:
      throw new Error(`Output format is not correct ${formatName}`);
  }
};
