<template>
  <div>
      <div class="product">
          <!-- <router-link :to="'/detail/'+product._id" class="product-link">
         <p class="product__name">产品名称：{{product.name}}</p>
         <p class="product__description">介绍：{{product.description}}</p>
         <p class="product__price">价格：{{product.price}}</p>
         <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
         <img :src="product.image" alt="" class="product__image">
          </router-link>
        <product-button :product="product"></product-button>     -->
        <el-table v-if="show" class="table" :data="products" max-height="250">
             <el-table-column
                prop="name"
                label="产品名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="description"
                label="介绍"
                width="180">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格"
                width="180">
              </el-table-column>
              <el-table-column
                prop="manufacturer.name"
                label="生产厂商"
                width="180">
              </el-table-column>
              <!-- <el-table-column
                label="图片"
                width="200">
                <img :src="image" alt="" class="product__image">
              </el-table-column> -->
              <el-table-column
                label="操作"
                width="180">
                <template slot-scope="scope">
                  <!-- 通过 slot-scope 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
                  <product-button :id="scope.row._id"></product-button>
                </template>
              </el-table-column>
        </el-table>

      
        <el-row v-else type="flex" justify="space-around">
          <el-col :span="4" v-for="product in products" :key="product._Id" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="product.image" class="image">
              <div style="padding: 14px;">
                <!-- <span>好吃的汉堡</span> -->
                <p class="product__name">产品名称：{{product.name}}</p>
                <router-link :to="'/detail/'+product._id" class="product-link">
                <p class="product__description">介绍：{{product.description}}</p>
                </router-link>
                <p class="product__price">价格：{{product.price}}</p>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  <product-button :id="product._id"></product-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue';
export default {
    name:'product-item',
    props:['products','show'],
    components:{
        'product-button':ProductButton,
    }
}
</script>

<style>
.product {
  border-bottom: 1px solid black;
  /* display:flex;
  justify-content: center; */
}
/* .prd{
  display:flex;
  justify-content: center;
} */
.product__description{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.product__image {
  width: 100px;
  height: 100px;
}

.product__price{
  color: red;
}
.image {
    width: 100%;
    height: 250px;
    display: flex;
  }

.clearfix:before,
.clearfix:after {
      display: table;
      content: "";
  }
  
.clearfix:after {
      clear: both
 }
</style>