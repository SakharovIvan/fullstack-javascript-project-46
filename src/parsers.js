import yaml from 'js-yaml';
import fs from 'node:fs';

const JSONparse = (data) => {
  try {
    const readpath = fs.readFileSync(data, { encoding: 'utf8', flag: 'r' });
    return JSON.parse(readpath);
  } catch {
    throw new Error(`Some problem with parsdata ${data}!`);
  }
};

const YAMLparse = (data) => {
  try {
    const readpath = fs.readFileSync(data, { encoding: 'utf8', flag: 'r' });
    return yaml.load(readpath);
  } catch {
    throw new Error(`Some problem with parsdata ${data}!`);
  }
};

const fileParse = (data, type) => {
  switch (type) {
    case 'json':
      return JSONparse(data);
    case 'yaml':
      return YAMLparse(data);
    case 'yml':
      return YAMLparse(data);
    default:
      throw new Error(`Some problem with format ${type}!`);
  }
};

export default fileParse;
