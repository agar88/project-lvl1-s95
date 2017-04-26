install:
	npm install

start-old:
	npm run babel-node -- src/bin/brain-games.js

start:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint -- src
