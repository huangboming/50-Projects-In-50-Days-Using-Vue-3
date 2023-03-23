const App = {
    template: `
    <div class="container" ref="container">
        <button type="button" @click="(e) => ripple(e)">
            Click me
        </button>
        <div class="ripple" v-if="isClicked" :style="rippleStyle"></div>
    </div>
    `,
    data() {
        return {
            isClicked: false,
            mouseX: null,
            mouseY: null,
        }
    },
    computed: {
        rippleStyle() {
            return {
                top: `${this.mouseY - this.$refs.container.offsetTop}px`,
                left: `${this.mouseX - this.$refs.container.offsetLeft}px`,
            }
        }
    },
    methods: {
        ripple(e) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.isClicked = true;
            setTimeout(() => this.isClicked = false, 500);
        }
    }
}

Vue.createApp(App).mount('#app')