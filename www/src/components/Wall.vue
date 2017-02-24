<template>
  <div class="Wall">
    <h1>{{ msg }}</h1>
        <!--<h1>User Object: {{this.$root.store.state.user}}</h1>-->
        <!--This is where the v-for goes for the boards-->
        <!--This is raw data: {{this.$root.store.state.boards}}-->
        <h4>Todo: Need to add button to create board here.</h4>
        <div class="board" v-for="board in this.$root.store.state.boards"><router-link :to="'boards/'+board._id">{{board.name}}</router-link></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wall',
  data () {
    return {
      msg: 'Welcome to The wall'
    }
  },
  mounted: function(){
    // this.$root.$data.service.checkAuth()
    this.$root.$data.store.actions.getBoards()

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

.board {border: 1px solid black;}
</style>
