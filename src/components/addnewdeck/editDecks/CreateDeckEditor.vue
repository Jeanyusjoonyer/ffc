<template>
     
  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
    <!-- Set name of Deck in a Card. -->
    <v-card class="Vcard" height="100%" raised>
      <v-card-title>Create a Deck</v-card-title>
      <v-card-text>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter Deck Name"
          ></b-form-textarea>
         <pre class="mt-3 mb-0">Name of Deck: <br>{{ text }}</pre> 
      </v-card-text>
      <v-card-actions class="button-padding">
        <v-spacer></v-spacer>
        <v-btn color="indigo" right @click="$router.push('card-editor')">Continue</v-btn>
      </v-card-actions>
    </v-card>

  </v-col>

    

</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import { FormTextareaPlugin } from 'bootstrap-vue'
Vue.use(FormTextareaPlugin)

import MarkdownEditor from "./MarkdownEditor.vue"

@Component({
    components:{
        MarkdownEditor
    }
})
export default class DeckEditor extends Vue {
  data(){
    return{
      text:'',
    }
  }
}


</script>

<style scoped>
  #textarea{
    width: 96%;
    margin: 1%;
    color: lightgray;
  }
  #questionarea{
    width: 96%;
    margin: 1%;
    color: lightgray;
  }

  .Vcard{
    margin-top: 2vh
  }
</style>