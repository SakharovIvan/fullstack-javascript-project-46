import makeCheck  from "../src";
import fs from 'node:fs';
import { makeFixtures, makePath } from "../src/pathJoin";

test('makeCheck',()=>{
    expect(makeCheck(makePath('file1.json'),makePath('file2.json'))).toEqual(fs.readFileSync(makeFixtures('json-json_result.txt'),{ encoding: 'utf8', flag: 'r' }))
}
)