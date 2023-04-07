const App = {
    template: `
    <div class="container">
        <div class="key" v-if="!isPressed">
            Press any key to get the keyCode
        </div>
        <template v-else>
            <div class="key" v-for="key, i in keyArray" :key="i">
                {{ computedKeyArray[i] }}
                <small>{{ key }}</small>
            </div>
        </template>
    </div>
    `,
    data() {
        return {
            isPressed: false,
            keyArray: ['event.key', 'event.keyCode', 'event.code'],
            computedKeyArray: [],
        }
    },
    methods: {
        updateKeyCode(event) {
            this.isPressed = true;
            this.computedKeyArray = this.keyArray.map((key) => eval(key) == ' ' ? 'Space' : eval(key))
            console.log(this.computedKeyArray)
        }
    },
    mounted() {
        window.addEventListener('keydown', this.updateKeyCode);
    }
}

Vue.createApp(App).mount('#app')