import _ from "lodash";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const getDiffernceObjects = (obj1, obj2, level = 0) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const result = _.sortBy(_.union(_.keys(obj1), _.keys(obj2))).map((key) => {
    const oldValue = structuredClone(obj1[key]);
    const newValue = structuredClone(obj2[key]);

    if (!Object.hasOwn(obj1, key)) {
      return { action: "added", level, key, newValue };
    }
    if (!Object.hasOwn(obj2, key)) {
      return {
        action: "deleted",
        level,
        key,
        oldValue,
      };
    }
    if (oldValue instanceof Object && newValue instanceof Object) {
      return getDiffernceObjects(oldValue, newValue, level + 1);
    }
    if (oldValue !== newValue) {
      return {
        action: "changed",
        level,
        key,
        oldValue,
        newValue,
      };
    }
    return {
      action: "unchanged",
      level,
      key,
      oldValue,
    };
  });
  return result;
};


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const makeFixtures = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

const getFileType = (data) => path.extname(data).slice(1);

const getFilePath = (data) => path.resolve(process.cwd(), data);

export { getDiffernceObjects, makeFixtures, getFileType, getFilePath};
