function getString(value) {
  switch (typeof value) {
    case 'object':
      return value == null ? value : '[complex value]';
    case 'string':
      return `'${value}'`;
    default:
      return value;
  }
}

const makePlain = (tree) => {
  const style = (value, momKey) => {
    const result = value.map((str) => {
      const 
      { key, action, oldValue, children, newValue,
        } = 
        str;
      const path = momKey === '' ? `${key}` : `${momKey}.${key}`;
      switch (action) {
        case 'nested':
          return style(children, path);
        case 'added':
          return `Property '${path}' was added with value: ${getString(newValue)}`;
        case 'changed':
          return `Property '${path}' was updated. From ${getString(oldValue)} to ${getString(newValue)}`;
        case 'deleted':
          return `Property '${path}' was removed`;
        case 'unchanged':
          return '';
        default:
          return console.log('error', str);
      }
    });
    return [...result].filter((item) => item !== undefined).join('\n').replace(/\n$/m, '');
  };
  return style(tree, '');
};

export default makePlain;
