// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.axios = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

/* eslint-disable no-new */
const store = {
  state: {
    user: {},
    boards: {
"data": [
    {
      "_id": "58ab69a87fcec20524eca621",
      "name": "board4",
      "description": "test board1",
      "__v": 0,
      "created": 1487627974023
    },
    {
      "_id": "58ab6aa77fcec20524eca622",
      "name": "board2",
      "description": "test board2",
      "__v": 0,
      "created": 1487627974023
    }]
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
        debugger
        store.state.user= res.data.data
        debugger
        
      }).catch(function(error){
               router.push('/login/')

        debugger
      })
    },
      registerUser: function(email, password, name) {
       let user= {
        email: email,
        password: password,
        name: name
      } 
      debugger
      axios.post('/register/', user).then(function(res){
        debugger
        store.state.user= res.data.data
        debugger
        
      }).catch(function(error){
        debugger
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
