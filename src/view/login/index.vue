<template>
  <v-layout column primary>
    <v-flex align-self-center display-1 mb-5 mt-12 pt-12 shrink white--text>
      Picture Collection Admin Zone
    </v-flex>

    <v-flex white shrink py-5>
      <v-card width="500" class="mx-auto" flat>
        <v-card-text>
          <v-text-field color="accent" label="Account" outlined />

          <v-text-field color="accent" label="Password" outlined />

          <v-btn color="accent" block>Sign in</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Login extends Vue {}
</script>
