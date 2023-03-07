const Box = {
    template: `<div class="box" ref="box">{{ contents }}</div>`,
    props: ["contents", "triggerLine"],
    methods: {
        handleScroll() {
            window.addEventListener('scroll', () => {
                const boxTop = this.$refs.box.getBoundingClientRect().top;
                if (boxTop <= this.triggerLine) {
                    this.$refs.box.classList.add('show');
                } else {
                    this.$refs.box.classList.remove('show');
                }
            })
        }
    },
    mounted() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

const App = {
    components: {
        Box,
    },
    template: `
    <h1 class="title">Scroll to see the annimation</h1>
    <div class="box-container">
        <Box v-for="i in range(boxesNum)" :key="i" contents="Static contents" :trigger-line="triggerLine" />
    </div>
    `,
    data() {
        return {
            boxesNum: 10,
            triggerLine: window.innerHeight * 0.8
        }
    },
    methods: {
        range(num) {
            return [...Array(num)].keys();
        }
    }
}

Vue.createApp(App).mount('#app')