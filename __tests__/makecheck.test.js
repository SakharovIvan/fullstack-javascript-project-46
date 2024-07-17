import makeCheck  from "../src";
import fs from 'node:fs';
import { makeFixtures } from "../src/pathJoin";

test('makeCheck',()=>{
    expect(makeCheck(makeFixtures('file1.json'),makeFixtures('file2.json'))).toEqual(fs.readFileSync(makeFixtures('json-json_result.txt'),{ encoding: 'utf8', flag: 'r' }))
}
)

test('makeCheck',()=>{
    expect(makeCheck(makeFixtures('file1.yaml'),makeFixtures('file2.yaml'))).toEqual(fs.readFileSync(makeFixtures('json-json_result.txt'),{ encoding: 'utf8', flag: 'r' }))
}
)