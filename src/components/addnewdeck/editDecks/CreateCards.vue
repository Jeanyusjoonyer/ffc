<template>
     
  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
    <!-- Set front side of the Card -->
    <v-form id="cards" ref="form">
      <v-card class="Vcard" height="100%" raised>
        <v-card-title>Question</v-card-title>
        <v-card-text>
            <!--<input id="questionarea" type="textarea" placeholder="Enter your question">
            -->
            <v-textarea
              id="questionarea"
              ref="questionIn"
              v-model="question"
              form="card"
              placeholder="Enter your question"
            ></v-textarea>
          <!--<p>Question Preview: <br>{{ question }}</p>-->
        </v-card-text>
      </v-card>

      <!-- set answer to Question --> 
      <v-card class="Vcard" height="100%" raised>
        <v-card-title>Answer</v-card-title>
        <v-card-text>
            <v-textarea
              id="answerarea"
              ref="answerIn"
              form="deck"
              v-model="answer"
              placeholder="Enter the answer to your question"
            ></v-textarea>
          <!--<p>Answer Preview: <br>{{ answer }}</p>-->
        </v-card-text>
      </v-card>
    </v-form>
    <v-card class="Vcard" height="100%" raised>
       <v-card-actions class="button-padding">
          <v-spacer></v-spacer>
          <v-btn color="indigo" type="submit" right @click="createDeck(question, answer)">Create Next Card</v-btn>
          <v-btn color="indigo" right @click="$router.push('learn')">Save</v-btn>
        </v-card-actions>
    </v-card>

  </v-col>

</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import { FormTextareaPlugin } from 'bootstrap-vue'
Vue.use(FormTextareaPlugin);
//import router from "@/router"


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
      answer:'',

    }
  }


createDeck(question: string, answer: string){
    console.log("Quesion: \n" + question + "\nAnswer: \n" + answer);
    // TODO: Cleat fields!
    
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
    border-color: lightgray;
    scroll-behavior: smooth;
    width: 96%;
    margin: 1%;
    color: lightgray;
    height: 3em;
  }
   #answerarea{
    width: 96%;
    margin: 1%;
    color: lightgray;
  }

  .Vcard{
    margin-top: 2vh
  }
</style>