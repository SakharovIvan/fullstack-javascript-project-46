import yaml from "js-yaml";
import fs from "node:fs";

const JSONparse = (data) => {
  try {
    const readpath = fs.readFileSync(data, { encoding: "utf8", flag: "r" });
    return JSON.parse(readpath);
  } catch (error) {
    console.log(err);
  }
};

const YAMLparse = (data) => {
  try {
    const readpath = fs.readFileSync(data, { encoding: "utf8", flag: "r" });
    return yaml.load(readpath);
  } catch (err) {
    console.log(err);
  }
};

export const fileParse = (data, type) => {
  switch (type) {
    case "json":
      return JSONparse(data);
    case "yaml":
      return YAMLparse(data);
    case "yml":
      return YAMLparse(data);
  }
  return console.log(`Some problem with format ${type}!`);
};
