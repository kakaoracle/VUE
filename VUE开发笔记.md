### 命令行安装
 版本:v2.5.x
 在github中搜索vue-cli选择v2.9.3版本
- 关于node.js,npm
node.js相当于是java中的jdk,是编译工具
npm相当于是java中的maven,是包管理工具

- node.js安装:
  到官网上下载,高版本的应该其中带有npm
  用installer的话会自动配置系统环境变量,早期版本安装包的后缀为msi,直接压缩文件使用太复杂

- 命令行检查:
    node -v
    npm -v
- vue-cli安装:
 网络上现在的vue-cli的版本查看:npm show vue-cli
 全局安装:npm install -g vue-cli@2.9.3
 >>有的时候会报错:pna.nextick is not a function,这里指的是node版本不兼容,换6以上,11以下,这次选8.x

- vue版本确认
vue -V(只有vue的版本确认用大写的V)



### 项目模板
1. vue的命令:
    vue help:
        发现有四个命令:
           init:
           list:
           build:
           help:
2.  vue list

  Available official templates:

  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  pwa - PWA template for vue-cli based on the webpack template
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
3. 官方是六个模板工程,但是一般都用webpack模板
    地址是:[url]http://vuejs-templates.github.io/webpack/
4. 开始建立一个新的工程
    vue init webpack myweb                                //myweb是自定义工程名
        Project name(myweb)                               //工程名,默认是上一句的名字
        Project description                               //工程描述
        Author                                            //作者名
        Vue build                                         //有两个选项,一个是带编译器的,推荐之,另一个是不带编译器的.
        Install vue-router                                //安装路由,推荐yes
        Use ESlint to lint your code                      //语法检测,推荐no
        Set up unit tests                                 //设置单元测试,推荐no
        Setup e2e test with Nightwatch?                   //设置浏览器的,推荐no
        Should we run 'npm install' for you...            //设置打包工具,yarn是facebook推出的,这里选npm
5. 进入刚刚建立的工程所在目录:
    cd myweb
6. 用cscode编辑web文件夹:
    dependices用到的是2.5.2,可以手动更改为最新的.比如去掉尖括号(表示精确指定了版本),变成"2.5.16"
7. npm run dev
    开始编译运行工程,命令等价于npm start dev
8. npm run build
    开始编译打包工程,结果生成在dist目录下

9. src目录是平时开发所在的目录
### P4 vue-webpack工程中引入Bootstrap4框架
- bootstrap的作用是让按钮更加的漂亮
- 命令行:
```bash
    cd myweb
    npm install bootstrap --save --save-exact(--save-exact用来精确版本,package.json中的dependencies中会多一个"bootstrap")
    在src目录下的main.js(src目录下,相当于入口,全局变量都在这文件中声明)中添加import 'bootstrap/dist/css/bootstrap.min.css'
```
>>编辑App.vue视图文件,测试Bootatrap功能,部分更改后为:
```html
    <template>
        <div id="app">
            <img src="./assets/logo.png">
            <hr>
            <button class = "btn btn-primary">确定</button>
            <button class = "btn btn-success">使用</button>
            <button class = "btn btn-danger">注意</button>
            <hr>
            <router-view/>
        </div>
    </template>
```
之后命令行中cd到myweb,再npm start

- 可选,Bootstrap+VUE
    网址是bootstrap-vue.js.org

### P5 运行VUE项目

参照链接:https://blog.csdn.net/github_39088222/article/details/79482461
步骤:
- 下载ngnix反射代理服务器,设置端口在nginx目录下的conf目录下的nginx.conf文件中的listen
- 用npm run build会生成dist目录,里面有static目录和index.html两部分
- 复制到nginx目录下的html目录,里面之前的东西全部清空
- 运行nginx,打开页面.

