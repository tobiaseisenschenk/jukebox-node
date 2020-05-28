SHELL := /bin/bash

install:
	npm install

test:
	# Additional, optional, tests could go here

lint:
	npx dockerlint Dockerfile
	npm run lint

all: install lint test
