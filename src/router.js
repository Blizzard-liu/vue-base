import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

let router = new Router({
  routes: [
    
    {
      path: '/',
      component: () => import('@views/Main.vue'),
      children: MainRouter()
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@views/Register.vue')
    },
   
    
    { path: '*', redirect: '/' }
  ]

});

function MainRouter() {
    return [
      {
        path: '/',
        name: 'Home',
        component: () => import('@views/Home.vue')
      },
     
    ];
}

export default router;
