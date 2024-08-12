import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "../stores/user"
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/AboutView.vue')
    // },
    {
      path: '/Contackt',
      component: () => import("../components/Contackt.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "/portfolio",
      component: () => import("../components/Portfolio.vue"),
      // страница для тех кто только зарегестрирован
      meta: {
        auth: true
      }
    },
    {
      path: "/blog",
      component: () => import("../components/blog.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "/project",
      component: () => import("../components/MyProject.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "/Promise",
      component: () => import("../components/test.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "/TestTwo",
      component: () => import("../components/TestTwo.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "/SignIn",
      component: () => import("../views/SignIn.vue"),
      meta: {
        auth: false
      }
    },
    {
      path: "/HomeView",
      component: () => import("../views/HomeView.vue"),
      // страница для тех кто не зарегестрирован
      meta: {
        auth: false
      }
    },
    

  ]
})
// основное место - выклчаем отоброжение роута без входа в аккаунт
// to - роут на который мы переходим
// from - откуда мы перешли 
// next - означает что мы можем отправить пользователя по роутер линк 
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.auth && !authStore.userInfo.token) {
    next('/HomeView')
  } else if (!to.meta.auth && authStore.userInfo.token) {
    next('/portfolio')
  } else {    
    next()
  }
  
});

export default router
