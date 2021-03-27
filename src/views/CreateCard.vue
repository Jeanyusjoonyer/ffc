<template>
    <div class="CreateCard">
          <CreateCardComponent />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";



import CreateCardComponent from "../components/addnewdeck/editDecks/CreateCards.vue";


@Component({
  components: {
    CreateCardComponent
  }
})
export default class DeckEditor extends Vue {}

</script>

<style scoped>

</style>