<template>
  <div>
      <div class="products">
          <div class="container">
              This is ProductList
          </div>
          <template v-for="product in products">
              <!-- <div class="product" :key="product._id">
                  <p class="product_name">产品名称：{{product.name}}</p>
                  <p class="product_description">介绍：{{product.description}}</p>
                  <p class="product_price">价格：{{product.price}}</p>
                  <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
                  <img :src="product.image" alt="" class="product_image">
                  <button @click="addToCart(product)">加入购物车</button>
              </div> -->
              <product-item :product="product" :key="product._id"></product-item>
          </template>
      </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    components: { 'product-item':ProductItem },
    name:'product-list',
    created() {
        if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
        }
    },
    computed:{
        products(){
            // return this.$store.state.products;
            return this.$store.getters.allProducts;
        }
    },
    // methods:{
    //     addToCart(product){
    //         this.$store.commit('ADD_TO_CART',{
    //             product
    //         });
    //     }
    // }
}
</script>

<style>
.product{
    border-bottom: 1px solid black;
}
.product_image{
    width: 100px;
    height: 100px;
}
</style>