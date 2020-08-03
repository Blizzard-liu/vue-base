import axios from "axios";
import qs from "qs";
import store from "@/store";
import { Message } from "element-ui";

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
//自定义routeChangeNoCancel  默认把请求视为切换路由就会把pending状态的请求取消，true为不取消(一般页面请求设置为false,全局请求设置为true)
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = config => {
  const url = [
    config.method,
    config.url,
  ].join("&");
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, {
          cancel,
          routeChangeNoCancel: config.routeChangeNoCancel
        });
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = config => {
  const url = [
    config.method,
    config.url,
  ].join("&");
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url).cancel;
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 * @param {Object} config
 */
export const clearPending = () => {
  for (const [url, { cancel, routeChangeNoCancel }] of pending) {
    if (!routeChangeNoCancel) {
      cancel(url);
      pending.delete(url);
    }
  }
  // pending.clear()
};

export default class Http {
  service;
  constructor(baseApi, withCredentials = true) {
    // 创建axios 实例
    this.service = axios.create({
      baseURL: baseApi,
      withCredentials,
      timeout: 60000 // 请求超时时间
    });

    this.init();
  }
  init() {
    // request 拦截器
    this.service.interceptors.request.use(
      config => {
        // loading + 1
        store.dispatch("app/SetLoading", true);
        removePending(config); // 在请求开始前，对之前的请求做检查取消操作
        addPending(config);
        return config;
      },
      error => {
        // loading 清 0
        setTimeout(function() {
          store.dispatch("app/SetLoading", 0);
        }, 300);

        Promise.reject(error);
      }
    );

    // response 拦截器
    this.service.interceptors.response.use(
      response => {
        removePending(response.config); // 在请求结束后，移除本次请求
        const res = response.data;

        // loading - 1
        store.dispatch("app/SetLoading", false);

        return res;
      },
      error => {
        const response = error.response;
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        if (response) {
          removePending(response.config); // 在请求结束后，移除本次请求
        }

        // loading - 1
        store.dispatch("app/SetLoading", false);
        if (axios.isCancel(error)) {
          console.log("repeated request >>>: " + error.message);
          return new Promise(() => {}); // eslint-disable-line
        }

        return Promise.reject(error);
      }
    );
  }
}
