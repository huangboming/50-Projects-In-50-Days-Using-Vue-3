const ToggleNavbarButton = {
    props: ["toggleStyles"],
    emits: ['toggle'],
    template: `
    <div class="circle-container">
        <div class="circle">
             <button id="close" :class="toggleStyles" @click="$emit('toggle')">
               <span class="material-symbols-outlined">close</span>
            </button>
            <button id="open" :class="toggleStyles" @click="$emit('toggle')">
               <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </div>
    `
};

const Article = {
    template: `
    <article>
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate,
            maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus,
            illo,
            maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut.
            Eum
            maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
            Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in
            error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
            Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis.
            Asperiores
            quia tenetur nemo ipsa.</p>

        <h3>My Dog</h3>
        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                alt="doggy" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
            consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis
            totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero
            voluptas,
            ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident.
            Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse.
            Aperiam?
        </p>
    </article>
    `
};

const Navbar = {
    props: ["toggleStyles"],
    template: `
    <nav>
        <ul :class="toggleStyles">
            <li :class="toggleStyles">
                <span class="material-symbols-outlined">home</span>
                HOME
            </li>
            <li :class="toggleStyles">
                <span class="material-symbols-outlined">person</span>
                ABOUT
            </li>
            <li :class="toggleStyles">
                <span class="material-symbols-outlined">mail</span>
                CONTACT
            </li>
        </ul>
    </nav>
    `
};

const App = {
    components: {
        ToggleNavbarButton,
        Article,
        Navbar
    },
    template: `
    <div class="container" :class="toggleStyles">
        <ToggleNavbarButton 
        :toggleStyles="toggleStyles"
        @toggle="active=!active"
        />
        <Article />
    </div>
    <Navbar :toggleStyles="toggleStyles" />
    `,
    data() {
        return {
            active: false,
        }
    },
    computed: {
        toggleStyles() {
            return this.active ? 'active' : undefined;
        }
    },
};

Vue.createApp(App).mount('#app');