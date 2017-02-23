<template>

<div class="register-container">
Hello

<form @submit.prevent="register" >
email: <input type="email" v-model="email" required>
password: <input type="password" v-model="password" required>
name: <input type="text" v-model="name" required><br>
<button type="submit">submit register</button>
{{email}}




</form>



</div>


    
</template>


<script>
export default {
      name: 'register',
  data () {
    return {
      email: '',
      password: '',
      name: ''

    }
  },
  methods: {
      register: function(){
        debugger
          this.$root.$data.service.registerUser(this.email, this.password, this.name)
      }
  }
}






</script>