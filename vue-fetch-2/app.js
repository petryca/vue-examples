// USING VUE WITH FETCH METHOD 2

// Error handler
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


// VUE STARTS HERE
Vue.createApp({

    // set up data
    data() {
        return {
            users: []
        }
    },

    methods: {
        runFetch() {

            // test URLs and settings
            let url = 'https://jsonplaceholder.typicode.com/users/';
            let errorurl = 'http://httpstat.us/500';
            let settings = {
                method: 'GET',
                // credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
            };

            // call fetch API
            fetch(url, settings)
            .then(handleErrors)
            .then(response => response.json())
            .then(data => this.users = data)
            .catch(error => alert(error));

        }
    }


}).mount('#app');

/*
NOTE:
The arrow function that looks like this:

response => response.json()

is equivalent to writing this:

function (response) {
  return response.json();
}
*/
