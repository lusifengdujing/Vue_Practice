// 使用LocalStorage存储数据的工具模块
// 向外暴露的1.函数
//          2.对象
const TODOS_KEY='todos_key'
export default{
    saveTodos(todos){
        window.localStorage.setItem("todos_key", JSON.stringify(todos));
    },
    readTodos(){
        return JSON.parse(window.localStorage.getItem("TODOS_KEY") || "[]");
        
    }
}