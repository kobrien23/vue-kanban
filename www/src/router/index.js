import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'components/Login'
import Register from 'components/Register'
import Wall from 'components/Wall'
import AddBoard from 'components/AddBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
     {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
         {
      path: '/wall',
      name: 'Wall',
      component: Wall
    },
    {
      path: '/AddBoard',
      name: 'AddBoard',
      component: AddBoard
    },
             {
      path: '*',
      // name: 'Wall',
      Redirect: '/login'
    }
  ]
})
