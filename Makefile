.PHONY: help install dev build start lint clean

install:
	npm install framer-motion --legacy-peer-deps
	npm install --force

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

clean:
	rm -rf .next
	rm -rf node_modules/.cache