const MovieCard = {
    props: ['movie'],
    template: `
    <div class="movie">
        <img :src="movieImageUrl" :alt="movie.title">

        <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <small :class="vote_bgcolor">{{ Math.round(movie.vote_average * 10) / 10 }}</small>
        </div>

        <div class="overview">
            {{ movie.overview }}
        </div>
    </div>
    `,
    computed: {
        movieImageUrl() {
            const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
            return IMG_PATH + this.movie.poster_path;
        },
        vote_bgcolor() {
            if (this.movie.vote_average >= 8) return 'green';
            if (this.movie.vote_average >= 5) return 'orange';
            return 'red';
        }
    }
};

const App = {
    components: {
        MovieCard
    },
    template: `
    <header>
        <form id="form">
            <input type="text"
            class="search" 
            id="search" 
            placeholder="Search"
            v-model="searchTerm"
            @submit.prevent="handleSubmit"
            >
        </form>
    </header>

    <main>
        <template v-if="haveMovie">
            <MovieCard v-for="movie in movies" :movie="movie" />
        </template>
        <!-- if found nothing, show the below message -->
        <template v-else="haveMovie">
            <h2 class="not-found">Found Nothing... Please try another keyword</h2>
        </template>

    </main>
    `,
        data() {
            return {
                searchTerm: '',
                movies: [],
                TMDB_API_KEY: '26e57c90eb6803de33e699fdce42a76a',
            }
        },
        methods: {
            async getMovies(url) {
                const res = await fetch(url);
                const data = await res.json();
                this.movies = data.results
            },
            handleSubmit() {
                if (this.searchTerm && this.searchTerm !== '') {
                    const query = this.searchTerm.split(' ').join('+');
                    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_API_KEY}&query=${query}`;
                    this.getMovies(SEARCH_URL);

                    this.searchTerm = '';
                } else {
                    window.location.reload();
                }
            }
        },
        computed: {
            haveMovie() {
                return this.movies.length > 0
            }
        },
        beforeMount() {
            const allMoviesUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.TMDB_API_KEY}`;
            this.getMovies(allMoviesUrl);
        },
    }

Vue.createApp(App).mount('#app')