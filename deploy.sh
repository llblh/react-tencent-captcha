#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 判断是否有版本号
if [ ! -n "$1" ] ;then
  echo -e "\033[31m\033[01m\033[05m[ 缺少版本号 ]\033[0m"
  exit 0; 
fi

# 修改版本
file='package.json'
TMP='\  \"version": "'$1'",'
sed  -i '' 3d "$file"
sed -i '' '3i\
'"$TMP"'
' "$file"
echo -e "\033[32m[ 版本号：$1 ]\033[0m"

# 提交 git
git add -A
git commit -m "deploy $1"
git push -u origin master
# 打标签
git tag "$1"
git push -u origin --tags
echo -e "\033[35m[ Push Over ]\033[0m"
# 切换 npm 源
nrm use npm
# 推送到 npm
npm publish --access=public
echo -e "\033[35m[ npm Push Over ]\033[0m"
# 切换 taobao 源
nrm use taobao

echo -e "\033[35m[ complete ]\033[0m"
exit 0