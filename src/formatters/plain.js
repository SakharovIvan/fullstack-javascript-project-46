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
  const plainer = (value, depth) => {
    const result = value.map((str) => {
      const { key, action, oldValue, children, newValue } = str;
      switch (action) {
        case "nested":
          return `${"  ".repeat(depth)}  ${key}:\n${plainer(
            children,
            depth + 1
          )}`;
        case "added":
          console.log(depth, newValue);
          return `${"  ".repeat(depth)}+  ${key}: ${getString(newValue)}\n`;
        case "changed":
          return `${"  ".repeat(depth)}-  ${key}: ${getString(
            oldValue
          )}\n${"  ".repeat(depth)}+  ${key}: ${getString(newValue)}\n`;
        case "deleted":
          return `${"  ".repeat(depth)}-  ${key}: ${getString(oldValue)}\n`;
        case "unchanged":
          console.log(depth, oldValue);
          return `${"  ".repeat(depth)}   ${key}: ${getString(oldValue)}\n`;
        default:
          console.log("error", str);
      }
    });
    return result.join("");
  };

  return plainer(tree, 0);
};

export default makePlain;
