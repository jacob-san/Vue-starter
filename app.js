var app = new Vue({
    el: '#app',
    data: {
        name: 'Sandeep Jacob',
        job: 'Ninja'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + " " + this.name
        }
    }
})
// var app2 = ({
//     el: '#app2',
//     data: 'You logged in 3 min ago'

// })
