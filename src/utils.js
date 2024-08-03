import _ from "lodash";

const getDiffernceObjects = (obj1, obj2, level = 0, momKey = "") => {
  const result = _.sortBy(_.union(_.keys(obj1), _.keys(obj2))).map((key) => {
    const oldValue = structuredClone(obj1[key]);
    const newValue = structuredClone(obj2[key]);
    if (!Object.hasOwn(obj1, key)) {
      return {
        action: "added",
        level,
        momKey: `${momKey}.${key}`,
        key,
        newValue,
      };
    }
    if (!Object.hasOwn(obj2, key)) {
      return {
        action: "deleted",
        level,
        momKey: `${momKey}.${key}`,
        key,
        oldValue,
      };
    }
    if (oldValue instanceof Object && newValue instanceof Object) {
      return getDiffernceObjects(
        oldValue,
        newValue,
        level + 1,
        `${momKey}.${key}`
      );
    }
    if (oldValue !== newValue) {
      return {
        action: "changed",
        level,
        momKey: `${momKey}.${key}`,
        key,
        oldValue,
        newValue,
      };
    }
    return {
      action: "unchanged",
      level,
      momKey: `${momKey}.${key}`,
      key,
      oldValue,
    };
  });
  return result;
};

export { getDiffernceObjects };
