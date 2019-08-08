<template>
  <v-layout>
    <v-flex display-2 pt-5 text-center>{{ title }}</v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NotFound extends Vue {
  title = "404: Not Found Page";
}
</script>
