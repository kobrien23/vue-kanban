// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

window.axios = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  withCredentials:true
});

/* eslint-disable no-new */


const store_old = {
  state: {
    user: {},   
    boards: {
    },
    board: {},

  },
  service: { ///asynch activity
    loginUser: function(email, password) {
       let user= {
        email: email,
        password: password
      }
      axios.post('/login/', user)
      .then(function(res){
        store.state.user=res.data.data
      }).catch(function(error){
        console.error(error)
      })
    },
    getUser: function(){
      return store.state.user
    },
    checkAuth: function(){
     if (!!store.state.user._id){
       return true
     } else {
       router.push('/login/')
       return false
     }
      // this only returns true or false if htey are logged in
    },
    initAuth: function(){
      axios.get('/authenticate').then(function(res){
        console.log(res)
        
        store.state.user= res.data.data
        
        
      }).catch(function(error){
               router.push('/login/')

        
      })
    },
      registerUser: function(email, password, name) {
       let user= {
        email: email,
        password: password,
        name: name
      } 
      
      axios.post('/register/', user).then(function(res){
        
        store.state.user= res.data.data
        
        
      }).catch(function(error){
        
        console.log(error)
      })
    },
    initBoards: function(){
      axios.get('/boards').then(function(res){
        store.state.boards=res.data.data
      }).catch(function(error){
        console.log(error)
      })
    }

  },
}

new Vue({
  el: '#app', 
  router,
  data: {store},
  template: '<App/>',
  components: { App }
})
 