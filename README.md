# vue-online-shop-frontend

> A Vue.js project
>
> **参考教程**：https://juejin.cn/post/6844904025272352775（新手强烈推荐！）
>
> **后端项目代码：**https://github.com/zqp1226358/vue-mini-onlineshop-backend
>
> **主要技术栈**：Vue+Express+Mongodb
>
> **项目目的**：通过此项目的学习，巩固和复习vue的基本语法，比如v-on，v-bind，v-model，v-if等常用指令，以及父子组件如何通信，然后对vuex状态管理有所了解和应用，使用express和mongdb数据库做为后端处理数据响应，使用axios进行请求以及用cors解决跨域的问题，最后使用elementUI对页面进行美化！
>
> **主要功能**：
>
> - 首页对商品进行选购加入购物车，也可以在Cart购物车中移除商品
> - 管理商品信息和制造商信息，进行增删改查的操作
>
> **待补充完善功能：**
>
> - 设置登录注册页面
> - 只有管理员可以对商品等进行管理。

页面大致展示：

[![6dqOyD.md.gif](https://s3.ax1x.com/2021/03/13/6dqOyD.md.gif)](https://imgtu.com/i/6dqOyD)
[![6dqXOe.md.gif](https://s3.ax1x.com/2021/03/13/6dqXOe.md.gif)](https://imgtu.com/i/6dqXOe)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

**遇到的一些小问题和知识点**

- @/ 与 ./
- router路由
- router-view渲染  router-link跳转（优化于a标签）
- 动态路由$route.params.id

- ../与../../
- mongodb安装与运行

**启动数据库使用`mongod`命令**

- 方式一：普通方式启动

```shell
> mongod --dbpath  E:\MongoDB\data\db  #不使用默认端口的话可以加上--port=[端口号]参数
```

> **E:\data\db**为数据文件路径

- 方式二：通过配置文件启动

```shell
> mongod --config E:\MongoDB\mongo.conf
```

- 登录本地默认数据库服务器，无用户名密码，端口默认**27017**,链接默认的**db**数据库

```shell
> mongo mongodb://localhost/db 
```

或者

```shell
> mongo 
```

- 使用用户名admin、密码123456，登录本地端口为27017的test数据库。

```shell
> mongo mongodb://admin:123456@localhost:27017/test
```

**创建数据库**

创建数据库使用`use [数据库名]`,例如创建一个**test123**的数据库

```shell
> use test123
switched to db test123
> db
test123
```

显示当前所有的数据库可以使用命令`show dbs`

```shell
> show dbs
db     0.001GB
local  0.000GB
```

用法详见：https://www.cnblogs.com/wuhuan-think/p/10248241.html

【MongoDB】mongodb 导入json文件

**方法一：**

**mongoimport --db test --collection user --file C:\Users\zhang_zk\Desktop\new.json**

其他方法详见：https://blog.csdn.net/qq_37495786/article/details/81316708



##遇见的坑记录

- 坑1：注意model的名称接口要与control层相对应
- 坑2：postman开桌面代理，post时选择json数据格式
- 坑3：跨域的解决，服务端express解决时注意顺序，放在app=express()后面生效。



报错信息记录：

Avoid using non-primitive value as key, use string/number value instead.
意思是：避免使用非基本值作为键，而是使用字符串/数字值。

 Duplicate keys detected: '[object Object]'. This may cause an update error.
意思是：检测到重复键:'[object object]'。这可能会导致更新错误。
**key值是必须唯一的，如果重复就会报错**



##git上传命令

```
echo "# vue-mini-onlineshop-backend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:zqp1226358/vue-mini-onlineshop-backend.git
git push -u origin main
```



```
git remote add origin git@github.com:zqp1226358/vue-mini-onlineshop-backend.git
git branch -M main
git push -u origin main
```