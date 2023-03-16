const App = {
    template: `
    <div class="container">
        <h3>
            Enter all of the choices divided by a comma (',').
            <br>
            Press enter when you're done.
        </h3>
        <textarea 
        placeholder="Enter choices here..." 
        id="choices-text"
        v-model="choices"
        ref="input"
        @keyup="(e) => handleEnter(e)"
        ></textarea>
        <div class="choices-container">
            <span v-for="choice in splitChoices" class="choice" ref="choiceItem"> {{ choice }} </span>
        </div>
    </div>
    `,
    data() {
        return {
            choices: '',
            times: 10,
            interval: null,
        }
    },
    computed: {
        splitChoices() {
            return this.choices.split(',')
                .filter(choice => choice.trim() != '')
                .map(choice => choice.trim());
        }
    },
    methods: {
        handleEnter(e) {
            if (e.key == 'Enter' && this.choices != '') {
                setTimeout(() => {
                    e.target.value = '';
                }, 10)
                this.highlight();
            }
        },
        highlight() {
            if (this.splitChoices.length == 0) {
                // 如果没有选项，则跳过
                return null;
            }

            let randomNum;
            let i = 1;

            const choiceItems = Array.from(this.$refs.choiceItem);
            // 在setInterval里面访问不到this.$refs.choiceItem
            // 只能deep copy一份

            const interval = setInterval(() => {
                // 先随机选择一个选项，高亮它，50ms后取消高亮，形成闪烁效果
                // 闪烁若干次后，再随机选择一个选项高亮
                randomNum = Math.floor(Math.random() * this.splitChoices.length);
                choiceItems[randomNum].classList.add('highlight');
                setTimeout(() => {
                    choiceItems[randomNum].classList.remove('highlight');
                }, 50);

                i++;
                if (i > this.times) {
                    setTimeout(() => {
                        randomNum = Math.floor(Math.random() * this.splitChoices.length);
                        choiceItems[randomNum].classList.add('highlight');
                    }, 250)
                    clearInterval(interval);
                }

            }, 250)
        }
    },
    mounted() {
        this.$refs.input.focus();
    }
}

Vue.createApp(App).mount('#app')