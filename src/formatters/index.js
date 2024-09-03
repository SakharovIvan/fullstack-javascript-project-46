import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormat = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree, null, ' ');
    default:
      throw new Error(`Output format is not correct ${formatName}`);
  }
};
export default makeFormat;
