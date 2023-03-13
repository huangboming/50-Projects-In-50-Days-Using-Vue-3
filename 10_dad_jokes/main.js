const App = {
    template: `
    <div class="container">
        <h3>Don't Laugh Challenge</h3>
        <div id="joke" class="joke">
            {{ joke }}
        </div>
        <button class="btn" @click="getJoke">Get Another Joke</button>
    </div>
    `,
    data() {
        return {
            joke: ''
        }
    },
    methods: {
        // use Promise
        // getJoke() {
        //     // third party API: https://icanhazdadjoke.com/api
        //     const config = {
        //         headers: {
        //             Accept: 'application/json'
        //         }
        //     }
        //     const fetchPromise = fetch("https://icanhazdadjoke.com", config);
        //     fetchPromise
        //         .then((response) => response.json())
        //         .then((data) => {
        //             this.joke = data.joke;
        //         })
        //         .catch((error) => {
        //             this.joke = `${error}`
        //         })
        // }

        // use async/await
        async getJoke() {
            const config = {
                headers: {
                    Accept: 'application/json'
                }
            }
            try {   
                const response = await fetch("https://icanhazdadjoke.com", config);
                const data = await response.json();
                this.joke = data.joke;
            } catch(error) {
                this.joke = `${error}`
            }
        }
    },
    mounted() {
        this.getJoke();
    }

}

Vue.createApp(App).mount('#app')