<template>
  <v-layout class="panel" column align-center>
    <background class="bg" />

    <v-flex shrink my-12 py-12 />

    <v-flex shrink style="width:750px">
      <font-board :text="$t('common.title')" duration="4" stroke-width="2" />
    </v-flex>

    <v-card class="mt-5 py-5" elevation="9" width="500">
      <v-card-text @keyup.stop.enter.exact="signIn">
        <v-text-field
          :error-messages="errors.collect('user.account')"
          :label="$t('model.user.account')"
          color="accent"
          counter
          data-vv-name="user.account"
          maxlength="16"
          outlined
          v-model="info.account"
          v-validate="'required'"
        />

        <v-text-field
          :append-icon="eye ? 'mdi-eye-off' : 'mdi-eye'"
          :error-messages="errors.collect('user.password')"
          :label="$t('model.user.password')"
          :type="eye ? 'text' : 'password'"
          @click:append="eye = !eye"
          color="accent"
          counter
          data-vv-name="user.password"
          maxlength="20"
          outlined
          v-model="info.password"
          v-validate="'required'"
        />

        <v-btn :loading="signLoading" @click="signIn" block color="accent">{{
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
  info = {};

  eye = !1;

  signLoading = !1;

  async signIn(): Promise<void> {
    if (this.signLoading) return;

    const flagAccount = await this.$validator.validate("user.account");
    const flagPassword = await this.$validator.validate("user.password");
    const valid = flagAccount && flagPassword;
    if (!valid) return;

    this.signLoading = !0;
    await this.$store.dispatch("user/login", this.info).catch(e => {
      this.signLoading = !1;
      throw e;
    });

    this.signLoading = !1;
  }

  created(): void {
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
