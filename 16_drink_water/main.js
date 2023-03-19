const App = {
    template: `
    <h1>Drink Water</h1>
    <h3>Goal: {{ goal }} Liters</h3>

    <div class="cup">
        <div class="remained" id="remained" :style="remainedStyle">
            <span id="liters">{{ remainedLiters }}L</span>
            <small>Remained</small>
        </div>
        <div 
        class="percentage" 
        id="percentage"
        :style="percentageStyle">
        {{ drinkedPercentage }}
        </div>
    </div>

    <p class="text">Select how many glasses of water that you have drank</p>

    <div class="cups">
        <div class="cup cup-small" 
        v-for="i in range(numOfCups)" 
        @click="() => hightlightCups(i)"
        :class="i <= this.currentCupIdx ? 'full' : ''"
        >250 ml</div>
    </div>
    `,
    data() {
        return {
            goal: 3, /* liters */
            currentCupIdx: -1
        }
    },
    computed: {
        numOfCups() {
            return this.goal * 4; /* goal (liters) / 0.25 */
        },
        remainedLiters() {
            return this.goal - (this.currentCupIdx + 1) * 0.25;
        },
        remainedStyle() {
            if ((this.currentCupIdx + 1) === this.numOfCups) {
                return {
                    'visibility': 'hidden',
                    'height': '0'
                }
            }
        },
        drinkedPercentage() {
            return ((this.currentCupIdx + 1) / this.numOfCups * 100).toFixed(2) + '%';
        },
        percentageStyle() {
            if (this.currentCupIdx === -1) {
                // 一杯水也没喝 
                return {
                    'visibility': 'hidden',
                    'height': '0'
                }
            } else {
                return {
                    'height': `${(this.currentCupIdx + 1) / this.numOfCups * 350}px`
                }
            }
        }
    },
    methods: {
        range(num) {
            return [...Array(num).keys()];
        },
        hightlightCups(index) {
            // index--当前点击的小杯子的索引

            // 若当前点击的小杯子已经填充，而之后的小杯子没有填充
            // 则取消当前点击的小杯子的颜色

            this.currentCupIdx = index === this.currentCupIdx ? --index : index;
        }
    }
}

Vue.createApp(App).mount('#app')