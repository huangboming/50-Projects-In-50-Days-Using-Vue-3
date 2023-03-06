function scale(x, a, b, c, d) {
    // 将区间[a, b]中的x映射到区间[c, d]中, 公式: x => (d - c) / (b - a) * (x - a) + c
    return (d - c) / (b - a) * (x - a) + c
}

const App = {
    template: `
    <div class="bg" :style="bgLoadingStyles"></div>
    <div class="loading-text" :style="textLoadingStyles">{{ progress + '%' }}</div>
    `,
    data() {
        return {
            progress: 0
        }
    },
    computed: {
        bgLoadingStyles() {
            return {
                'filter': `blur(${scale(this.progress, 0, 100, 20, 0)}px)`
            }
        },
        textLoadingStyles() {
            return {
                'opacity': `${scale(this.progress, 0, 100, 1, 0)}`
            }
        }
    },
    mounted() {
        load = setInterval(() => {
            if (this.progress <= 100) {
                this.progress++;
            } else {
                clearInterval(load);
            }
        }, 50)
    }
}

Vue.createApp(App).mount('#app')