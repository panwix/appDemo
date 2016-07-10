# npm 模块安装机制简介
#### npm install
	npm install 命令用来安装模块到node_modules目录， 安装之前，会先检查，node_modules目录中是否已经存在指定模块。如果存在，就不在重新安装了，即使远程仓库已经有了一个新版本。
	-f或--force， 不管是否安装过，强制重新安装
	
#### npm update
	更新已安装模块
	
#### registry
	npm模块仓库提供了一个查询服务，registry, 网址：https://registry/npmjs.org/ npm intall和npm update都是通过这种方式安装模块的
	
#### 缓存目录
	~/.npm
	通过命令 npm cache ls react 查看
	清空缓存命令
	rm -rf ~/.npm/*
	or
	npm cache clean
	
#### 模块的安装过程
	1. 发出npm install命令
	2. npm 向 registry 查询模块压缩包的网址
	3. 下载压缩包存放在～／.npm目录
	4. 解压压缩包到当前项目的node_modules目录
	
#### --cache-min 参数
	单位分钟，只有超过这个时间的模块，才会从registry下载
	
#### 全局安装
	-g
	
#### --save-dev
	自动把模块和版本号添加到devdependenciesb部分		