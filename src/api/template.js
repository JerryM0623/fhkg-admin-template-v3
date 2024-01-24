import request from '@/utils/request.js';
import {GET, POST} from '@/config/requestMethods.js'

/**
 * get请求模板配置，后期封装请求的时候按照现在这样子进行封装
 * @param data
 * @return {*}
 */
export function testRequest(data) {
  return request({
    url: '/api/test/get',
    method: GET,
    params: data
  })
}

/**
 * post请求模板配置，后期封装请求的时候按照现在这样子进行封装
 * @param data
 * @return {*}
 */
export function testPostRequest(data) {
  return request({
    url: '/api/test/post',
    method: POST,
    data: data
  })
}
