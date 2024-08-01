import makeCheck from "../src";
import fs from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const makeFixtures = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

test("makeCheck", () => {
  expect(
    makeCheck(makeFixtures("file1.json"), makeFixtures("file2.json"))
  ).toEqual(
    fs.readFileSync(makeFixtures("json-json_result.txt"), {
      encoding: "utf8",
      flag: "r",
    })
  );
});

test("makeCheck", () => {
  expect(
    makeCheck(makeFixtures("file1.yaml"), makeFixtures("file2.yaml"))
  ).toEqual(
    fs.readFileSync(makeFixtures("json-json_result.txt"), {
      encoding: "utf8",
      flag: "r",
    })
  );
});
