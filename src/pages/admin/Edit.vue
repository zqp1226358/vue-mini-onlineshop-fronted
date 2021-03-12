<template>
  <div>
      <div class="title">
          <!-- <h1>This is Admin/Edit/{{$route.params.id}}</h1> -->
          <h1>This is Admin/Edit</h1>
          <!-- 当用户访问 /admin/edit/:id，会激活渲染 Edit.vue 组件，
          我们可以通过 $route.params.id 的方式获取用户输入的路径 :id 部分。
          比如我们在浏览器中输入 /admin/edit/52tuture，那么浏览器将会以 h1 的形式打出 "This is Admin/Edit/52tuture"。 -->
      </div>
          <product-form
            @save-product="updateProduct"
            :model="model"
            :manufacturers="manufacturers"
            :isEditing="true"
          ></product-form>
      <!-- </div> -->
  </div>
</template>

<script>
import ProductForm from '../../components/ProductForm.vue'
export default {
  // components: { ProductForm },
    // data: {
    //   model() {
    //     const product = this.$store.getters.productById(this.$route.params['id']);
    //     // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，在保存之前不修改本地 Vuex stire 的 product 属性
    //     return { ...product, manufacturer: { ...product.manufacturer } };
    //   }
    // },
    created(){
      const { name = "" } = this.modelData || {};
      // const { name } = this.model;
      if(!name){
        this.$store.dispatch('productById',{
          productId: this.$route.params['id']
        });
      }

      if(this.manufacturers.length === 0){
        this.$store.dispatch('allManufacturers');
      }
    },
    computed:{
      manufacturers(){
        return this.$store.getters.allManufacturers;//注意这里原来少了一个t
      },
      model(){
        const product = this.$store.getters.productById(this.$route.params['id']);
        // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，在保存之前不修改本地 Vuex stire 的 product 属性
        // return {...product, manufacturer: { ...product.manufacturer } }
        const res = { ...product, manufacturer: { ...product.manufacturer } };

        return res;
      },
    },
    methods:{
        updateProduct(product){
          this.$store.dispatch('updateProduct',{
            product,
          })
        }
      },
    components:{
        'product-form': ProductForm
      }
    
}
</script>

<style>

</style>