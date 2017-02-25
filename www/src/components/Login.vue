<template>
  <div class="login-container">
    <img src="./../assets/logo.png"> Hello
    <form @submit.prevent="login">
      email: <input type="email" v-model="email" required> password: <input type="password" v-model="password" required>
      <br>
      <button type="submit">submit login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        console.log("in login user in the Vue component.")
        this.$root.$data.store.actions.loginUser(this.email, this.password)
      }
    }
  }
</script>