const space = '    ';
const gap = (depth) => space.repeat(depth);

const getString = (value, depth) => {
  const objCreate = (obj, dep) => {
    const keys = Object.keys(obj);
    const strings = keys.map((key) => `${gap(dep)}    ${key}: ${getString(obj[key], dep + 1)}`);
    return `{\n${strings.join('\n')}\n${gap(dep)}}`;
  };

  switch (typeof value) {
    case 'object':
      return value === null ? value : objCreate(value, depth);
    case 'string':
      return value;
    default:
      return value;
  }
};

const stylisher = (value, depth) => {
  const result = value.map((str) => {
    const
      {
        key, action, oldValue, children, newValue,
      } = str;
    switch (action) {
      case 'nested':
        return `${gap(depth)}    ${key}: ${stylisher(children, depth + 1)}`;
      case 'added':
        return `${gap(depth)}  + ${key}: ${getString(newValue, depth + 1)}`;
      case 'changed':
        return `${gap(depth)}  - ${key}: ${getString(
          oldValue,
          depth + 1,
        )}\n${gap(depth)}  + ${key}: ${getString(newValue, depth + 1)}`;
      case 'deleted':
        return `${gap(depth)}  - ${key}: ${getString(oldValue, depth + 1)}`;
      case 'unchanged':
        return `${gap(depth)}    ${key}: ${getString(oldValue, depth + 1)}`;
      default:
        throw new Error('something wrong');
    }
  });
  return `{\n${result.join('\n')}\n${gap(depth)}}`;
};

const makeStylish = (tree) => stylisher(tree, 0);

export default makeStylish;
