import request from '@/utils/request1'
import request2 from '@/utils/request2'
import store from '@/store';
import Qs from 'qs';


const headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;",
  // "Content-Type": "application/json;charset=utf-8;",
  // "Content-Type": "multipart/form-data;charset=utf-8;",
};
const formHeaders = {
  "Content-Type": "multipart/form-data;charset=utf-8;",
};
const transformRequest = [
  function(data) {
    //Qs.stringify(data,{ indices: false }
    return Qs.stringify(data);
  },
];

export default {
    // 登录
    login ({username,password}) {
      return request({
        url: '/api/datas',
        method: 'post',
        data:{username,password},
        transformRequest,
        // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: false, 
      })
    },
    // 
    logOut ({userId=store.getters.userId} = {}) {
      return request({
        url: '/api/datas/websiteLogoutJson.do',
        method: 'post',
        data: {userId},
        transformRequest
      })
    },
    // 注册
    register ({json}) {
      return request({
        url: '/api/datas',
        method: 'post',
        data:{json},
        transformRequest
      })
    },
   
     //个人信息 根据用户id获取用户信息
     userState ({userId=store.getters.userId} = {}) {
       this.logOut()
      return request({
        url: '/api/datas/website/WebsiteGetUserInfoJson.do',
        method: 'post',
        data: {userId},
        transformRequest,
        routeChangeNoCancel:true
      })
    },

    lottie () {
      return request2({
        url: '/packages/lf20_3vbOcw.json',
        method: 'get',
      })
    },



}
