const UserCard = {
    props: ['user', 'repos'],
    template: `
    <div class="flex w-[450px] sm:w-[650px] lg:w-[800px] rounded-2xl p-12 my-6 bg-[#4c2885] shadow-xl">
        <div>
            <img :src="user.avatar_url" alt="avatar" class="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] max-w-[none] border-[5px] sm:border-[10px] border-solid border-[#2a2a72] rounded-full object-contain">
        </div>
        <div class="ml-8 min-w-[60%] text-[#eee]">
            <h2 class="text-2xl">{{ user.name }}</h2>
            <p class="mt-6 mb-4">{{ user.bio }}</p>
            <ul class="flex justify-between max-w-[400px]">
                <li class="flex flex-col sm:flex-row justify-center items-center">{{ user.followers }} <strong class="text-sm ml-2">Followers</strong></li>
                <li class="flex flex-col sm:flex-row justify-center items-center">{{ user.following }} <strong class="text-sm ml-2">Following</strong></li>
                <li class="flex flex-col sm:flex-row justify-center items-center">{{ user.public_repos }} <strong class="text-sm ml-2">Repos</strong></li>
            </ul>
            <div class="mt-2">
                <a
                v-for="repo, i in repos.slice(0, 10)"
                :key="i"
                href="repo.html_url"
                target="_blank"
                class="inline-block p-2 m-2 bg-[#212a72] text-white text-xs rounded-xl"
                >
                {{ repo.name }}
                </a>
            </div>
        </div>
    </div>
    `,
}

const App = {
    components: {
        UserCard
    },
    template: 
    `
    <form class="relative w-full max-w-[450px] sm:max-w-[650px] lg:max-w-[800px]" @submit.prevent="handleSubmit">
        <input 
        type="text" 
        id="search" 
        placeholder="Search a Github User"
        class="block w-[80%] rounded-2xl p-4 mb-8 bg-[#4c2885] outline-none shadow-xl placeholder:text-[#bbb]"
        v-model="searchTerm"
        >
        <button type="submit" class="absolute right-0 top-0 w-[18%] rounded-2xl px-2 py-4 bg-[#4c2885] text-center text-[#eee]">Search</button>
    </form>

    <main>
        <UserCard v-if="user && repos" :user="user" :repos="repos" />
        <div v-if="fetchUserError || fetchRepoError" class="flex w-[800px] rounded-2xl p-12 my-6 bg-[#4c2885] shadow-xl">
            <h1 v-if="fetchUserError" class="text-xl">No profile with this username</h1>
            <h1 v-else-if="fetchRepoError" class="text-xl">Problem fetching repos</h1>
        </div>
    </main>
    `,
    data() {
        return {
            searchTerm: null,
            fetchUserError: false,
            fetchRepoError: false,
            user: null,
            repos: null,
        }
    },
    methods: {
        async handleSubmit() {
            if (this.user || this.repos) {
                this.user = null;
                this.repos = null;
            } 
            if(this.searchTerm) {
                await this.getUsers();
                this.searchTerm = '';
            }
        },
        async getUsers() {
            try {
                const { data } = await axios('https://api.github.com/users/' + this.searchTerm);  
                this.user = data; 
                this.getRepos();
            } catch (error) {
                this.fetchUserError = true;
            }
        },
        async getRepos() {
            try {
                const { data } = await axios('https://api.github.com/users/' + this.searchTerm + '/repos?sort=created');
                this.repos = data;
            } catch(error) {
                this.fetchRepoError = true;
            }
        }
    }
}

Vue.createApp(App).mount('#app')