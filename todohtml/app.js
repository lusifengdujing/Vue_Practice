var app = new Vue({
    el: '#app',
    data: {
        todos: [{ "title": "吃饭" }, { "title": "睡觉" }, { "title": "coding" }]
    },
    methods: {
        addTodo(todo) {
            this.todos.unshift(todo);
        }
    }
});