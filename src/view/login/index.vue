<template>
  <v-layout class="panel" column align-center>
    <background class="bg" />

    <v-flex shrink my-12 py-12 />

    <v-flex shrink style="width:750px">
      <font-board :text="$t('common.title')" duration="4" stroke-width="2" />
    </v-flex>

    <v-card class="mt-5 py-5" elevation="9" width="500">
      <v-card-text>
        <v-text-field
          :label="$t('model.user.account')"
          color="accent"
          outlined
        />

        <v-text-field
          :label="$t('model.user.password')"
          color="accent"
          outlined
        />

        <v-btn @click="signIn" block color="accent">{{
          $t("common.login")
        }}</v-btn>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Background from "./component/Background.vue";
import FontBoard from "@/component/FontBoard.vue";
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({
  components: {
    Background,
    FontBoard
  }
})
export default class Login extends Vue {
  async signIn() {
    this.$i18n.locale = this.$i18n.locale === "en" ? "zh-Hans" : "en";
  }

  created() {
    const locale = navigator.language.substr(0, 2);

    const lang = locale === "zh" ? "zh-Hans" : locale;

    document.documentElement.lang = lang;
    localStorage.lang = lang;
    this.$i18n.locale = lang;
  }
}
</script>

<style lang="scss" scoped>
.panel {
  z-index: 0;
}

.bg {
  position: absolute;
  z-index: -1;
}
</style>
