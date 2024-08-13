import makeCheck from "../src/index.js";
import fs from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const makeFixtures = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

test("makeCheck", () => {
  const path1 = makeFixtures("file1.json");
  const path2 = makeFixtures("file2.json");
  const result = fs.readFileSync(makeFixtures("json-json_result.txt"), {
    encoding: "utf8",
    flag: 'r'
  });
  const answer = makeCheck(path1, path2, "stylish");
  expect(answer).toMatch(result);
});

test("makeCheck1", () => {
  const path1 = makeFixtures("file1.json");
  const path2 = makeFixtures("file2.json");
  const result = fs.readFileSync(makeFixtures("json_result.txt"), {
    encoding: "utf8",
    flag: 'r'
  });
  //console.log(makeCheck(path1, path2, "plain"));
  expect(makeCheck(path1, path2, "plain")).toMatch(result);
});
