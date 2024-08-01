import { getDiffernceObjects } from "../utils.js";

function getString(value) {
  switch (typeof value) {
    case "object":
      return value == null ? value : JSON.stringify(value);
    case "string":
      return `'${value}'`;
    default:
      return value;
  }
}

const makeStylish = (tree) => {
  const result = tree.map((key) => {
    if (key instanceof Array) {
      return makeStylish(key);
    }
    switch (key.action) {
      case "added":
        return `Property ${
        key.momKey.substring(1)
        } was added with value: ${getString(key.newValue)}\n`;
      case "changed":
        return `Property ${
          key.momKey.substring(1)
        } was updated. From ${getString(key.oldValue)} to ${getString(
          key.newValue
        )}\n`;
      case "deleted":
        return `Property ${key.momKey.substring(1)} ${getString(
          key.oldValue
        )} was removed\n`;
      default:
        return `Property ${
          key.momKey.substring(1)
        } wasnot changed\n`;
    }
  });
  return result.join("");
};

export default makeStylish;
