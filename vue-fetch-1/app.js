// USING VUE WITH FETCH METHOD 1

// VUE STARTS HERE
Vue.createApp({

    // set up data
    data() {
        return {
            users: []
        }
    },

    methods: {
        async runFetch() {

            // test URLs and settings
            let url = 'https://jsonplaceholder.typicode.com/users/';
            let errorurl = 'https://httpstat.us/400';
            let settings = {
                method: 'GET',
                // credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
            };


            try {

                let response = await fetch(errorurl, settings);

                if (response.ok) {
                    this.users = await response.json();
                } else {
                    alert('RESPONSE: ' + response.status);
                }

            } catch (e) {
                alert(e);
            }

        }
    }


}).mount('#app');
