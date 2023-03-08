const Split = {
    template: `
        <div class="split" 
        :class="position" 
        :style="bgImgStyle"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="split"
        >
            <h1>{{ title }}</h1>
            <a href="#" class="btn">BUY NOW</a>
        </div>
    `,
    props: ['position', "title", "imgUrl"],
    computed: {
        bgImgStyle() {
            return {
                backgroundImage: `url('${this.imgUrl}')`
            }
        }
    },
    methods: {
        handleMouseEnter() {
            this.$refs.split.parentNode.classList.add(`hover-${this.position}`)
        },
        handleMouseLeave() {
            this.$refs.split.parentNode.classList.remove(`hover-${this.position}`)
        }
    }
}

const App = {
    components: {
        Split,
    },
    template: `
    <div class="container">
        <Split 
        position="left" 
        title="Playstation 5" 
        imgUrl="images/ps.jpg" />

        <Split 
        position="right" 
        title="XBox Series X" 
        imgUrl="images/xbox.jpg" />
    </div>
    `,
    data() {
        return {

        }
    }
}

Vue.createApp(App).mount('#app')