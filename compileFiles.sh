package='typescript'

if [ `npm list -g | grep -c $package` -eq 0 -o ! -d node_module ]; then
	npm install $package
fi

tsc
node srcs/main.js
