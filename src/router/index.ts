import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'DeckSelection',
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../views/Learn.vue'),
    props: true,
  },
  {
    path: '/add',
    name: 'Add New Deck',
    component: () => import('../views/AddNewDeck.vue'),
    props: true,
  },
  {
    path: '/thirdparty',
    name: 'Third Party Decks',
    component: () => import('../views/ThirdPartyDecks.vue'),
  },
  {
    path: '/markdown-editor',
    name: 'Create a new Deck',
    component: () => import('../views/CreateDeckEditor.vue'),
  },
  {
    path: '/deck-editor',
    name: 'Create a new Deck',
    component: () => import('../views/CreateDeckEditor.vue'),
  },
  {
    path: '/card-editor',
    name: 'Create a new Card ',
    component: () => import('../views/CardEditor.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
