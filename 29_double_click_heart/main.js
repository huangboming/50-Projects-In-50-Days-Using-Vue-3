const Heart = {
    props: ["left", "top"],
    template: `
    <i class="fas fa-heart absolute text-red-500"
    :class="'left-[' + left + 'px]' + ' ' + 'top-[' + top + 'px]'"
    ></i>
    `
}

const App = {
    components: {
        Heart
    },
    template: `
    <h3 class="mt-4 mb-0 text-xl text-center">
        Double click on the image to <i class="fas fa-heart text-red-500"></i> it 
    </h3>
    <small class="block mb-4 text-md text-center">
        You liked it <span id="times">{{ loveTimes }}</span> times
    </small>

    <div 
    class="relative w-[300px] max-w-full h-[440px] m-auto bg-love-me-img bg-no-repeat bg-center bg-cover shadow-2xl cursor-pointer"
    id="love-me"
    @dblclick="(e) => addHearts(e)"
    >
    <Heart v-for="heart in hearts" :key="heart.id" :left="heart.left" :top="heart.top"/>
    </div>
    `,
    data() {
        return {
            loveTimes: 0,
            hearts: []
        }
    },
    methods: {
        addHearts(e) {
            this.loveTimes++;

            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const boxX = e.target.offsetLeft;
            const boxY = e.target.offsetTop;

            this.hearts.push({
                id: this.loveTimes,
                left: mouseX - boxX,
                top: mouseY - boxY
            })

            setTimeout(() => this.hearts.shift(), 600)
        }
    }
}

Vue.createApp(App).mount('#app')