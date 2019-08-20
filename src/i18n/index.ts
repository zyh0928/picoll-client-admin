import VeeValidate from "vee-validate";
import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en";
import enValidation from "./en/validation";
import zhHans from "./zh-Hans";
import zhHansValidation from "./zh-Hans/validation";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh-Hans",
  fallbackLocale: "zh-Hans",
  // silentTranslationWarn: !0,
  messages: {
    "zh-Hans": zhHans,
    en
  }
});

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: "validations",
  dictionary: {
    "zh-Hans": {
      attributes: zhHans.model,
      messages: zhHansValidation
    },
    en: {
      attributes: en.model,
      messages: enValidation
    }
  }
});

export default i18n;
