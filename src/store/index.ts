import State from "./state";
import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";
import mutations from "./mutations";
import vuexRouterInterceptor from "@/plugin/vuex-router-interceptor";

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  getters,
  mutations,
  actions,
  modules,

  plugins: [vuexRouterInterceptor()]
});
