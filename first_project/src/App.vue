<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todoItem v-for="todo,index in todos" v-bind:key="index" :todo="todo"/>
  </div>
</template>

<script>
import todoItem from './components/todo-item.vue'

export default {
  name: 'App',
  components: {
    todoItem
  },
  data:function(){
   return{ 
     todos:[
      {
        "text":"watch movie"
      },
      {
        "text":"programming"
      }
    ]
  }}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
