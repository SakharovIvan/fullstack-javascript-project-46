import _ from 'lodash';

const getDiffernceObjects = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return keys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        action: 'added',
        key,
        newValue: obj2[key],
      };
    }
    if (!_.has(obj2, key)) {
      return {
        action: 'deleted',
        key,
        oldValue: obj1[key],
      };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = getDiffernceObjects(obj1[key], obj2[key]);
      return { key, action: 'nested', children };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key,
        action: 'changed',
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }
    return {
      action: 'unchanged',
      key,
      oldValue: obj1[key],
    };
  });
};

export { getDiffernceObjects };
