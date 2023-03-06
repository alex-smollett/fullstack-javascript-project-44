# Makefile
install: # установка зависимостей
	npm ci
brain-games: # запуск brain-games.js
	node bin/brain-games.js
 publish: # отладка без засорения
	npm publish --dry-run