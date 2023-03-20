const Panel = {
    props: ['title', 'url'],
    template: `
    <div class="panel" :style="{ 'background-image': 'url(' + url + ')' }">
        <h3>
            {{ title }}
        </h3>
    </div>
    `
}

const App = {
    data() {
        return {
            panelTitles: Seed.panelTitles,
            panelUrls: Seed.panelUrls,
            activePanel: 0,
        }
    },
    components: {
        Panel
    },
    methods: {
        range(num) {
            return [...Array(num).keys()];
        },
        changeActivePanel(index) {
            this.activePanel = index;
        }
    },
    template: `
    <div class='container'>
        <Panel
        v-for="index in range(panelUrls.length)"
        :class="{'active-panel': index === activePanel}" 
        @click="changeActivePanel(index)"
        :title="panelTitles[index]"
        :url="panelUrls[index]"
        />
    </div>
    `,
    mounted() {

    }
}

Vue.createApp(App).mount("#app");