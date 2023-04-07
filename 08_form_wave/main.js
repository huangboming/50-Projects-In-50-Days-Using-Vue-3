const Wave = {
    template: `
        <label :for="contents">
            <span v-for="char, i in contents" :key="i" :style="{'transitionDelay': i * 50 + 'ms'}">
                {{ char }}
            </span>
        </label >
    `,
    props: ['contents',]
}

const App = {
    components: {
        Wave,
    },
    template: `
    <div class="container">
        <h1>Please Login</h1>
        <form action="" @submit.prevent="handleSubmit">
            <div class="form-control">
                <input type="text" v-model="email" required>
                <Wave contents="Email" />
            </div>
            <div class="form-control">
                <input type="password" v-model="password" required>
                <Wave contents="Password" />
            </div>
            <button class="btn">Login</button>
            <p>Don't have an account? <a href="#">Register</a></p>
        </form>
    </div>
    `,
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        handleSubmit() {
            const msg = `Your mail is ${this.email}\nYour password is ${this.password}`;
            // console.log(this.email)
            // console.log(this.password)
            alert(msg)
        }
    }
}

Vue.createApp(App).mount('#app')