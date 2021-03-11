<template>
  <!-- <div>
      <div class="title">
          <h1>This is Admin/New</h1>
      </div>
  </div> -->
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
  >
  </product-form>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  // data(){
  //   return{
  //     model:{},
  //     manufacturers:[
  //       {
  //         _id:'sam',
  //         name:'Samsung',
  //       },
  //       {
  //         _id:'apple',
  //         name:'Apple',
  //       },
  //     ],
  //   };
  // },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
   computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      return {};
    }
  },
  methods:{
    addProduct(model){
      this.$store.dispatch('addProduct', {
        product: model,
      })
    },
  },
  components:{
    'product-form':ProductForm
  }
}
</script>

<style>

</style>