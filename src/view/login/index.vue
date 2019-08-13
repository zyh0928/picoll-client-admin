<template>
  <v-layout class="panel" column>
    <background class="bg" />

    <v-flex align-self-center mt-12 pt-12 shrink style="width:750px">
      <font-board :text="$t('common.title')" duration="4" stroke-width="2" />
    </v-flex>

    <v-flex white shrink py-5 elevation-9>
      <v-card width="500" class="mx-auto" flat>
        <v-card-text>
          <v-text-field color="accent" label="Account" outlined />

          <v-text-field color="accent" label="Password" outlined />

          <v-btn @click="signIn" color="accent" block>Sign in</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
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
