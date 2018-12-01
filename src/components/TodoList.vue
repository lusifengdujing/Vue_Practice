<template>
  <ul class="todo-main">
      <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    components: {
        TodoItem
    },
    props:{
        todos:Array
    }
};
</script>

<style>
    .todo-main{
        margin-left:0px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding:0px;
    }
    .todp-empty{
        height: 40px;
        line-height: 40px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding-left:5px;
        margin-top:10px;
    }
</style>
