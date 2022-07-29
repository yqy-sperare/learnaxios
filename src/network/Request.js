import axios from "axios";
// 导出多个函数用function，导出默认值用default
// *Promise方法
export function request(config){

  // ~1、创建axios的实例
  const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  // ~2、axios的拦截器
  // axios.interceptors 全局的拦截器
  // todo 2.1请求拦截
  // instance.interceptors.request.use(config=>{
  //   console.log(config);
    // !拦截之后不返回则内部拿不到消息最终结果main.js接收不到走向err
    // *拦截的作用：1修改config中的一些信息不符合服务器的要求
    // *2每次发送网络请求时，都希望在界面中显示一个请求的图标(等待画面)
    // *3某些网络请求(比如登录(token)),必须携带一些特殊的信息
  //   return config
  // },
  // err=>{
  //   console.log(err);
  // })
  // todo 2.2响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    console.log(res.data);
    // !拦截之后记得返回，可以都返回不过只返回data就够了
    return res.data
  },err=>{
    // 接口错误的时候才会打印
    console.log(err);
  })



  // ~3、发送真正的网络请求
//  instance类型是一个可以返回promise的类型
  return instance(config)

}
// *Promise方法
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     // 1、创建axios的实例
//   const instance =axios.create({
//     baseURL:'http://152.136.185.210:7878/api/hy66',
//     timeout:5000
//   })
//  // 2、发送真正的网络请求
//   instance(config)
//     .then(res=>{
//       resolve(res)
//     })
//     .catch(err=>{
//       reject(err)
//     })
//   })
// }

// *方法二
// export function request(config){
// // 1、创建axios的实例
// const instance =axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })

// // 2、发送真正的网络请求
// // 把回调函数放在config里，直接调用,return一个promise, 让外面调用then方法。
// instance(config.baseConfig)
// .then(res=>{
//   // console.log(res);
//   config.success(res)
// })
// .catch(err=>{
//   // console.log(err);
//   config.failure(err)
// })
// }

// *方法一利用回调函数
// export function request(config,success,failure){
// // 1、创建axios的实例
// const instance =axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })

// // 2、发送真正的网络请求
// // 把回调函数放在config里，直接调用,return一个promise, 让外面调用then方法。
// instance(config)
// .then(res=>{
//   // console.log(res);
//   success(res)
// })
// .catch(err=>{
//   // console.log(err);
//   failure(err)
// })
// }