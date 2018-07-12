import axios from 'axios'
axios.defaults.baseURL = 'localhost:8080/';
axios.interceptors.request.use(function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });//请求拦截器
axios.interceptors.response.use(response => {
  return response.data;
}, (responseError) => {
  console.log(responseError);
});//响应拦截器
