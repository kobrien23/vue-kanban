<template>
  <div> 
    <h1>You are in the individual board component</h1>
    <h3>Active Board: {{this.$root.store.state.activeBoard.name}}<h3>
  </div>
</template>

<script>
export default {
  name: 'board',
  mounted(){
    this.$root.store.actions.getBoard(this.$route.params.id)
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