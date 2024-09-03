install:
	npm ci

lint: 
	npx eslint .

publish:
	npm publish --dry-run

gendiff:
	node bin/gendif.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npm test

start:
	node bin/gendif __fixtures__/file1.json __fixtures__/file2.json