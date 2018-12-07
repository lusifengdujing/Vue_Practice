<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo" />
      <!--TodoHeader标签对象绑定addTodo事件-->
      <TodoList
        :todos="todos"
        :deleteTodo="deleteTodo"
      />
      <!-- <todo-footer :todos="todos"  :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/> -->
      <todo-footer>
        <input
          type="checkbox"
          v-model="isAllCheck"
          slot="checkAll"
        >
        <span slot="count">已完成{{completeSize}}/全部{{todos.length}}</span>
        <button
          slot="delete"
          class="btn btn-danger"
          v-show="completeSize>0"
          @click="deleteCompleteTodos()"
        >清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import storageUtil from "./util/StorageUtil.js";
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      // 从LocalStorage读取todos
      todos:storageUtil.readTodos()
    };
  },
  computed: {
    isAllCheck: {
      get() {
        return this.completeSize === this.todos.length && this.completeSize > 0;
      },
      set(value) {
        //value是当前checkbox最新的值
        this.selectAllTodos(value);
      }
    },
    completeSize() {
      const { todos } = this;
      return todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0);
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    //删除所有选中的todo
    deleteCompleteTodos() {
      this.todos = this.todos.filter(todo => !todo.complete);
    },
    // 全选或全不选
    selectAllTodos(check) {
      this.todos.forEach(todo => (todo.complete = check));
    }
  },
  watch: {
    //监视
    todos: {
      deep: true, //深度监视
      // handler: function(newValue) {
      //   // 将todos最新的值的json数据，保存到LocalStorage
      // storageUtil.saveTodos(newValue);
      // }
      handler:storageUtil.saveTodos
    }
  }
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
