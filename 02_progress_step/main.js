const ProgressCircle = {
    template: `<div class="circle">{{ step }}</div>`,
    props: ["step"]
}

const App = {
    components: {
        ProgressCircle,
    },
    template:
        `
    <div class='container'>
        <div class="progress-container" :style="containerStyles">
            <div class="progress-bg"></div>
            <div class="progress" :style="progressBarStyles"></div>
            <ProgressCircle v-for="i in range(numberOfCircles)" 
            :key="i"
            :step="i"
            :class="{'active': i <= activeCircles}"
            />
        </div>

        <button id="prev" 
        @click='handlePrevButtonClick'
        :disabled="prevButtonDisabled"
        :style="prevButtonDisabled ? disabledStyles : activeStyles"
        >
        Prev
        </button>
    
        <button id="next" 
        @click='handleNextButtonClick'
        :disabled="nextButtonDisabled"
        :style="nextButtonDisabled ? disabledStyles : activeStyles"
        >
        Next
        </button>
    </div>
    `,
    data() {
        return {
            numberOfCircles: 8,
            activeCircles: 1,
            disabledStyles: {
                backgroundColor: '#DCDCDC',
            },
            activeStyles: {
                backgroundColor: '#3498db',
            }
        }
    },
    computed: {
        prevButtonDisabled() {
            return this.activeCircles === 1;
        },
        nextButtonDisabled() {
            return this.activeCircles === this.numberOfCircles;
        },
        containerStyles() {
            return {
                width: this.numberOfCircles * 50 + 'px'
            }
        },
        progressBarStyles() {
            return {
                width: (this.activeCircles - 1) / (this.numberOfCircles - 1) * 100 + '%'
            }
        }
    },
    methods: {
        range(num) {
            // 1, 2, 3, ..., num
            // starts from 1
            return [...Array(num).keys()].map((i) => i + 1)
        },
        handlePrevButtonClick() {
            this.activeCircles--;
        },
        handleNextButtonClick() {
            this.activeCircles++;
        },
    }
}

Vue.createApp(App).mount('#app')