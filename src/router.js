import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './pages/MainPage.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/exit',
    component: () => import('./pages/ExitPage.vue'),
  },

  {
    path: '/learning',
    component: () => import('./pages/LearningPage.vue'),
  },

  {
    path: '/achievements',
    component: () => import('./pages/AchievementsPage.vue'), 
  },

  {
    path: '/start',
    component: () => import('./pages/StartPage.vue'),
  },

  {
    path: '/notifications',
    component: () => import('./pages/NotificationPage.vue'),
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});