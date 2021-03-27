<template>
  <v-col cols="12" sm="12" md="6" lg="4" xl="4">
    <v-card height="100%" raised>
      <v-card-title>Deck Creator</v-card-title>
      <v-card-text>
        <v-btn color="indigo" right @click="$router.push('deck-editor')">Create Deck</v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DeckCreator extends Vue {
}

</script>

<style scoped>
</style>
