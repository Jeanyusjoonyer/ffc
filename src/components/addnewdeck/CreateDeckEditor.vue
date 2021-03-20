<template>
  <MarkdownEditor/>
</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";

import MarkdownEditor from "./MarkdownEditor.vue"

@Component({
    components:{
        MarkdownEditor
    }
})
export default class DeckEditor extends Vue {
}


</script>

<style scoped>

</style>