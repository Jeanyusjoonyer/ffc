<template>
    <div class="EditNewDeckComponent">
          <EditnewDeckComponent />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import EditnewDeckComponent from "../components/addnewdeck/CreateDeckEditor.vue";


@Component({
  components: {
    EditnewDeckComponent
  }
})
export default class DeckEditor extends Vue {}

</script>

<style scoped>

</style>