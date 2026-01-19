.PHONY: help install publish lint brain-games brain-even brain-calc brain-gcd brain-progression brain-prime

help:
	@echo "Available commands:"
	@echo "  make install          Install dependencies"
	@echo "  make publish          Test package publication"
	@echo "  make lint             Run ESLint code check"
	@echo "  make brain-games      Launch interactive menu"
	@echo "  make brain-even       Launch even number game"
	@echo "  make brain-calc       Launch calculator game"
	@echo "  make brain-gcd        Launch GCD game"
	@echo "  make brain-progression Launch progression game"
	@echo "  make brain-prime      Launch prime number game"

install:
	npm ci
	chmod +x bin/*.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	./bin/brain-games.js

brain-even:
	./bin/brain-even.js

brain-calc:
	./bin/brain-calc.js

brain-gcd:
	./bin/brain-gcd.js

brain-progression:
	./bin/brain-progression.js

brain-prime:
	./bin/brain-prime.js