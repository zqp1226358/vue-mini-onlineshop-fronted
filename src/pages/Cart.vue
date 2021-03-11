<template>
  <div>
      <div class="title">
          <h1>{{msg}}</h1>
      </div>
      <template v-for="product in cart">
          <!-- <div :key="product._id" class="product">
              <p class="product_name">产品名称：{{product.name}}</p>
              <p class="product_description">介绍：{{product.description}}</p>
              <p class="product_price">价格：{{product.price}}</p>
              <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
              <img :src="product.image" alt="" class="product_image">
              <button @click="removeFromCart(product._id)">从购物车中移除</button>
          </div> -->
        <product-item :product="product" :key="product._id"></product-item>
      </template>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue';
export default {
    name: 'home',
    data(){
        return{
            msg:"welcome to the Cart Page"
        };
    },
    computed:{
        cart(){
            return this.$store.state.cart;
        }
    },
    components:{
        'product-item' : ProductItem
    }
    // methods:{
    //     removeFromCart(productId){
    //         this.$store.commit('REMOVE_FROM_CART',{
    //             productId
    //         });
    //     }
    // }
}
</script>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>