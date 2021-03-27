<template>
     
  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
    <!-- Set front side of the Card -->
      <v-card class="Vcard" height="100%" raised>
        <v-card-title>Question</v-card-title>
        <v-card-text>
            <b-form-textarea
              id="questionarea"
              v-model="question"
              placeholder="Enter the front side of your Card"
            ></b-form-textarea>
          <p>Question Preview: <br>{{ question }}</p>
        </v-card-text>
      </v-card>

      <!-- set answer to Question --> 
      <v-card class="Vcard" height="100%" raised>
        <v-card-title>Answer</v-card-title>
        <v-card-text>
            <b-form-textarea
              id="questionarea"
              v-model="question"
              placeholder="Enter the front side of your Card"
            ></b-form-textarea>
          <p>Answer Preview: <br>{{ question }}</p>
        </v-card-text>
      </v-card>

    <v-card class="Vcard" height="100%" raised>
       <v-card-actions class="button-padding">
          <v-spacer></v-spacer>
          <v-btn color="indigo" right @click="$router.push('create-card')">Create Next Card</v-btn>
          <v-btn color="indigo" right @click="$router.push('learn')">Save & Done</v-btn>
        </v-card-actions>
    </v-card>

  </v-col>

</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import { FormTextareaPlugin } from 'bootstrap-vue'
Vue.use(FormTextareaPlugin)

@Component({
    components:{
        
    }
})

export default class CardEditor extends Vue {
    /*Script für Create Cards muss folgende Funktionen haben:
    - Question + Answer aus Textfeld in JSON Format speichern
    - Counter für anzahl Karten
    - Zurück button bei 2ter Karte bzw Zurück butten
    {
    "meta": {
      "author": "",
      "version": "",
      "uuid": ""
    },
    "decks": {
      "d1": {
        "meta": {
          "deck_name": "",
          "next_card_id": 1,
          "description": ""
        },
        "cards": {
          "0": {
            "q": "?",
            "a": ""
          }
        }
      }
    }
*/

data(){
    return{
      question:'',
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