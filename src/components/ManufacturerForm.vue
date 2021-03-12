<template>
  <!-- <form @submit.prevent="saveManufacturer">
      <div class="form-group">
          <label>Name</label>
          <input 
            type="text"
            placeholder="Name"
            v-model="model.name"
            name="name"
             class="form-control" />
        </div>

        <div class="form-group">
            <button class="button">
                <i class="fa fa-pencil"></i>
                <span v-if="isEditing">Update Manufacturer</span>
                <span v-else>Add Manufacturer</span>
            </button>
        </div>
  </form> -->
  <div class="manufacturerInfo">
    <el-form class="form" ref="form" label-width="180px"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-form-item label="Name">
        <el-input v-model="manufacturerData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props: ['model', 'isEditing'],
    data() {
        return {
            manufacturerData: {name: ''}
        }
    },
    created() {
        this.manufacturerData = this.model
    },
    watch: {
        model(val, oldVal) {
            this.manufacturerData = val;
        }
    },
    computed: {
        loading() {
            return this.$store.state.showLoader
        }
    },
    methods: {
        onSubmit(){
            this.$emit('save-manufacturer', this.manufacturerData)
        }
   }
}
</script>

<style>

</style>