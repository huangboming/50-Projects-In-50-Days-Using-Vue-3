const App = {
    template: `
    <nav class="nav" ref="nav" :class="activeNavClass">
        <div class="container">
            <h1 class="logo">
                <a href="/index.html">My Website</a>
            </h1>
            <ul>
                <li><a href="#" class="current">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div class="hero">
        <div class="container">
            <h1>Welcome To My Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni molestiae provident cupiditate!</p>
        </div>
    </div>

    <section class="container content">
        <h2>Content One</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In tenetur voluptatem facilis perspiciatis ipsum
            similique, perferendis odio distinctio inventore culpa. Laboriosam est dolor quas dolorum, dicta laudantium
            nobis qui consectetur.
            Eligendi, iusto explicabo accusantium laborum at officia! Nisi magnam eaque molestias sequi dicta nobis
            nulla corrupti quasi illum. Ipsum tempora neque labore eaque facilis voluptates eius adipisci sunt sint
            assumenda!
            Fugit, dignissimos facere! Explicabo soluta eos incidunt voluptate. Quae adipisci voluptates odio nostrum
            earum, accusantium, laborum, accusamus qui labore totam corporis provident quis quas officia esse et eos ad
            deserunt!
            Aperiam natus debitis ipsa nisi a soluta mollitia officiis quo suscipit, provident blanditiis exercitationem
            nulla cupiditate. Dolores iusto dolore assumenda labore quaerat eveniet magni, mollitia exercitationem,
            veritatis qui quibusdam architecto?
            Ipsum dignissimos quos quas obcaecati dicta illo voluptatum aspernatur quae sit. Inventore suscipit ea
            molestias totam tempore, sit hic, rerum est a vero facilis dicta non eius ad amet? Eius.
            Quos cupiditate incidunt, nam recusandae facilis ipsam, voluptatum sequi pariatur vero nesciunt molestias
            voluptatibus tenetur vitae ut in delectus officia unde mollitia cum? Eum maxime provident tenetur nobis
            labore nam?
            Iste inventore doloremque eum eaque! Saepe consectetur dolores, repellendus nam eligendi animi? Minus
            voluptatum assumenda consequatur eveniet exercitationem quos incidunt, culpa aperiam numquam expedita. Sed
            dolores excepturi quaerat amet porro.
            Doloremque minima corrupti amet, excepturi animi, illo dicta beatae fugit eos exercitationem nam! Ducimus
            velit, dolorem iure vel dolores reprehenderit beatae error quibusdam, eos ut explicabo corrupti incidunt
            debitis sed!
            Labore quasi corrupti alias consequatur repellat culpa, harum repudiandae laborum placeat nesciunt quae
            voluptate, a hic, at ex ipsam earum iusto? Illo eaque quae culpa aspernatur optio saepe vero quia?
            Soluta esse, corrupti recusandae dignissimos, odio dolorem, libero aut dolore a sed modi quisquam nesciunt?
            Atque quos distinctio temporibus magnam perspiciatis! Esse numquam itaque officiis adipisci debitis fuga
            dolorum dolorem?</p>

        <h3>Content Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus in sunt ad laudantium, facere iste
            commodi incidunt id minus porro animi aperiam unde nulla repellat error dolore facilis nesciunt.
            Aliquid repellendus velit accusantium ratione quam! Iste fugiat quod omnis suscipit tempore velit minima
            inventore accusamus, maxime beatae rerum aperiam ea facilis asperiores autem dignissimos possimus deleniti
            quaerat optio quis.
            Porro cupiditate fugiat exercitationem, a at, temporibus odio ea, ipsum quia culpa dolorem illo natus. Nisi
            commodi praesentium illum et molestias similique sed. Quasi molestiae cupiditate tempora distinctio
            voluptatum dignissimos.
            Veritatis, assumenda culpa. Atque nesciunt tenetur numquam veniam odio voluptas amet hic totam ut vitae?
            Molestias assumenda veniam iste quam quisquam rerum neque cum, iusto vitae cupiditate beatae. Totam, magnam?
            Iste saepe ut eligendi dolorum quae temporibus reiciendis excepturi voluptate cumque. Inventore suscipit
            ipsam molestiae magnam recusandae possimus minima! Quibusdam perspiciatis adipisci facere autem vel aperiam
            inventore sit iure recusandae.
            Ex, quasi odio? At distinctio corrupti repellat. Quae amet ex ducimus cupiditate alias nam eos perferendis
            rem eaque qui quibusdam aliquam, laborum voluptatem, unde architecto repudiandae! Libero ea at quod!
            Asperiores quae nesciunt, natus repellendus facilis nisi fugit, quidem debitis autem excepturi aliquam
            corrupti ex labore? Adipisci soluta consequatur quaerat molestiae ad ducimus sed a odio! Quidem voluptas
            aspernatur magnam?
            Quidem nobis, tenetur veritatis eaque necessitatibus nam ullam? Unde sapiente tenetur non amet pariatur?
            Accusantium, ex ratione blanditiis porro error praesentium sint at iure vel officia. Dolorem beatae amet
            recusandae?
            Voluptas porro aliquid neque totam? Quam, hic assumenda veniam nisi dicta officiis! Laudantium ea, ut
            perspiciatis consequatur facilis earum cupiditate corporis mollitia maxime dolore fugit qui magni quae, amet
            quisquam?
            Similique incidunt perferendis accusamus, adipisci tempora delectus voluptas veritatis harum quam aliquid
            distinctio placeat et deleniti vel unde asperiores ad cum rerum porro totam animi ipsam suscipit ea
            voluptatibus. Cupiditate?</p>
    </section>
    `,
    data() {
        return {
            activeNavClass: '',
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.activeNavClass = window.scrollY > this.$refs.nav.offsetHeight + 150 ? 'active' : '';
        })
    }
}

Vue.createApp(App).mount('#app')