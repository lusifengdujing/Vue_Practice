 // 头组件
 Vue.component('todo-header', {
    template: '\
    <div class="todo-header">\
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem">\
    </div>',
                
    props:{
        todos:Array
    },
    data: function () {
        return {
            title: ''
        }
    },
    methods: {
        addItem: function () {
            // 1.检查输入的合法性
            const title = this.title.trim();
            if (!title) {
                alert('必须输入内容！');
            }
            // 2.根据输入生成一个todo对象
            const todo = {title};                                         
            // 3.添加到todos
            this.todos.unshift(todo);
            // 4.清除输入
            this.title="";
        }
    }


});


// List组件
Vue.component('todo-list', {
    template: '\
    <ul class="todo-main">\
        <li v-for="todo in todos">\
            <label>\
                <input type="checkbox">\
                <span>{{todo.title}}</span>\
            </label>\
        </li>\
    </ul>',
    props: {
        todos: Array
    }
});

