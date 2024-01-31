const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoText: ``,
            todoList: [
                {
                text: `vai al supermercato`,
                done: true,
                },
                {
                text: `fai la spesa`,
                done: false,
                },
                {
                text: `vai a scuola`,
                done: true,
                },
                
            ]
        }
    }, created (){

    },
    methods: {
        removeTodo(index){
            this.todoList.splice(index, 1)
        },
        addTodo(){
            this.todoList.push({text:this.newTodoText, done: false})
            this.newTodoText = ""
        }
        }
}).mount('#app')