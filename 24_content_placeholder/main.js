const App = {
    template: `
    <div class="card">
        <div class="card-header" :class="fetching ? 'animated-bg' : ''">
            <img :src="cardHeaderImageUrl"
            alt="card header" v-if="cardHeaderImageUrl">
        </div>

        <div class="card-content">
            <h3 class="card-title" :class="fetching ? 'animated-bg animated-bg-text' : ''">
                {{ cardTitle }}
            </h3>
            <p class="card-excerpt">
                {{ cardExcerpt }}
                <span :class="fetching ? 'animated-bg animated-bg-text' : ''">&nbsp;</span>
                <span :class="fetching ? 'animated-bg animated-bg-text' : ''">&nbsp;</span>
                <span :class="fetching ? 'animated-bg animated-bg-text' : ''">&nbsp;</span>
            </p>
            <div class="author">
                <div class="profile-img" :class="fetching ? 'animated-bg' : ''">
                    <img :src="profileImgUrl" alt="author profile" v-if="profileImgUrl">
                </div>
                <div class="author-info">
                    <strong :class="fetching ? 'animated-bg animated-bg-text' : ''">
                        {{ authorName }}
                    </strong>
                    <small :class="fetching ? 'animated-bg animated-bg-text' : ''">
                        {{ publishDate }}
                    </small>
                </div>

            </div>
        </div>
    </div>
    `,
    data() {
        return {
            fetching: true,
            cardHeaderImageUrl: null,
            cardTitle: null,
            cardExcerpt: null,
            authorName: null,
            publishDate: null,
        }
    },
    methods: {
        getData() {
            this.cardHeaderImageUrl = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80';
            this.cardTitle = 'Lorem ipsum dolor sit amet';
            this.cardExcerpt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, at!';
            this.profileImgUrl = 'https://randomuser.me/api/portraits/men/45.jpg';
            this.authorName = `John Doe`;
            this.publishDate = `Mar 05, 2023`;

            this.fetching = false;
        }
    },
    mounted() {
        setTimeout(this.getData, 3000);
    }
}

Vue.createApp(App).mount('#app')