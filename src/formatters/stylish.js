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
        return `${"  ".repeat(key.level)}Property   ${
          key.key
        }  was added with value: ${getString(key.newValue)}\n`;
      case "changed":
        return `${"  ".repeat(key.level)}Property ${
          key.key
        } was updated. From ${getString(key.oldValue)} to ${getString(
          key.newValue
        )}\n`;
      case "deleted":
        return `${"  ".repeat(key.level)}Property  ${key.key}: ${getString(
          key.oldValue
        )} was removed\n`;
      default:
        return `${"  ".repeat(key.level)}   ${key.key} wasnot changed\n`;
    }
  });
  return result.join("");
};

export default makeStylish;
