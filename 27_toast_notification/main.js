const Toast = {
    props: ['message', "type"],
    template: `
    <div
    class="px-4 py-2 m-2 rounded bg-white"
    :class="messageColor"
    >
    {{ message }}
    </div>
    `,
    computed: {
        messageColor() {
            if(this.type === 'success') {
                return 'text-[green]';
            } else if (this.type === 'error') {
                return 'text-[red]';
            } else {
                return 'text-[rebeccapurple]';
            }
        }
    }
}

const App = {
    components: {
        Toast
    },
    template: `
    <div id="toasts"
    class="fixed bottom-3 right-3 flex flex-col items-end"
    >
    <Toast v-for="toast in toasts" :message="toast.message" :type="toast.type" />
    </div>

    <button 
    class="p-4 rounded bg-white text-[rebeccapurple] font-bold text-sm cursor-pointer active:scale-95" 
    id="button"
    @click="addToast"
    >
    Show Notificaiton
    </button>
    `,
    data() {
        return {
            toasts: []
        }
    },
    methods: {
        addToast() {
            const messages = [
                'Message One',
                'Message Two',
                'Message Three',
                'Message Four',
            ];
            const toast = {
                message: messages[Math.floor(Math.random() * messages.length)] ,
                type: 'info'
            }
            this.toasts.push(toast)

            setTimeout(() => {
                this.toasts.shift();
            }, 2000)
        }
    }
}

Vue.createApp(App).mount('#app')