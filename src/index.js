import _ from "lodash";
import path from "path";
import { fileParse } from "./parsers.js";
import { getDiffernceObjects } from "./utils.js";
import makeFormat from "./formatters/index.js";

const getFileType = (data) => path.extname(data).slice(1);

const getFilePath = (data) => path.resolve(process.cwd(), data);

const makeCheck = (path1, path2, style = "stylish") => {
  const dataType1 = getFileType(path1);
  const filePath1 = getFilePath(path1);
  const data1 = fileParse(filePath1, dataType1);

  const dataType2 = getFileType(path2);
  const filePath2 = getFilePath(path2);
  const data2 = fileParse(filePath2, dataType2);

  const difObject = getDiffernceObjects(data1, data2);
  const result = makeFormat(difObject, style);
  return result;
};

export default makeCheck;
