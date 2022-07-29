import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// 1.axios的基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
// console.log(res)
// })

// axios({
//   // http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1
//   url:'http://152.136.185.210:7878/api/hy66/home/data',
//   params:{
//     type:'pop',
//     page:1
//   },
//   method:'get'
// }).then(res=>{
// console.log(res)
// })

// 2、axios发送并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url:'http://152.136.185.210:7878/api/hy66/home/data',
//   params:{
//     type:'sell',
//     page:4
//   },
// })])
// .then(results=>{
//   console.log(results);
//   console.log(results[0]);
//   console.log(results[1]);
// })
// todo使用全局的axios和对应的配置在进行网络请求
// 提取全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   baseURL:'http://123.207.32.32:8000',
  // timeout:5000,
//   url:'/home/multidata',
// }),axios({
  // baseURL:'http://152.136.185.210:7878/api/hy66',

  // timeout:5000 ,
  // ~常用的配置选项（自行百度还有很多）
  // *1 url               请求地址
  // *2 method            请求类型
  // *3 baseURL           根路径
  // *4 transformRequest  请求前的数据处理
  // *5 transformResponse 请求后的数据处理
  // *6 headers           自定义请求头
  // *7 params            url查询对象

//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:4
//   },
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
// axios({
//   url:'/category'
// })


// todo创建对应的axios的实例
// const instance1=axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
// }
// })
// const instance2= axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000,
// // headers:{}
// })


// todo封装request 模块
// ~导入的不是default所以需要{}
import { request } from "./network/Request";
// *Promise方法
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

// *方法二
// request({
//   baseConfig:{},
//   success:function (res) {  },
//   failure:function (err) {  }
//   })

// *方法一
// request({
//   url:'/home/multidata'
// },res=>{
//   // *回调函数到success
//   console.log(res);
// },err=>{
//   //*回调到failure
//   console.log(err);
// })
