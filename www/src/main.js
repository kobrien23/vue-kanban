// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.axios = axios.create({
  baseURL: 'https://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

/* eslint-disable no-new */
const store = {
  state: {
    user: {},
    boards: {},
    board: {},

  },
  service: { ///asynch activity
    loginUser: function(email, password) {
       let user= {
        email: email,
        password: password
      }
      axios.post('/login/', user)
    },
    getUser: function(){
      return store.state.user
    },
    getAuth: function(){
      return !!store.state.user._id  // this only returns true or false if htey are logged in
    },
      registerUser: function(email, password) {
       let user= {
        email: email,
        password: password
      }
      axios.post('/register/', user).then(function(res){
        store.state.user={
          
        }
      })
    },


  },
}

new Vue({
  el: '#app',
  router,
  data(){
    return store
  },
  template: '<App/>',
  components: { App }
})
