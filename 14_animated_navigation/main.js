const App = {
    template: `
    <nav :class="isActive? 'active' : '' ">
        <ul v-if="showUl">
            <li v-for="content in navContents">
            <a href="#">{{ content }}</a>
            </li>
        </ul>
        <button @click="handleClick">
            <div class="line1"></div>
            <div class="line2"></div>
        </button>
    </nav>
    `,
    data() {
        return {
            navContents: ['Home', 'Works', 'About', 'Contact'],
            isActive: true,
            showUl: true,
        }
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive;
            if(this.showUl === false) {
                // appear immediately
                this.showUl = !this.showUl;
            } else {
                // vanishing after 0.6s
                setTimeout(() => this.showUl = !this.showUl, 600);
            }  
        }
    }
}

Vue.createApp(App).mount('#app')