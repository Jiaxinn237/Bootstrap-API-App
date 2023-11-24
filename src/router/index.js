// main.js
import { createApp } from 'vue'
import App from '../App.vue'
import HomePage from '../components/HomePage.vue'
import DeleteMethod from '../components/DeleteMethod.vue'
import GetMethod from '../components/GetMethod.vue'
import PostMethod from '../components/PostMethod.vue'
import PutMethod from '../components/PutMethod.vue'
import ListAllMethod from '../components/ListAllMethod.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomePage },
  { path: '/deletemethod', component: DeleteMethod },
  { path: '/getmethod', component: GetMethod },
  { path: '/postmethod', component: PostMethod },
  { path: '/putmethod', component: PutMethod },
  { path: '/listallmethod', component: ListAllMethod },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;