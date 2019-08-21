import App from "./App.vue";
import Vue from "vue";
import i18n from "./i18n";
import router from "./routes";
import store from "./store";
import vuetify from "./plugin/vuetify";

Vue.config.errorHandler = (e, vm) => {
  // eslint-disable-next-line no-console
  console.log("Vue Caught global error:\n\n", e.stack || e);
};

Vue.config.productionTip = !1;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
