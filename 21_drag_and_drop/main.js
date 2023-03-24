const App = {
    template: `
    <div 
    class="empty"
    @dragover.prevent="dragOver"
    @dragenter.prevent="dragEnter"
    @dragleave="dragLeave"
    @drop="dragDrop"
    >
        <div class="fill" 
        draggable="true" 
        ref="drag"
        @dragstart="dragStart"
        @dragend="dragEnd"
        ></div>
    </div>
    <div class="empty" 
    v-for="i in [...Array(draggableNum-1).keys()]"
    @dragover.prevent="dragOver"
    @dragenter.prevent="dragEnter"
    @dragleave="dragLeave"
    @drop="dragDrop"
    >
    </div>
    `,
    data() {
        return {
            draggableNum: 5,
        }
    },
    methods: {
        dragStart() {
            this.$refs.drag.classList.add('hold');
            setTimeout(() => this.$refs.drag.classList.add('invisible'), 0);
        },
        dragEnd() {
            this.$refs.drag.classList.remove('hold');
            this.$refs.drag.classList.remove('invisible');
        },
        dragOver() {
            ;
        },
        dragEnter(e) {
            e.target.classList.add('hovered');
        },
        dragLeave(e) {
            e.target.classList.remove('hovered');
        },
        dragDrop(e) {
            e.target.className = 'empty';
            e.target.appendChild(this.$refs.drag);
        }
    }
}

Vue.createApp(App).mount('#app')

// @dragover.prevent="dragOver"
// @dragenter.prevent="dragEnter"
// @dragleave="dragLeave"
// @drop="dragDrop"