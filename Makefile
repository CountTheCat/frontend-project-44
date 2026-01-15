.PHONY: install publish brain-games lint

install:
	npm ci
	chmod +x bin/brain-games.js

publish:
	@echo "Testing publication..."
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .