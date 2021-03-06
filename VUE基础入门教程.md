# VUE
## 基础部分
#### 常用问题
1. 关于import xxx from yyy;
如果yyy是一个组件,那么xxx则是用户自定义的名称
如果yyy是js文件,那么xxx往往是js中定义的一个变量比如(postRequest)
export const postRequest = (url,params) =>0
2. vue引入第三方库比如elementui
首先进入到项目目录下,再安装,最后重启项目
3. v-bind和v-model:
v-bind:缩写是:,单向绑定,一般用于颜色或者验证规则
v-on:缩写是@
v-model:双向绑定,只用于表单,即默认从model向view显示,但是view变化后会自动传到model中
4. 关于new Vue那点事
index.html:首页,vue实例化的标签是替换的index.html而不是app.vue,app.vue中的#标签完全可以删掉

index.js主要负责路由功能,  

app.vue:主要用来生成第一层路由结点<router-view/>,并且这一层是空白层,其中div的id为app完全可以去掉,假如删掉app.vue文件,那就心须在比如登录页面加上<router-view/>才行,这样的话,索引路由前就会有一个根层,再索引到登录页面,就会产生重叠效果  

main.js是程序主入口,通常用来new vue对象和加载大型插件比如router,注意引入插件需要用vue.use(router),这里引入的是router实例,而不是router模块,即router是在index中vue.use(路由组件)然后实例化一个routerexport,引入index中export的router
```js
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

```
其中el指的是index.html中将要被组件替换掉的#app节点
router全称为router:router,只不过import时命名也为router,才省略
components:值可以为多个,引入的组件名
template:值为components中的一个,但是要用<>包裹起来(出于语法需要)

5. vue的路由
一是声明式,类似于<a href>
二是编码式,router.push(),其实声明式最后也后编译成js中的代码






#### 命令行安装
- 关于node.js,npm
node.js相当于是java中的jdk,是编译工具
npm相当于是java中的maven,是包管理工具

- node.js安装:
  到官网上下载,高版本的应该其中带有npm,node版本用8.x,10.x一般会不兼容
  用installer的话会自动配置系统环境变量,早期版本安装包的后缀为msi,直接压缩文件使用太复杂
- node镜像设置  
查看默认镜像:npm config get registry
将镜像改为淘宝镜像:npm config set registry https://registry.npm.taobao.org
 
- 命令行检查:
    node -v
    npm -v
- vue-cli安装:
 网络上现在的vue-cli的版本查看:npm show vue-cli  
 全局安装:npm install -g vue-cli@2.9.3  
 >>有的时候会报错:pna.nextick is not a function,这里指的是node版本不兼容,换6以上,11以下,这次选8.x

- vue版本确认
vue -V(只有vue的版本确认用大写的V)
#### 项目模板
1. vue的命令:
    vue help:
        发现有四个命令:
           init:  
           list:  
           build:  
           help:  
3. 官方是六个模板工程,但是一般都用webpack模板 
    地址是:[url]http://vuejs-templates.github.io/webpack/
4. 开始建立一个新的工程
```js
    vue init webpack myweb                                //myweb是自定义工程名,要在自己选择的目录下运行命令行 
        Project name(myweb)                               //工程名,默认是上一句的名字,此处要卡住一般是node版本问题,最新版有问题,用8.x
        Project description                               //工程描述
        Author                                            //作者名
        Vue build                                         //有两个选项,一个是带编译器的,推荐之,另一个是不带编译器的.
        Install vue-router                                //安装路由,推荐yes
        Use ESlint to lint your code                      //语法检测,推荐no
        Set up unit tests                                 //设置单元测试,推荐no
        Setup e2e test with Nightwatch?                   //设置浏览器的,推荐no
        Should we run 'npm install' for you...            //设置打包工具,yarn是facebook推出的,这里选npm
```    
5. 进入刚刚建立的工程所在目录:  
    cd myweb
6. 用vscode编辑web文件夹:  
    dependices用到的是2.5.2,可以手动更改为最新的.比如去掉尖括号(表示精确指定了版本),变成"2.5.16"
7. npm run dev  
    开始编译运行工程,命令等价于npm start dev
8. npm run build  
    开始编译打包工程,结果生成在dist目录下

9. src目录是平时开发所在的目录  

10. npm run install和npm run dev和npm run build
install是工程代码写完后,添加依赖
dev是本地启动进行测试
build是生成静态html文件

#### vue-webpack工程中引入Bootstrap4框架
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

#### P5 运行VUE项目

参照链接:https://blog.csdn.net/github_39088222/article/details/79482461
步骤:
- 下载ngnix反射代理服务器,设置端口在nginx目录下的conf目录下的nginx.conf文件中的listen
- 用npm run build会生成dist目录,里面有static目录和index.html两部分
- 复制到nginx目录下的html目录,里面之前的东西全部清空
- 运行nginx,打开页面.
### 文件目录结构
src/main.js:加载各种公共的css,less,字体图标,组件,权限认证  
src/store/index.js:加载各种模块,实例化  
src/store/user.js:创建用户状态模块   
src/config/routes.js:按需加载模块  
src/app.vue可以放置一些公共头部或底部   
.vue文件:  
        <template>:
        <script>:
        <style>:
vue-router文件:
        路由,用来根据url跳转到具体的component
Vues文件:
        用来保存全局变量
### 解析new VUE
```
new Vue({
    el:'#app',
    router,
    components:{login},
    template:'<login/>'
})
```
其中el相当于init函数,会默认到index.html的#app标签下,向里面寺这以内容,内容就是引入的login组件(组件指的就是一段html代码)
template指的是components中(可能是{login1,login2}),取其中之一,而<>只是语法约定,和h5标签无关



### MVC
    MVC:Model/View/Controller
    Vue实例相当于一个Controller,用el绑定了一个Model,往Model中填充数据
    var t1 = new Vue({
        el:"",--------------------------------------------指定dom元素(需要加#)
        data:{xxx:""},--------------------------------为模型赋值
        methods:{},----------------------------------处理事件(method加s)
        filter:{},-----------------------------------------过滤数据,改变展示格式
        computed:{},--------------------------------对数据进行加减乘除
        watch:{},--------------------------------------监视数据,某一数据改变则改变其他数据
        
    })
### 第一个vue页面:
```html
		<!DOCTYPE html>
		<html>
		
		<head>
			<meta charset="utf-8" />
			<title></title>
			<script src="js/vue.js"></script><!--注意必须是两个script标签,不能省略成为<script src="js/vue.js"/>-->
		</head>
		
		<body>
			<div id="app">
				{{ message }}
			</div>
			<!-- 指令前带有v-前缀, v-bind属性作用是将titlt属性与Vue实例的message属性绑定到一起-->
			<div id="app-2">
				<span v-bind:title="message">Hover your mouse over me for a few seconds</span>
			</div>
			<!-- 控制切换一个元素的显示与隐藏 -->
			<div id="app-3">
				<p v-if="seen">Now you see me</p>
			</div>
			<!-- v-for指令用来将数据数组渲染到列表中 -->
			<div id="app-4">
				<ol>
					<li v-for = "todo in todos">
						{{todo.text}}
					</li>
				</ol>
			</div>
			<!-- v-on监听用户动作进行互动 -->
			<div id="app-5">
				<p>{{message}}</p>
				<button v-on:click="reverseMessage">Reverse Message</button>
			</div>
			<!-- v-model指令将表单输入与应用状态做双向数据绑定 -->
			<div id="app-6">
				<p>{{message}}</p>
				<input v-model="message">
			</div>
			
			<script>
				var app = new Vue({
					el: '#app',
					data: {
						message: 'Hello Vue!'
					}
				})
				var app2 = new Vue({
					el:"#app-2",
					data:{
						message:'You loaded this page on ' +new Date()
					}
				})
				var app3 = new Vue({
					el:'#app-3',
					data:{
						seen:false//切换到true就能看到
					}
				})
				var app4=new Vue({
					el:'#app-4',
					data:{
						todos:[
							{text:'Learn JavaScript'},
							{text:'Learn Vue'}
						]
					}
				})
				var app5 = new Vue({
					el:'#app-5',
					data:{
						message:'Hello Vue.js!'
					},
					methods:{
						reverseMessage:function(){
							this.message = this.message.split('').reverse('').join('')
						}
					}
				})
				var app6 = new Vue({
					el:'#app-6',
					data:{
						message:'HelloVue'
					}
				})
				
			</script>
		</body>
		
		</html>
```
### 条件渲染
    v-if/v-else-if/v-else:
```html
		<body>
    <div id="myApp">
        <h1 v-if="result == 0">成绩未公布</h1>
        <h1 v-else-if="result < 60">{{result}}分 - 考试不及格</h1>
        <h1 v-else-if="result <80">{{result}}分 - 还需努力</h1>
        <h1 v-else>{{result}}分 - 优秀</h1>
        <button @click="btnClick">考试成绩</button>
    </div>
    <script>
        var myApp = new Vue({
            el:"#myApp",
            data:{
                result:0
            },
            methods:{
                btnClick:function () {
                    this.result = Math.round(Math.random()*100)
                }
            }
        })
    </script>
```		
### 列表渲染
    v-for:循环一个数组
    demo:
```html
    <ul id="example-1">   <!--ul是有序列表ol是无序列表-->
        <li v-for="item in items">    
            {{ item.message }}  
        </li> 
    </ul>
     var example1 = new Vue({  
                el: '#example-1',  
                data: {    
                items: [      
                {message: 'foo' },      
                {message: 'Bar' }    ]  
    }})
```
      其中:of可以替代in作为分隔符
### v-model处理输入框输入
v-model:绑定一个模型,script中已经为模型赋值,输入框优先级大于默认模型值
```html
    <div id="myApp">
        <p>您最喜欢的游戏是:{{mygame}}</p>
        <input v-model="mygame">
    </div>
    <script>
        var myApp = new Vue({
            el:"#myApp",
            data:{
                mygame:'超级马里要奥'
            }
        })
    </script>
```
### v-on绑定事件
```html
<body>
    <div id="myApp">
    <h1>事件处理器</h1>
        <!--键盘按下事件,入参需要用$表示-->
        <input id="textName" v-on:keyup="txtKeyup($event)">
        <!--按下按钮事件-->
        <button id="btnOK" v-on:click="btnClick($event)">OK</button>
    </div>
        <script>
            var myApp = new Vue({
            el:"#myApp",
            data:{},
                methods:{
                txtKeyup:function(event){
                    this.debugLog(event);
                },
                    btnClick:function(event){
                    this.debugLog(event);
                    },
                    debugLog:function(event){
                    console.log(
                        event.srcElement.tagName,
                        event.srcElement.innerHTML,
                        event.key
                        )
                    }
            }
            })
        </script>
</body>
```	
### 组件	
	作用:封装DOM标签
	语法:
	        定义:Vue.component(tagName,options)
	        调用:<tagName></tagName>
	全局组件示例:
```html
	  	<body>
	      <div id="myApp">
	              <today-weather></today-weather>
	      </div>
	      <script>
	          Vue.component("today-weather",{
	              template:'<div>下雨</div>'
	          });
	          /*先写component,再注册vue*/
	          var myApp = new Vue({
	              el:'#myApp'
	          })
	      </script>
	  </body>
```
	局部组件示例:
```html
		<body>
		<div id="myApp">
						<today-weather></today-weather>
		</div>
		<script>
				/*之前在Vue.component中注册的是全局*/
				var WeatherComponent = {
						template:'<div>下雨</div>'
				}
				var myApp = new Vue({
						el:'#myApp',
						data:{},
						components:{
								'today-weather':WeatherComponent
						}
				})
		</script>
	</body>
```
     父子组件:
        使用props向下传递数据,使用events向上传递数据
	Props示例:
```html
	<!--
	特点:
    #1 父类组件为子类组件(含有原生html标签)赋值,需要在子类组件中多写一个属性,同时子类组件要显式声明一个同名属性,且与模型名一致-->
<div id="myApp">
    <parent></parent>
      </div>
      <script>
        var v_child = {
					template:"<div>{{message}}</div>",
					props:["message"]
                     }
        var v_parent = {
          template:"<div class='parent'> <child message='aa'></child></div>",
          components:{
                        "child":v_child
                    }
                }
        //创建一个vue实例
        new Vue({
            el:"#myApp",
            components:{
                "parent":v_parent
                    }
          })
    </script>
```
	    父类组件省略不声明的写法:
```html
	    <div id="myApp">
               <child message="hello"></child>
           </div>
            <script>
                var v_child = {
                    template:"<div>{{message}}</div>",
                    props:["message"]
                }
                new Vue({
                    el:"#myApp",
                    components:{
                        "child":v_child
                    }
                })
```
     动态Props示例:   
### 过滤器filter
        过滤某类数据用新的格式展示
```js
        <div id="myApp">
               <p>{{message}}</p>
               <p>{{message | toupper}}</p>
               <p>进度是{{num}}({{num|topercentage}})</p>
           </div>
            <script>
                var myApp = new Vue({
                    el:"#myApp",
                    data:{
                        message:"hello world",
                        num:0.3
                    },
                    filters:{
                       toupper:function(value){
                           return value.toUpperCase();
                       },
                        topercentage:function(value){
                           return value*100+"%";
                        }
                    }
                })
            </script>
```
### 计算属性computed
            处理元数据(加减乘除),便于二次开发
```js
          <div id="myApp">
                 价格是:{{prtice}},含税价格是:{{priceInTax}}
             </div>
              <script>
                  var myApp = new Vue({
                      el:"#myApp",
                      data:{
                          price:300
                      },
                      computed:{
                          priceInTax:function(){
                              return this.price*1.08
                          }
                      }
                  })
              </script>       
```     
### 观察某属性watch
```html
<div id="myApp">
    价格是:{{price}},含税价格是:{{priceInTax}}<br>
    <button @click="btnClick(50)">加价50</button>
</div>
    <script>
        var myApp = new Vue({
            el:"#myApp",
            data:{
                price:300
            },
            computed:{
                priceInTax:function(){
                    return this.price*1.08
                }
            },
            watch:{
                    price:function(newVal,oldVal){
                        this.priceInTax = Math.round(this.price*1.08)/*相当于监视,发生变化就执行computed的功能*/
                    }
            },
            methods:{
                btnClick:function(val){
                    this.price += val;
                }
            }
        })
    </script>
```
### 设置计算属性
```html
    <div id="myApp">
            价格是:{{price}},含税价格是:{{priceInTax}}<br>
            <button @click="btnClick(200)">改变价格为200</button>
        </div>
        <script>
            var myApp = new Vue({
                el:"#myApp",
                data:{
                    price:300
                },
                computed:{
                    priceInTax:{
                        get:function(){
                            return this.price*1.08;
                        },
                        set:function(val){/*这里不能设置this.priceInTax.因为get目的是赋值给priceInTax,set的目的是将priceInTax赋值给其他*/
                            this.price=val;
                        }
                    }
                },
                methods:{
                    btnClick:function(val){
                        this.priceInTax = val;
                    }
                }
            })
        </script>
```
### 绑定css属性
```html
<body>
<!--
原生:<div class="{active}">红色文本1</div><!--在css文件中的.active{}代表就是active变量-->
vue:<div v-bind:class="{active}">红色文本1</div>
-->
<div id="myApp">
    <div v-bind:class="{active:isActive}">红色文本1</div>
    <div :class="{active:isActive}">红色文本2</div><!--是上一句的缩略写法-->
    <button @click="btnClick">改变class吧</button>
</div>
    <script>
        var myApp = new Vue({
          el:"#myApp",
           data:{
               isActive:true/*isActive是标准的data属性*/
           },
            methods:{
              btnClick:function(){
                  this.isActive = false;
              }
            }
        })
    </script>
</body>
```
css文件:
body{
    font-size: 24px;
}
.active{
    color:red;
}
### class对象绑定
```html
<body>
    <div id="myApp">
        <!--:class后面可以是link指代的css文件,也可以是link指代的css中的一个属性-->
        <div :class="myClass1">红色文本</div>
        <button @click="btnClick">改变class吧</button>
    </div>
    <script>
        var myApp = new Vue({
            el:"#myApp",
            data:{
                myClass1:{
                    active:true,
                    big:true,
                },
            },
            methods:{
                btnClick:function () {
                    this.myClass1.big=!this.myClass1.big;/*反转*/
                }
            }
        })
    </script>
</body>
```
css文件:
body{
    font-size: 24px;
}
.active{
    color:red;
}	
.big{
    font-weight:bolder;
    font-size:64px;
}
### JS对象迭代v-for
```html
<body>
<div id="myApp">
   <h1>JS对象迭代</h1>
    <div v-for="(value,key) in mygame">{{key}} : {{value}}</div>
</div>
    <script>
        var myApp = new Vue({
          el:"#myApp",
           data:{
                    mygame:{
                        title:"sc2",
                        price:198,
                        category:"mpg"
                    }
           }
        })
    </script>
</body>
```
### v-model表单控件绑定
表单控件绑定就是文本中有一个模型名,在script中可以装填数据,但是可以用一个输入框也来给模型装填数据
```html
<body>
<div id="myApp">
  <h1>表单控件绑定</h1>
    <!--v-model绑定的是一个变量-->
    <input type="text" v-model="message" placeholder="编辑区">
    <p>Message is {{ message }}</p>
</div>
    <script>
        var myApp = new Vue({
          el:"#myApp",
           data:{
              message:"中国"
           },
           }
        )
    </script>
</body>
```
### 表单复选框
```html
	<div id="myApp">
        <input type="checkbox" id="生化危机"  value="生化危机" v-model="checkedGames">
       <label for="生化危机" >生化危机</label>
        <input type="checkbox" id="模拟飞行" value="模拟飞行" v-model="checkedGames">
        <label for="模拟飞行" >模拟飞行</label>
        <br>
        <p>您选择的游戏是:{{checkedGames}}</p>
   </div>
        <script>
            var myAppppp = new Vue({
                el:'#myApp',
                data:{
                    checkedGames:[]
                },
                methods:{}
            })
        </script>
```
### 表单单选框
```html
<div id="myApp">
       <h3>选择性别</h3>
       <input type="radio" id="male" value="男" v-model="pickedSex">
       <label for="male">男</label>
       <br>
       <input type="radio" id="female" value="女" v-model="pickedSex">
       <label for="male">女</label>
       <br>
       <h3>选择结果: {{pickedSex}}</h3>
   </div>
        <script>
            var myAppppp = new Vue({
                el:'#myApp',
                data:{
                    pickedSex:""
                },
                methods:{}
            })
        </script>
```
### 表单下拉框
```html
	<body>
    <div id="myApp">
        <h3>球星</h3>
        <select v-model="likedNBAStar" style="width: 210px">
            <option>科比</option>
            <option>韦德</option>
        </select>
        <h3>选择结果</h3>
        <p>我最喜欢:{{likedNBAStar}}</p>
    </div>
    <script>
        var myApp = new Vue({
            el:"#myApp",
            data:{
                likedNBAStar:null
            },
            methods:{
            }
        })
    </script>
</body>
```
### 表单修饰符(.lazy   .number     .trim)
      .lazy:懒加载,输入内容时不动态更新,全部输入完成再做绑定,提高效率
			.number:规范输入内容为数值,输入不正确则返回空
			.trim:去掉空格
```html
<body>
    <div id="myApp">
            <div>
                    <label for="username">用户:</label>
                    <input type="text" id="username" v-model.lazy="username" @change="checkUsername"><!--如果发生变化就触发checkUsername事件-->
                    <span v-if="checkUsernameOK">可注册</span><!--如果checkUsernameOK为true,就显示可注册-->
            </div>
            <div>
                    <label for="age">年龄:</label>
                    <input v-model.number="age"  id="age" type="number">
            </div>
            <div>
                    <label for="content">个人见解:</label>
                    <textarea id="content" v-model.trim="content" cols="55" rows="8"></textarea>
            </div>
            <h4>信息区</h4>
            <p>姓名:{{username}}</p>
            <p>年龄:{{age}}</p>
            <p><pre>个人见解:{{content}}</pre></p>
    </div>
    <script>
            var myApp = new Vue({
                    el:"#myApp",
                    data:{
                            username:"",
                            checkUsernameOk:false,
                            age:"",
                            content:""
                    },
                    methods:{
                            checkUsername:function () {
                                                            if (this.username.length >0){
                                                                    this.checkUsernameOK = true;
                                                            }else {
                                                                    this.checkUsernameOK=false;
                                                            }
                            }
                    }
            })
    </script>
</body>
```
### 表行组件
  错误示范:
```html
<body>
    <div id="myApp">
            <h1>游戏列表:</h1>
            <table boder="1">
                <tr>
                    <td>编号</td>
                    <td>名称</td>
                </tr>
                <my-row1></my-row1>
                <my-row2></my-row2>
            </table>

    </div>
    <script>
        Vue.component('my-row1',{
            template:'<tr><td>(1)</td><td>lol</td></tr>'
            }
        )
        Vue.component('my-row2',{
                template:'<tr><td>(2)</td><td>SC2</td></tr>'
            }
        )
        var myApp = new Vue({
            el:'#myApp',
            data:{},
           methods:{}
        })
    </script>
</body>
```
	错误原因是h5规范中的table中必须是tr不能是其它标签
	改正后应该为:
		<tr is="my-row1"></tr>
    <tr is="my-row2"></tr>
### 组件中的数据函数,为自定义的组件添加变量
     用数据属性会报错:
```html
<body>
    <div id="myApp">
                    <div>今天的天气是:<today-weather/></div>
    </div>
    <script>
            Vue.component('today-weather',{
                    template:'<strong>{{weatherdata}}</strong>',
                    data: {
                            weatherdata:'雨加雪'
                    }
                    })
            var myApp = new Vue({
                    el:'#myApp',
                    data:{},
                    methods:{}
            })
    </script>
</body>	
```
	data是一个属性而不是一个对象,正确的是:
```html
<body>
    <div id="myApp">
                    <div>今天的天气是:<today-weather/></div>
    </div>
    <script>
            Vue.component('today-weather',{
                    template:'<strong>{{weatherdata}}</strong>',
                    data: function () {
                            return {
                                    weatherdata: '雨加雪'
                            };
                    }
                    })
            var myApp = new Vue({
                    el:'#myApp',
                    data:{},
                    methods:{}
            })
    </script>
</body>
```
### 组件-传递数据,可接收参数的组件
```html
<body>
    <div id="myApp">
        <h1>成绩:</h1>
        <test-result :score="50"></test-result>
        <test-result :score="100"></test-result>
    </div>
    <script>
        Vue.component('test-result',{
            props:['score'],
            template:"<div><strong>{{score}}分,{{testResult}}</strong></div>",
            computed:{
                testResult:function(){
                    var strResult = "";
                    if (this.score<60){
                        strResult="不及格"
                    } else{
                        strResult="优秀"
                    }
                        return strResult;
                }
            }
        });
        var myApp = new Vue({
            el:'#myApp',
            data:{},
            methods:{}
        })
    </script>
</body>
```
### 组件-参数验证  
```html
<body>
    <div id="myApp">
        <h1>身世之谜</h1>
         <show-member-info name="koma" :age="25" :detail="{address:'earth',language:'世界语'}"></show-member-info>
    </div>
    <script>
        Vue.component('show-member-info',{
            props:{
                name:{
                    type:String,
                    required:true
                },
                age:{
                    type:Number,
                    validator:function (value) {
                        return value >= 0 && value <=130
                    }
                },
                detail:{
                    type:Object,
                    default:function () {
                        return {
                            address:'us',
                            language:'English'
                        }
                    }
                }
            },
            template:"<div>姓名:{{this.name}}</br>"
            +"年龄:{{this.age}}岁<br>"
            +"地址:{{this.detail.address}}<br>"
            +"语言:{{this.detail.language}}</div>"
            });
        var myApp = new Vue({
            el:'#myApp',
            data:{},
           methods:{}
        })
    </script>
</body>
```
### 组件之事件传递v-on与$emit
    侦听组件事件,当组件触发事件后进行事件处理
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="myApp">
        <h1>人生加法</h1>
        <!--a与b都是子组件属性,v-on是固定监听子组件的关键字,add_event是子组件的方法,getAddResult是父组件的函数-->
        <add-method :a="6" :b="12" v-on:add_event="getAddResult"></add-method>
        <hr/>
        <h3>{{result}}</h3>
    </div>
<script>
    Vue.component('add-method',{
        props:['a','b'],
        template:'<div><button v-on:click="add">加吧</button></div>',
        methods:{
            add:function(){
                var value = 0;
                value = this.a + this.b;
                //$emit是激活,add_event相当于一个中间件,用来通知注册了这个中间件的组件开始运行,类似注册中心的一个服务
                this.$emit('add_event',{
                    result:value//result是返回参数
                });
            }
        }
    });
    var myApp = new Vue({
        el:"#myApp",
        data:{
            result:0
        },
        methods:{
            getAddResult:function(pval){
                this.result = pval.result;//pval是
            }
        },
    });
</script>
</body>
</html> 
```
### 组件之slot插槽
可以将父组件的内容显示在子组件中
```html
<body>
   <div id="myApp">
       <say-to pname="koma">你的视频太差了</say-to>
       <say-to pname="mike">你千万不要学koma</say-to>
       <say-to pname="john">你教教他们两个吧</say-to>
   </div>
<script>
    Vue.component('say-to',{
        props:["pname"],
        //在子组件中定义了一个slot标签
        template:"<div>你好,<strong>{{pname}}</strong>"+
             "<slot></slot>"+
             "</div>"
    });
    var myApp = new Vue({
        el:"#myApp"
    });
</script>
</body>
```

### P5使用Ajax库
- ajax是用来与服务器进行交互
网址是:https://github.com/axios/axios
- 任务一:为网页增加远程数据存取能力
```bash 
cd myweb
npm install --save --save-exact axios vue-axios(其中vue-axios是推荐安装的一个使用更简单的组件)
组件安装完成都会在dependencies中显示
```
>在main.js中添加库
```js
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)//注册到vue全局组件中去
```
HelloWorld.vue变为:
```html
    <template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ""
    }
  },
  //mounted是网页加载完成之后再加载.
  mounted(){
    this.axios.post("http://api.komavideo.com/news/list").then(body =>{
      this.content = body.data;
    })
    //网址为小马专用网址
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
```
之后命令行:npm run dev

- 任务二:Http库axios


### P6自定义CSS样式
```bash
cd assets
nano mycss(nano:编辑,不是命令行命令,是说明,mycss是新建的自定义样式)
```
具体的mycss内容为:
```css
    .myclass1{
    color: red;
    border:1px solid blue;
}
```
在App.vue中添加样式文件(位置是在<script>标签中):
```vue
<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>
```
再在App.vue的template标签中:
```html
    <div class="myclass1">你好!</div> 
```

>>src目录下的App.vue是组件的主入口
>>main.js是js的主入口
### P7 组件的结构
VUE命令行开发模式为我们带来的组件开发方式
- 组件是什么?
HelloWorld.vue是一个组件,也就是后缀为vue的文件就是组件,这就是一个名这HelloWorld的组件

- 所有文件放置目录:
{projectname}/src/components/*
>初始状态默认有一个组件为HelloWorld.vue

- 组件格式(必备的三部分):
    template:组件html的内容
    script:组件的js脚本
    style:组件的css样式单
- 实战演习
```html
    <template>
    
        <div class="container">
            <h1>{{ msg }}</h1>
        </div>
    </template>
    <script> 
        export default{
            name: "HelloWorld",
            data(){//注意data有括号,是方法不是属性
                return{
                    msg: "Welcome to Your Vue.js App"
                }
            }
        }   
    </script>
 >>   scoped指的是影响范围仅在当前组件,不会污染其他
    <style scoped>
    h1{
        font-weight:normal;
        color:red;
    }
    </style>
```

### P9路由组件vue-router
- 官网:https://router.vuejs.org/zh/

- 导入组件到工程中:
```bash
    npm install vue-router --save --save-exact
```
- 导入后的使用
main.js中的:
```js
import router from './router'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//这是唯一的入口组件.注册了router,表明以后所有的子组件都能访问这个router了
```

src/router/index.js中:
```js
import Router from 'vue-router'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

```

### P10路由知我心
1. 关于路由:  
路由其实就是一个超链接,<router-link>标签其实就是一个<a>


### P11路由初体验
做一个简单的路由
1. 五个文件:
    HelloWorld.vue           //组件1,所有的组件都写在src/components目录下,目录默认有HelloWorld.vue组件
    News.vue                  //组件2
    About.vue                //组件3
    router/index.js          //路由设置文件,也叫做url映射文件
    App.vue                  //所有页面组件的入口组件
>>使用时的三部分：组件（components目录下），组件-url（index.js），url(App.vue,里面可以写html)
>>路由中使用组件的时候,只写组件名,不写后缀vue           
- HelloWorld.vue
```html
    <template>
        <div>
            <h1>Hello World!</h1>
        </div>
    </template>
```

- News.vue
```html
    <template>
        <div>
            <h1>News Page</h1>
        </div>
    </template>
```

- About.vue
```html
    <template>
        <div>
            <h1>About Page</h1>
        </div>
    </template>
```

2. 在index.js文件中设置ur映射
```js
import About from '@/components/About'
import News from '@/components/News'
//import引入的组件,就是vue文件的文件名,但是不加后缀

    {
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/news',
        name:'News',
        component:News
    }
```

3. App.vue
```html
    <template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    <!--使用router-link,链接导向了路由,路由再导向了具体组件-->
      <router-link to="/">Home</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/about">关于</router-link>
    </p>
    <!-- 路由匹配到的组件将渲染在这里,没有这一句就无法渲染,相当于上面链接是配置路径,这是一个执行函数 -->
    <router-view/>
  </div>
</template>
```
4. npm run dev运行项目

### P12动态路由
动态路由指在URL路径中含有动态参数的路由,比如说:/player/1,/player/2,/player/3等等
1. 玩家的动态路径:/player/:id

* Player.vue                //组件
* router/index.js           //路由,连接组件和前端url
* App.vue                   //前端页面,虽然和组件都是vue后缀,但是功能和定位不同

Player.vue:
```html
    <template>
    <div>
        <h1>球员页面</h1>
        <p>{{detail}}</p>
    </div>
</template>

<script>
export default {
    name:"Player",
    data(){
        return {
            detail:{}
        };
    },
    mounted(){
        this.detail = this.getPlayer(this.$route.params.uid);
    },
    //问题就在这里,页面加载完成之后就不走了,因此需要增加下面:
    //记录从哪里来到哪里去,
    beforeRouteUpdate(to,from,next){
        this.detail = this.getPlayer(to.params.uid);
        next();
    },
    methods:{
        getPlayer(uid){
            switch(uid){
                case '1':
                 return {uid:1,name:"库里",point:26};
                case '2':
                 return {uid:2,name:"哈登",point:30};
                default:
                    return {uid:-1};
            }
        }
    }
}
</script>
```
index.js
```js
    import Vue from 'vue'
    import Router from 'vue-router'
    import HelloWorld from '@/components/HelloWorld'
    /* import About from '@/components/About'
    import News from '@/components/News' */
    import Player from "@/components/Player"

    Vue.use(Router)

    export default new Router({
    routes: [
        {
        path:"/",
        name:"HelloWorld",
        component: HelloWorld
        },
        {
        path:"/player/:uid",//id就是组件接收的参数,用:表示
        name:"Player",
        component: Player
        }
    ]
    })
```
App.vue:
```html
    <template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里</router-link>
      <router-link to="/player/2">哈登</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```



2. 问题就是,从home点击库里,可以正常显示库里,但是从库里点击哈登,就不会跳转到哈登
    原因就是vue为了减少内存消耗,一个组件只加载一次,也就是加载完成后执行mounted函数,但是再次加载这个组件不会再执行,因此用beforeRouteUpdate

### P13嵌套路由
1. 在components组件目录下再建立一个目录叫做player.player下面建立两个路由,/player/1/profile,/player/1/stats等
2. Player/Profile.vue
   Player/Stats.vue
   router/index.js
   Player.vue
3. 由于整个工程太大,105M,因此无法直接上传demo,因此代码如下:
- Profile.vue
```html
    <template>
    <div>
        <h2>球员简介:{{$route.params.uid}}</h2>
    </div>
</template>
```
Stats.vue:
```html
    <template>
    <div>
        <h2>球员数据:{{$route.params.uid}}</h2>
    </div>
</template>
```
Player.vue:
```html
<template>
    <div>
        <h1>球员页面</h1>
        <ul>
            <li>编号:{{detail.uid}}</li>
            <li>名字:{{detail.name}}</li>
            <li>得分:{{detail.point}}</li>
        </ul>
        <router-link :to="profile">简介</router-link>
        <router-link :to="stats">数据</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Player",
    data(){
        return {
            detail:{}
        };
    },
    mounted(){
        this.detail = this.getPlayer(this.$route.params.uid);
        this.profile = "/player/"+this.$route.params.uid + "/profile";
        this.stats = "/player/"+this.$route.params.uid + "/stats";
    },
    beforeRouteUpdate(to,from,next){
        this.detail = this.getPlayer(to.params.uid);
        this.profile = "/player/" + to.params.uid + "/profile";
        this.stats = "/player/" + to.params.uid + "/stats";
        next();
    },
    methods:{
        getPlayer(uid){
            switch(uid){
                case '1':
                 return {uid:1,name:"库里",point:26};
                case '2':
                 return {uid:2,name:"哈登",point:30};
                default:
                    return {uid:-1};
            }
        }
    }
}
</script>>

```

index.js:
```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* import About from '@/components/About'
import News from '@/components/News' */
import Player from "@/components/Player"
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"HelloWorld",
      component: HelloWorld
    },
    {
      path:"/player/:uid",//id就是组件接收的参数
      name:"Player",
      component: Player,
      children:[
        {
          path:"profile",
          component:PlayerProfile
        },
        {
          path:"stats",
          component:PlayerStats
        }
      ]
    }
  ]
})

```
App.vue:
```html
    <template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里</router-link>
      <router-link to="/player/2">哈登</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

npm run build 就是打包,会生成一个dist目录,里面有一个static目录和一个index.html

### P14路由编程
1. 之前用router-link标记来生成页面的a标记,然后进行url转向,这次用编程的方式来实现,用router.push
2. 下面是三种实现方法,分别为库里1,库里2,库里3
>>库里2有bug
>>库里2与库里3中间写一个<hr>会报错
App.vue
```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里1</router-link>
      <router-link to="/player/2">哈登1</router-link>
    </p>
    <p>
      <button @click="btnClick(1)">库里2</button>
      <button @click="btnClick(2)">哈登2</button>
      <router-link :to="{name:'Player',params:{uid:1}}">库里3</router-link>
      <router-link :to="{path:'/Player2/stats'}">哈登3</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App',
  methods:{
      //这章有bug,传不过去
    btnClick(uid){
      this.$router.push({ path: '/player/${uid}' });
      //this.$router.push({path:"/player/${uid}/stats"});
      //this.$router.push({name:"Player",params:{uid:uid}});
      //this.$router.push({path:"/player",query:{uid:uid}});//url-get参数写法
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


### P15多路由拼图
为一个路由组合多个组件,完成整个页面
1. 五个文件(组件都在新建的setting目录下):
    Header.vue
    Sidebar.vue
    Detail.vue
    router/index.js
    App.vue
2. 
- setting/Detail.vue
```html
    <template>
    <div>
        <h1>详细显示</h1>
        <p>.....111111122222333334444</p>
    </div>
</template>
```
- setting/Header.vue
```html
    <template>
    <div>
        <h1>标题栏</h1>
        <div>欢迎来到连云港</div>
    </div>
</template>
```
- setting/Siderbar.vue
```html
    <template>
    <div>
        <h1>边条</h1>
    </div>
</template>
```

- router/index.js
```js
    routes: [
    {
      path:"/",
      name:"HelloWorld",
      components:{
        myHeader:SettingHeader,
        mySidebar:SettingSidebar,
        myDetail:SettingDetail
      }
    },//在根目录下设置方便一点
```

- App.vue
```js
    <template>
        <div id="app">
            <table width="100%">
                <tr>
                    <td colspan="2" style="background-color:darkgoldenrod">
                        <router-view name="myHeader"></router-view>
                    </td>
                </tr>
                <tr>
                    <td colspan="20%" style="background-color:thistle">
                        <router-view name="mySidebar"></router-view>
                    </td>
                    <td colspan="80%" style="background-color:aquamarine">
                        <router-view name="myDetail"></router-view>
                    </td>
                </tr>
            </table>
            
        </div>
    </template>
```


### P16URL重定向
- 重定向指令:redirect,指一个路由指向的不是资源,而是另一个路由
- 路由别名:alias
- components/About.vue
```html
    <template>
        <div>
            <h1>About Page</h1>
        </div>
</template>
```

index.js
```js
    {
      path: "/about",
      name:"About",
      component: About,
      alias:"/aboutme"//别名指的App.vue中可以写aboutme,效果与about相同效果
    },
    {
      path:"/curry",
      redirect: "/player/1"
    },
```

App.vue:
```html
    <template>
        <div id="app">
           <router-link to="/">Home</router-link>
           <router-link to="/about">About</router-link>
           <router-link to="/player/1">Player</router-link>
           <router-link to="/curry">Curry</router-link>
           <router-view></router-view>
        </div>
</template>
```



### P17多参数路由
- 给路由传递多个属性
- 涉及文件:
    User.vue
    router/index.js
    App.vue
- 具体代码
components/User.vue
```html
    <template>
    <div>
        <h1>User</h1>
        <p>uid= {{uid}},{{nationality}}</p>
        <p>$route.params.uid={{$route.params.uid}}</p>
        <p>$route.params.uid={{$route.params.nationality}}</p>
    </div>
    </template>
        <script>
        export default {
            name:"User",
            props:["uid","nationality"]
        }
    </script>
```

index.js:
```js
    import User from '@/components/User'
    {
      path:"/user/:uid/:nationality",
      name:"User",
      component:User,
      props:true
    },
```
App.vue
```html
    <template>
        <div id="app">
           <router-link to="/">Home</router-link>
           <router-link to="/user/1/usa">User1</router-link>
           <router-link to="/user/2/china">User2</router-link>
           <router-link to="/user/3/korea">User3</router-link>
           <router-view></router-view>
        </div>
    </template>
```


### 问题:
1. vue写完以后怎样打包布署到服务器上,怎样本地可以运行?
参照链接:https://blog.csdn.net/github_39088222/article/details/79482461
步骤:
- 下载ngnix反射代理服务器,设置端口在nginx目录下的conf目录下的nginx.conf文件中的listen
- 用npm run build会生成dist目录,里面有static目录和index.html两部分
- 复制到nginx目录下的html目录,里面之前的东西全部清空
- 运行nginx,打开页面.

###






	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
                
	
	
	
	
	
	
