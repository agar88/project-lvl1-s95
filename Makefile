install:
	npm install

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-progression:
	npm run babel-node -- src/bin/brain-progression.js

start-prime:
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	npm run eslint -- src
