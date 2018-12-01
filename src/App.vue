<template>
  <div class="todo-container">
    <div class="todo-wrap">      
      <div class="todo-wrap">
      </div>
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <todo-footer/> 
    </div>

  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data (){
      return{
        todos:[
          {title:'吃饭',complete:false},
          {title:'coding',complete:true},
          {title:'睡觉',complete:false}
        ]
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      }
    }
  }
</script>

<style>
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todp-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
