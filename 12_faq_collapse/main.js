const ToggleButton = {
    emit: ["toggle"],
    template: `
    <button class="faq-btn" @click="$emit('toggle')">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
    </button>
    `
}

const FaqBox = {
    components: {
        ToggleButton,
    },
    props: ["question", "answer"] ,
    template: `
        <div class="faq" :class="activeClass">
            <h3 class="faq-q">{{ question }}</h3>
            <p class="faq-ans">{{ answer }}</p>
            <ToggleButton @toggle="active=!active" />
        </div>
    `,
    data() {
        return {
            active: false
        }
    },
    computed: {
        activeClass() {
            return this.active ? 'active' : ''
        }
    }
}

const App = {
    components: {
        FaqBox,
    },
    template: `
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
        <FaqBox v-for="question, i in questions" 
        :question="question"
        :answer="answers[i]"
        />
    </div>
    `,
    data() {
        return {
            questions: Seed.questions,
            answers: Seed.answers,
        }
    }
}

Vue.createApp(App).mount('#app')