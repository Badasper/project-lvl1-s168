install: 
	npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-stage-0

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish
install_lint:
	npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import babel-eslint
