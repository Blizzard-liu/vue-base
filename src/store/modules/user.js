// import { getToken, setToken, removeToken } from '@/utils/auth'
import api from "@/api";

const state = {
  token: false,
  userState: {},
  userId:''
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },

  SET_USER_ID: (state, id) => {
    state.userId = id;
  },
  SET_USER_STATE: (state, userstate) => {
    state.userState = userstate;
  }
};

const actions = {
  // 登录
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      api
        .login(userInfo)
        .then(res => {
          if (res.status === "SUCCESS") {
            localStorage.setItem('USER_ID',res.data)
            commit("SET_USER_ID", res.data);
            resolve(true);
            return;
          }
          resolve(false);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  LogOut({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .logOut()
        .then(res => {
          if (res.status === "SUCCESS") {
            commit("SET_TOKEN", false);
            commit("SET_USER_STATE", {});
            commit("SET_USER_ID", '');
            sessionStorage.setItem("store", null);
            localStorage.removeItem('USER_ID')
            resolve(true);
            return;
          }
          resolve(false);
        })
        .catch(err => {
          reject(err);
        });
    });
  },



    // 个人信息 
    userState({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .userState()
          .then(res => {
            if (res) {
              let userState = res;
              commit("SET_TOKEN", true);
              commit("SET_USER_STATE", JSON.parse(userState));
              
              sessionStorage.setItem('user',userState);
              resolve(true);
              return;
            }
            commit("SET_TOKEN", false);
            commit("SET_USER_STATE", {});
            commit("SET_USER_ID", '');
            sessionStorage.removeItem('user');
            localStorage.removeItem('USER_ID')
            resolve(false);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
