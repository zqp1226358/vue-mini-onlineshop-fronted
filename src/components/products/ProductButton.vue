<template>
  <div>
      <el-button v-if="isAdding" type="text" size="small" @click="addToCart">加入购物车</el-button>
      <el-button v-else type="text" size="small" @click="removeFromCart(id)">从购物车移除</el-button>
    </div>
</template>

<script>
export default {
    // props:['product'],
    props:['id'],
    computed:{
        product(){
            let product = this.$store.getters.allProducts.find(product => product._id === this.id)
            return product;
        },
        isAdding(){
            let isAdding = true;
            this.cart.map(product => {
                if(product._id === this.product._id){
                    isAdding = false;
                }
            });
            return isAdding;
        },
        cart(){
            return this.$store.state.cart;
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('ADD_TO_CART',{
                product: this.product,
            })
        },
        removeFromCart(productId){
            this.$store.commit('REMOVE_FROM_CART',{
                productId,
            })
        }
    }
}
</script>

<style>

</style>