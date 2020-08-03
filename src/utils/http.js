import axios from 'axios';
import store from '@/store';
import {
    Message
} from 'element-ui';
// axios.defaults.withCredentials = true;
export default class Http {
    service;
    constructor(baseApi,withCredentials = true) {
        // 创建axios 实例
        this.service = axios.create({
            baseURL: baseApi,
            withCredentials,
            timeout: 60000 // 请求超时时间
        })
        this.init();
    }
     init() {
        // request 拦截器
        this.service.interceptors.request.use(
            config => {
                // 这里可以自定义一些config 配置

                // loading + 1
                store.dispatch('app/SetLoading', true)

                return config
            },
            error => {
                //  这里处理一些请求出错的情况

                // loading 清 0
                setTimeout(function () {
                    store.dispatch('app/SetLoading', 0)
                }, 300)

                Promise.reject(error)
            }
        )

        // response 拦截器
        this.service.interceptors.response.use(
            response => {
                const res = response.data
                // 这里处理一些response 正常放回时的逻辑

                // 比如， 如果code 非 200 统一提示错误，当然你仍可以更详细的区分
                // if (res.code !== 200) {
                //   Message({
                //     message: res.msg,
                //     type: 'error',
                //     duration: 5000
                //   })
                // }

                // loading - 1
                store.dispatch('app/SetLoading', false)

                return res
            },
            error => {
                // 这里处理一些response 出错时的逻辑

                // loading - 1
                store.dispatch('app/SetLoading', false)

                return Promise.reject(error)
            }
            )
    }
}

