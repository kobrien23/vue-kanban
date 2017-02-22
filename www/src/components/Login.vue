<template>

<div class="login-container">
Hello

<form @submit.prevent="login" >
email: <input type="email" v-model="email" required>
password: <input type="password" v-model="password" required><br>
<button type="submit">submit login</button>
{{email}}




</form>



</div>


    
</template>


<script>
export default {
      name: 'login',
  data () {
    return {
      email: '',
      password: ''

    }
  },
  methods: {
      login: function(){
        debugger
          this.$root.$data.actions.loginUser(this.email, this.password)
      }
  }
}






</script>