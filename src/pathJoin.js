import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const makePath = (filename)=>path.join (__dirname,'..',filename)
const makeFixtures = (filename)=>path.join (__dirname,'..','__fixtures__',filename)

export {makePath,makeFixtures}