import { makeFixtures, makePath } from "../src/pathJoin";

test ('makeFixtures',()=>{
    expect(makeFixtures('json-json_result.json')).toEqual('/home/hexlet/fullstack-javascript-project-46/__fixtures__/json-json_result.json')
})