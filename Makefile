.phony: install
install:
	yarn install
	yarn build && yarn lint
	yarn test

clean:
	rm -rf node_modules
	@echo Project is clean.
