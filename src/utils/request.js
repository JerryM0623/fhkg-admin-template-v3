import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
console.log('🚀 ~ 当前文件:request.js 所在行数:4 参数：baseUrl', baseUrl);

const request = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 30 // 设置30秒没响应就超时
})

// 配置请求拦截器
request.interceptors.request.use((config) => {
  // TODO: 后期根据真实情况添加请求头等操作
  return config;
}, (error) => {
  return Promise.reject(error);
})

// 配置响应拦截器
request.interceptors.response.use((response) => {
  // TODO: 后期等开始联调了的时候再根据真实情况去配置判断条件
  return Promise.resolve(response.data);
}, (error) => {
  return Promise.reject(error);
})

export default request;
