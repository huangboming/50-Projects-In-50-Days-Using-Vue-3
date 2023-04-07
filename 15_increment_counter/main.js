const Counter = {
    props: ["faClass", "dataTarget", "smallTitle"],
    template: `
        <div class="counter-container">
            <i class="fab" :class="faClass"></i>
            <h2 class="counter"> {{ current }}</h2>
            <h4>{{ smallTitle }}</h4>
        </div>
    `,
    data() {
        return {
            current: 0
        }
    },
    computed: {
        increment() {
            return this.dataTarget / 100;
        }
    },
    mounted() {
        const interval = setInterval(() => {
            if (this.current >= this.dataTarget) {
                this.current = this.dataTarget;
                clearInterval(interval);
            } else {
                this.current = Math.floor(this.current + this.increment);
            }
        }, 10)
    }
}

const App = {
    components: {
        Counter
    },
    template: `
    <div class="container">
        <Counter 
        v-for="faClass, i in platformFaClass"
        :key="i"
        :fa-class="faClass"
        :data-target="dataTargets[i]"
        :small-title="smallTitles[i]"
        />
    </div>
    `,
    data() {
        return {
            platformFaClass: Seed.platformFaClass,
            dataTargets: Seed.dataTargets,
            smallTitles: Seed.smallTitles,
        }
    }
}

Vue.createApp(App).mount('#app')
