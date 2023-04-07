const Slide = {
    props: ["isActive", "bgUrl"],
    template: `
    <div 
      class="slide"
      :class="isActive ? 'active' : ''"
      :style="{ 'background-image': 'url(' + bgUrl +')' }">
    </div>
    `
}

const App = {
    components: {
        Slide,
    },
    template: `
    <div class="slider-container">
        <Slide 
        v-for="imgUrl, i in imgUrls"
        :key="i"
        :is-active="activeImgIdx === i" 
        :bgUrl="imgUrl" />
    
        <button class="arrow left-arrow" id="left" @click="decrease">
            <i class="fas fa-arrow-left"></i>
        </button>

        <button class="arrow right-arrow" id="right" @click="increase">
            <i class="fas fa-arrow-right"></i>
        </button>
    </div>
    `,
    data() {
        return {
            imgUrls: Seed.imgUrls,
            activeImgIdx: 0
        }
    },
    methods: {
        setBodyBg() {
            document.body.style.backgroundImage =  `url(${this.imgUrls[this.activeImgIdx]})`;
        },
        decrease() {
            if (this.activeImgIdx > 0) {
                this.activeImgIdx--;
            } else {
                this.activeImgIdx = this.imgUrls.length - 1;
            }
            this.setBodyBg();
        },
        increase() {
            if (this.activeImgIdx < this.imgUrls.length - 1) {
                this.activeImgIdx++;
            } else {
                this.activeImgIdx = 0;
            }
            this.setBodyBg();
        }
    },
    mounted() {
        this.setBodyBg();
    }
}

Vue.createApp(App).mount('#app');