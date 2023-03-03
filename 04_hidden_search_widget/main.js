const App = {
    template: `
    <div class="container" :class="toggleClass">
        <input type="text" id="search-input" placeholder="Search...">
        <button class="btn" @click="isActive=!isActive">
            <span class="material-symbols-outlined" id="search-icon">
                search
            </span>
        </button>
    </div>
    `,
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        toggleClass() {
            return this.isActive ? 'active' : '';
        }
    },
}

Vue.createApp(App).mount('#app')