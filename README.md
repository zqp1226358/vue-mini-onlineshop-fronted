# vue-online-shop-frontend

> A Vue.js project

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



- @/ 与 ./
- router路由
- router-view渲染  router-link跳转（优化于a标签）
- 动态路由$route.params.id



## 后端

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

#### 创建数据库

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

### 方法一：

**mongoimport --db test --collection user --file C:\Users\zhang_zk\Desktop\new.json**

其他方法详见：https://blog.csdn.net/qq_37495786/article/details/81316708



- 坑1：注意model的名称接口要与control层相对应
- 坑2：postman开桌面代理，post时选择json数据格式
- 坑3：跨域的解决，服务端express解决时注意顺序，放在app=express()后面生效。



报错信息记录：

Avoid using non-primitive value as key, use string/number value instead.
意思是：避免使用非基本值作为键，而是使用字符串/数字值。

 Duplicate keys detected: '[object Object]'. This may cause an update error.
意思是：检测到重复键:'[object object]'。这可能会导致更新错误。
**key值是必须唯一的，如果重复就会报错**