import Cookies from "js-cookie";
import api from "@/api";

const state = {
  size: Cookies.get("size") || "medium",
  requestLoading: 0,

};

const mutations = {
  SET_LOADING: (state, status) => {
    // error 的时候直接重置
    if (status === 0) {
      state.requestLoading = 0;
      return;
    }
    state.requestLoading = status
      ? ++state.requestLoading
      : --state.requestLoading;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
    Cookies.set("size", size);
  },

};

const actions = {
  SetLoading({ commit }, status) {
    commit("SET_LOADING", status);
  },
  setSize({ commit }, size) {
    commit("SET_SIZE", size);
  },

};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
