// VUE STARTS HERE
Vue.createApp({

    // set up data
    data() {
        return {
            users: []
        }
    },

    methods: {
        add() {
            this.users.push({firstname:'',lastname:''});
        },
        remove() {
            this.users.pop();
        },
        deleterow(index) {
            this.users.splice(index, 1);
        }
    }


}).mount('#app');
