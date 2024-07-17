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

const makePlain = (tree) => {
  const result = tree.map((key) => {
    if (key instanceof Array) {
      return makePlain(key);
    }
    switch (key.action) {
      case "added":
        return `${"  ".repeat(key.level)}+  ${key.key}: ${getString(
          key.newValue
        )}\n`;
      case "changed":
        return `${"  ".repeat(key.level)}-  ${key.key}: ${getString(
          key.oldValue
        )}\n${"  ".repeat(key.level)}+  ${key.key}: ${getString(
          key.newValue
        )}\n`;
      case "deleted":
        return `${"  ".repeat(key.level)}-  ${key.key}: ${getString(
          key.oldValue
        )}\n`;
      default:
        return `${"  ".repeat(key.level)}   ${key.key}: ${getString(
          key.oldValue
        )}\n`;
    }
  });
  return result.join("");
};

export default makePlain;
