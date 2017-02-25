<template>
  <div class="Wall">
    <h1>{{ msg }}</h1>
    <!--This is where the v-for goes for the boards-->
    <!--This is raw data: {{this.$root.store.state.boards}}-->
    <h4><router-link :to="'/addboard'">Create new board</router-link></h4>

    <h3>All Boards shown here for debugging purposes.</h3>
    <div class="board" v-for="board in this.$root.store.state.boards">
      <router-link :to="'/board/'+board._id">{{board.name}}</router-link>
      <span @click="$root.store.actions.removeBoard(board)">  x</span></li>
    </div>
    <hr>

    <h3>User Id: {{this.$root.store.state.user._id}}</h3>
    <div class="userBoard" v-for="board in this.$root.store.state.userBoards">
      <router-link :to="'/board/'+board._id">{{board.name}}</router-link>
      <span @click="$root.store.actions.removeBoard(board)">  x</span></li>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'wall',
    data() {
      return {
        msg: 'Welcome to The wall'
      }
    },
    mounted: function () {
      // this.$root.$data.store.actions.checkAuth()
      this.$root.$data.store.actions.getBoards()
      this.$root.$data.store.actions.getUserBoards(this.$root.store.state.user._id)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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
  
  .board {
    border: 1px solid black;
  }
</style>