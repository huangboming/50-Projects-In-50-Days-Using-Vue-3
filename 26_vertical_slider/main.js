const App = {
    template: `
    <div class="relative w-screen h-screen overflow-hidden">
        <div 
        class="absolute left-0 w-1/3 xl:w-1/4 h-full transition-transform duration-300 ease-in-out"
        :class="'top-[' + (slidesLength-1)*(-100) + 'vh]'"
        :style="{'transform': 'translateY(' + activeSlideIdx * 100 + 'vh)'}"
        >
            <div 
            class="flex flex-col items-center justify-center w-full h-full text-white"
            v-for="color, i in leftBoxColors"
            :class="'bg-['+color+']'"
            >
                <h1 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl xl:pb-2">
                {{ leftBoxTitles[i] }}
                </h1>
                <p class="text-sm md:text-lg lg:text-xl">{{ leftBoxDescriptions[i] }}</p>
            </div>
        </div>

        <div 
        class="absolute top-0 right-0 w-2/3 xl:w-3/4 h-full transition-transform duration-300 ease-in-out"
        :style="{'transform': 'translateY(' + -activeSlideIdx * 100 + 'vh)'}"
        >
            <div 
            class="w-full h-full bg-no-repeat bg-cover bg-center"
            v-for="img, i in rightBoxBgImg"
            :class="'bg-[url(' + rightBoxBgImg[i] + ')]'"
            ></div>
        </div>

        <div class="action-buttons">
            <button 
            class="absolute top-1/2 left-1/3 xl:left-1/4 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 rounded bg-white text-lg text-[#aaa] cursor-pointer outline-none z-10 -translate-x-full hover:text-[#222]"
            id="down-button"
            @click="decrement"
            >
                <i class="fas fa-arrow-down"></i>
            </button>

            <button 
            class="absolute top-1/2 left-1/3 xl:left-1/4 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 rounded bg-white text-lg text-[#aaa] cursor-pointer outline-none z-10 -translate-y-full hover:text-[#222]"
            id="up-button"
            @click="increment"
            >
                <i class="fas fa-arrow-up"></i>
            </button>
        </div>
    </div>
    `,
    data() {
        return {
            leftBoxColors: ['#FD3555', '#2A86BA', '#252E33', '#FFB866'],
            leftBoxTitles: ['Nature flower', 'Bluuue sky', 'Lonely castle', 'Flying eale'],
            leftBoxDescriptions: ['all in pink', "with it's mountains", 'in the wilderness', 'in the sunset'],
            rightBoxBgImg: [
                'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
                'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
                'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
            ],
            activeSlideIdx: 0
        }
    },
    computed: {
        slidesLength() {
            return this.leftBoxColors.length
        }
    },
    methods: {
        decrement() {
            this.activeSlideIdx--;
            if (this.activeSlideIdx < 0) {
                this.activeSlideIdx = this.slidesLength - 1;
            }
        },
        increment() {
            this.activeSlideIdx++;
            if (this.activeSlideIdx > this.slidesLength - 1) {
                this.activeSlideIdx = 0;
            }
        },
    }
}

Vue.createApp(App).mount('#app')