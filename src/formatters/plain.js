function getString(value, depth) {
  switch (typeof value) {
    case "object":
      //console.log(value)
      return value === null ? value : objCreate(value, depth + 2);
    case "string":
      return `'${value}'`;
    default:
      return value;
  }
}
const objCreate = (obj, depth) => {
  const keys = Object.keys(obj);
  depth + 1;
  //console.log(keys.map((key)=>{return`{\n${"  ".repeat(depth+1)}${key}: ${obj[key]}\n`})[0].toString())
  return `${keys
    .map((key) => {
      return `{\n${"  ".repeat(depth)}${key}: ${getString(obj[key], depth)}`;
    })[0]
    .toString()}\n${"  ".repeat(depth)}}`;
};

const plainer = (value, depth) => {
  // if(value instanceof Object){}
  const result = value.map((str) => {
    const { key, action, oldValue, children, newValue } = str;
    switch (action) {
      case "nested":
        return `${"  ".repeat(depth)}  ${key}:\n${plainer(
          children,
          depth + 1
        )}`;
      case "added":
        return `${"  ".repeat(depth)}+  ${key}: ${getString(
          newValue,
          depth
        )}\n`;
      case "changed":
        return `${"  ".repeat(depth)}-  ${key}: ${getString(
          oldValue,
          depth
        )}\n${"  ".repeat(depth)}+  ${key}: ${getString(newValue, depth)}\n`;
      case "deleted":
        return `${"  ".repeat(depth)}-  ${key}: ${getString(
          oldValue,
          depth
        )}\n`;
      case "unchanged":
        return `${"  ".repeat(depth)}   ${key}: ${getString(
          oldValue,
          depth
        )}\n`;
      default:
        console.log("error", str);
    }
  });
  return `${"  ".repeat(depth)}{\n${result.join("")}${"  ".repeat(depth)}}\n`;
};

const makePlain = (tree) => {
  return plainer(tree, 0);
};

export default makePlain;
