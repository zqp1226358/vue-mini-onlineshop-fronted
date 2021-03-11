<template>
  <div>
      <div class="title">
          <!-- <h1>{{msg}}</h1> -->
          <h1>In Stock</h1>
      </div>
      <product-list></product-list>
  </div>
</template>

<script>
import ProductLists from '../components/products/ProductLists.vue';
export default {
  components: { ProductLists },
    name: 'home',
    data(){
        return {
            msg:'Weclome to Your Vue.js App'
        };
    },
    components:{
        'product-list':ProductLists
    }
}
</script>

<style>

</style>