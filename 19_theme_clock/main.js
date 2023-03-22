const Clock = {
    props: ["hour", "minute", "second"],
    template: `
    <div class="clock">
        <div class="needle hour" :style="{ 'transform': 'translateY(-100%) rotate(' + hour * 30 + 'deg)' }"></div>
        <div class="needle minute" :style="{ 'transform': 'rotate(' + minute * 6 + 'deg)' }"></div>
        <div class="needle second" :style="{ 'transform': 'rotate(' + second * 6 + 'deg)' }"></div>
        <div class="center-point"></div>
    </div>
    `
}

const TimeMessageBox = {
    props: ["hour", "minute", "second", "suffix", "day", "month", "date"],
    template: `
        <div class="time-container">
        <h1 class="time">{{ time }}</h1>
        <p class="date">
        {{ coumputedDate }}
        <small>{{ date }}</small>
        </p>
        </div>
    `,
    computed: {
        time() {
            return `${this.hour}:${this.minute} ${this.suffix}`
        },
        coumputedDate() {
            return `${this.day}, ${this.month}`
        }
    }
}

const App = {
    components: {
        Clock,
        TimeMessageBox,
    },
    template: `
    <button type="button" class="dark-mode-button" @click="toggleDarkMode">{{ isDark ? 'Light mode' : 'Dark mode' }}</button>

    <div class="clock_container">
        <Clock 
        :hour="hour" 
        :minute="minute" 
        :second="second" />

        <TimeMessageBox 
        :hour="hour" 
        :minute="minute" 
        :second="second" 
        :suffix="suffix"
        :day="day"
        :month="month"
        :date="date"
        />
    </div>
    `,
    data() {
        return {
            hour: '',
            minute: '',
            second: '',
            day: 0,
            month: 0,
            date: 1,
            suffix: '',
            isDark: false,
            interval: null,
        }
    },
    methods: {
        getNow() {
            const now = new Date();
            const hourIn24 = now.getHours();
            const hourIn12 = hourIn24 >= 12 ? hourIn24 - 12 : hourIn24;
            const suffix = hourIn24 >= 12 ? 'PM' : 'AM';

            let minute = now.getMinutes();
            minute = minute > 10 ? minute : '0' + minute;

            const second = now.getSeconds();

            const days =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "August", "Sep", "Oct", "Nov", "Dec"];

            this.hour = hourIn12;
            this.minute = minute;
            this.second = second;
            this.suffix = suffix;
            this.day = days[now.getDay()-1];
            this.month = months[now.getMonth()];
            this.date = now.getDate();
        },
        toggleDarkMode() {
            this.isDark = !this.isDark;
            const html = document.querySelector('html');
            html.classList.toggle('dark');
        }
    },
    mounted() {
        this.interval = setInterval(this.getNow, 1000);
    }, 
    unmounted() {
        clearInterval(this.interval);
    }
}

Vue.createApp(App).mount('#app')