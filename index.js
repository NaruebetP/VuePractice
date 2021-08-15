Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})



var app = new Vue({
    el: '#app',
    data: {
        message: "Welcome to the website!",
        todos: [
            { text: 'Learn Vue', id: 1 },
            { text: 'Eat some foods', id: 2 },
            { text: 'Go exercise', id: 3 }
        ],
    },
    methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
    }
})