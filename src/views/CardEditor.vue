<template>
    <div class="CardEditor">
          <CardEditorComponent />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";



import CardEditorComponent from "../components/addnewdeck/editDecks/CreateCards.vue";


@Component({
  components: {
    CardEditorComponent
  }
})
export default class CardEditor extends Vue {}

</script>

<style scoped>

</style>