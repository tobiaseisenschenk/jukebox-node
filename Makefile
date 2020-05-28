SHELL := /bin/bash

install:
	npm install

test:
	# Additional, optional, tests could go here

lint:
	hadolint Dockerfile
	npm run lint

all: install lint test
