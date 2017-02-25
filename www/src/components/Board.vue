<template>
  <div> 
    <h1>You are in the individual board component</h1>
    <h3>Active Board: {{this.$root.store.state.activeBoard.name}}<h3>
  <form @submit.prevent="createList">
    List 
    <input v-model="name">
  </form>
    <h3> All lists </h3>
    <!--{{this.$root.store.state.activeLists}}-->
    <hr>
    <div v-for="list in this.$root.store.state.activeLists">{{list.name}}</div>
    <!--<div v-for="list in this.$root.store.state.activeLists" > {{activeList.name}}  {{activeList.boardId}} </div>-->
<hr>
<div> </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  data(){
    return {
      name:''
    }
  },
  methods:{
    createList(){
        let newList={
          name: this.name,
          boardId: this.$route.params.id
          }
      this.$root.store.actions.createList(this.$route.params.id, newList)
      console.log('is anyone here?')
      this.name=''
    }
  },
  mounted(){
    this.$root.store.actions.getBoard(this.$route.params.id)
    this.$root.store.actions.loadCurrentList(this.$route.params.id)
    
  },
  computed:{
    board(){
      return this.$root.store.state.activeBoard
    }
  }
}
</script>

<style scoped>
</style>