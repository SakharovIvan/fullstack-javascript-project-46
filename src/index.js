import fs from "node:fs";
import _ from "lodash";
import { JSONparse } from "./parsers.js";

const makeCheck = (path1, path2) => {
  const readpath1 = fs.readFileSync(path1, { encoding: "utf8", flag: "r" });
  const readpath2 = fs.readFileSync(path2, { encoding: "utf8", flag: "r" });

  const data1 = JSONparse(readpath1);
  const data2 = JSONparse(readpath2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const result = {};

  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result["+ " + key] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      result["- " + key] = data1[key];
    } else if (data1[key] !== data2[key]) {
      result["+ " + key] = data1[key];
      result["- " + key] = data2[key];
    } else {
      result[key] = data1[key];
    }
  }
console.log(result)
  return JSON.stringify(result);
};

//makeCheck(file1,file2)

export default makeCheck;
