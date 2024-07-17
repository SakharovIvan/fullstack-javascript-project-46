import _ from "lodash";
import { fileParse } from "./parsers.js";
import { getDiffernceObjects, makeFixtures, getFileType, getFilePath } from "./utils.js";
import makeFormat from './formatters/index.js'

const makeCheck = (path1, path2,style= 'stylish' ) => {
  const dataType1 = getFileType(path1);
  const data1 = fileParse(path1, dataType1);
  const dataType2 = getFileType(path2);
  const data2 = fileParse(path2, dataType2);
  const difObject = getDiffernceObjects(data1,data2)
  const result = makeFormat(difObject,style)
  return result
};



export default makeCheck;
