#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

npm run docs:build

# 进入生成的文件夹

cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'
git pull git@github.com:Yirujet/canvas-like-html-docs.git master --allow-unrelated-histories
git push git@github.com:Yirujet/canvas-like-html-docs.git master

cd -
