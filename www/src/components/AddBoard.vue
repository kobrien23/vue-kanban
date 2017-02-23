<template>
  <div class="AddBoard">
    <h1>{{ msg }}</h1>
<form @submit.prevent="addBoard" >
Board Title: <input type="text" v-model="boardTitle" required>
<br>
<button type="submit">add board</button>
</form>

  </div>
</template>

<script>
export default {
  name: 'AddBoard',
  data () {
    return {
      msg: 'Welcome to Your Add Board',
      boardTitle: ''
    }
  },
  mounted: function(){
    // this.$root.$data.service.checkAuth()
},
methods: {
  addBoard: function()
  {
    console.log("Inside of the add board method with: ",this.boardTitle);



}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
