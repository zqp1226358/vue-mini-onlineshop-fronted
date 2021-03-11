/* eslint-disable */
<template>
  <form @submit.prevent="saveProduct">
      <div class="col-lg-5">
          <div class="form-group">
              <label>Name</label>
              <input 
                type="text"
                placeholder="Name"
                v-model="model.name"
                name="name"
                class="form-control"/>
            </div>
          <div class="form-group">
              <label>Price</label>
              <input 
                type="number"
                class="form-control"
                placeholder="Price"
                v-model="model.price"
                name="price" />
            </div>
          <div class="form-group">
              <label>Manufacturer</label>
              <select 
                type="text"
                class="form-control"
                v-model="model.manufacturer"
                name="manufacturer">
                <!-- <template v-for="manufacturer in manufacturers" :key="manufacturer"> eslint报错v-for+key 使用div正常-->
                <!-- <div v-for="manufacturer in manufacturers" :key="manufacturer._id">
                    <option :value="manufacturer._id" :selected="manufacturer._id === (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
                </div> -->
                <template v-for="manufacturer in manufacturers">
                    <option :value="manufacturer" :key="manufacturer._id">{{manufacturer.name}}</option>
                </template>
              </select>
            </div>
      </div>

      <div class="col-lg-4">
          <div class="form-group">
              <label>Image</label>
              <input 
                type="text" 
                class="form-control"
                placeholder="Image"
                v-model="model.image"
                name="image"/>
            </div>
          <div class="form-group">
              <label>Description</label>
              <!-- <input type="text" class="form-control"> -->
              <textarea name="description" rows="5" placeholder="Description"
                        v-model="model.description"></textarea>
            </div>
          <div class="form-group new-button">
              <button class="button">
                  <i class="fa fa-pencil"></i>
                  <span v-if="isEditing">Update Product</span>
                  <span v-else>Add Product</span>
              </button>
          </div>
      </div>
  </form>
</template>

<script>
export default {
    props:['model','manufacturers','isEditing'],
    methods:{
        saveProduct(){
            this.$emit('save-product',this.model)
        }
    }
}
</script>

<style>

</style>