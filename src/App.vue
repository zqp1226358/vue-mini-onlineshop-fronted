<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <nav>
      <div class="container">
        <ul class="nav_left">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/admin">Admin</router-link>
          </li>
          <li>
            <router-link to="cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav> -->

    <el-menu
      class="menu" :default-active="activeIndex2" mode="horizontal" @select="handleSelect" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/" tag="div">Home</router-link></el-menu-item>
      <!-- tag 属性的设置是为了去除下划线。 -->
      <el-submenu index="2">
        <template slot="title">Admin</template>
        <el-menu-item index="2-1"><router-link to="/admin" tag="div">查看商品</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/admin/new" tag="div">添加商品</router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/admin/manufacturers" tag="div">查看生产商</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/admin/manufacturers/new" tag="div">添加生产商</router-link></el-menu-item>
      </el-submenu>  
      
      <el-menu-item index="3"><router-link to="/cart" tag="div">Cart</router-link></el-menu-item>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
