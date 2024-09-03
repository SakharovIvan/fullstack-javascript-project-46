install:
	npm ci

lint: 
	npx eslint .

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npm test

start:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json