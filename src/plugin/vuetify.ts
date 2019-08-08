/// <reference types="vuetify" />
// Customization
import "@/style/app.scss";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const theme = {
  primary: "#ab3b3a", // 真朱
  secondary: "#bdc0ba", // 白鼠
  accent: "#005caf", // 瑠璃
  error: "#cb4042", // 赤紅
  info: "#58b2dc", // 空
  success: "#00896c", // 青竹
  warning: "#ffb11b" // 山吹
};

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    options: {
      customProperties: !0
    },
    themes: {
      dark: theme,
      light: theme
    }
  }
});
