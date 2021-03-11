<template>
  <div class="product-details">
      <div class="product-details_image">
          <img :src="product.image" alt="" class="image">
      </div>
      <div class="product-details_info">
          <div class="product-details_description">
              <small>{{product.manufacturer.name}}</small>
              <h3>{{product.name}}</h3>
              <p>
                   {{product.description}}
              </p>
          </div>
          <div class="product-details_price-cart">
              <p>{{product.price}}</p>
              <product-button :product="product"></product-button>
          </div>
      </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton';
export default {
    props:['product'],
    components:{
        'product-button' : ProductButton
    }
}
</script>

<style>
.product-details_image .image{
    width: 100px;
    height: 100px;
}
</style>