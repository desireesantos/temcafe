SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

.PHONY: install
install:; @npm install

.PHONY: test
test: test.unit lint

.PHONY: test.unit
test.unit:; @mocha

.PHONY: lint
source_files := $(wildcard config/*.js app/*.js)

lint: $(source_files)
	@jshint --reporter node_modules/jshint-stylish/stylish.js $(source_files)
