import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state:{
        //bought items
        cart: [],
        //ajax loader
        showLoader: false,
        // selected product
        product:{},
        // all products
        products:[
            // {
            //     _id: '1',
            //     name: 'iPhone',
            //     description: 'iPhone是美国苹果公司研发的智能手机系列，搭载苹果公司研发的iOS操作系统',
            //     image: 'https://i.gadgets360cdn.com/large/iPhone11_leak_1567592422045.jpg',
            //     price: 2000,
            //     manufacturer: 'Apple Inc'
            //   },
              // {
              //   _id: '2',
              //   name: '荣耀20',
              //   description: '李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 全面屏手机',
              //   image: 'https://article-fd.zol-img.com.cn/t_s640x2000/g4/M08/0E/0E/ChMlzF2myueILMN_AAGSPzoz23wAAYJ3QADttsAAZJX090.jpg',
              //   price: 2499,
              //   manufacturer: '华为'
              // },
              // {
              //   _id: '3',
              //   name: 'MIX2S',
              //   description: '骁龙845 全面屏NFC 游戏智能拍照手机 白色 全网通 6+128',
              //   image: 'http://himg2.huanqiu.com/attachment2010/2018/0129/08/39/20180129083933823.jpg',
              //   price: 1688,
              //   manufacturer: '小米'
              // },
              // {
              //   _id: '4',
              //   name: 'IQOO Pro',
              //   description: '12GB+128GB 竞速黑 高通骁龙855Plus手机 4800万AI三摄 44W超快闪充 5G全网通手机',
              //   image: 'https://www.tabletowo.pl/wp-content/uploads/2019/08/vivo-iqoo-pro-5g-blue-1.jpg',
              //   price: 4098,
              //   manufacturer: 'Vivo'
              // },
              // {
              //   _id: '5',
              //   name: 'Reno2',
              //   description: '【12期免息1年碎屏险】4800万变焦四摄8+128G防抖6.5英寸全面屏新 深海夜光(8GB+128GB) 官方标配',
              //   image: 'https://news.maxabout.com/wp-content/uploads/2019/08/OPPO-Reno-2-1.jpg',
              //   price: 2999,
              //   manufacturer: 'OPPO'
              // }
        ],

        manufacturers:[],
    },
    mutations:{
        // ADD_TO_CART(state,payload){
        //     const {product}= payload;
        //     state.cart.push(product);
        // },
        // REMOVE_FROM_CART(state,payload){
        //     const {productId} = payload;
        //     state.cart = state.cart.filter(product => product._id !== productId)
        // },
        // ALL_PRODUCTS(state){
        //   state.showLoader = true;
        // },
        // ALL_PRODUCTS_SUCCESS(state,payload){
        //   const {products} = payload;

        //   state.showLoader = false;
        //   state.products = products;
        // },
        // PRODUCT_BY_ID(state){
        //   state.showLoader = true;
        // },
        // RRODUCT_BY_ID_SUCCESS(state,payload){
        //   state.showLoader = false;

        //   const {product} = payload;
        //   state.product = product;
        // }
        ...productMutations,
        ...cartMutations,
        ...manufacturerMutations,
    },
    getters:{
      // allProducts(state){
      //   return state.products;
      // },
      // productById:(state,getters) => id =>{
      //   if(getters.allProducts.length > 0){
      //     return getters.allProducts.filter(p => p._id == id)[0];
      //   }else{
      //     return state.product;
      //   }
      // }
      ...productGetters,
      ...manufacturerGetters,
    },
    actions:{
      // allProducts({commit}){
      //   commit('ALL_PRODUCTS')

      //   axios.get(`${API_BASE}/products`).then(response => {
      //     console.log('response',response);
      //     commit('ALL_PRODUCTS_SUCCESS',{
      //       products:response.data,
      //     });
      //   })
      // },
      // productById({commit},payload){
      //   commit('PRODUCT_BY_ID');

      //   const {productId} = payload;
      //   axios.get(`${API_BASE}/products/${productId}`).then(response =>{
      //     commit('PRODUCT_BY_ID_SUCCESS',{
      //       product:response.data,
      //     });
      //   })
      // },
      // allManufacturers({ commit }) {
      //   commit('ALL_MANUFACTURERS');
  
      //   axios.get(`${API_BASE}/manufacturers`).then(response => {
      //     commit('ALL_MANUFACTURERS_SUCCESS', {
      //       manufacturers: response.data,
      //     });
      //   })
      // },
      // removeManufacturer({ commit }, payload) {
      //   commit('REMOVE_MANUFACTURER');
  
      //   const { manufacturerId } = payload;
      //   axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
      //     // 返回 manufacturerId，用于删除本地对应的制造商
      //     commit('REMOVE_MANUFACTURER_SUCCESS', {
      //       manufacturerId,
      //     });
      //   })
      // },
      ...productActions,
      ...manufacturerActions,
    }
})