const AudioButton = {
    props: ["audioPath", "audioTitle"],
    emits: ["click"],
    template: `
        <audio :src="audioPath" :id="audioTitle"></audio>
        <button class="btn" @click="$emit('click')">{{ audioTitle }}</button>
    `,
    
}

const App = {
    components: {
        AudioButton
    },
    template: `
    <div class="container">
        <AudioButton v-for="(path, idx) in audioPaths" 
        :key="idx"
        :audioPath="path" 
        :audioTitle="audioTitles[idx]"
        @click="() => playCurrentSong(audioTitles[idx])"
        />
    </div>
    `,
    data() {
        return {
            audioPaths: Seed.audioPaths,
            audioTitles: Seed.audioTitles
        }
    },
    methods: {
        stopAllSongs() {
            for (const audioTitle of this.audioTitles) {
                const song = document.getElementById(audioTitle);
                song.pause();
                song.currentTime = 0;
            }
        },
        playCurrentSong(title) {
            this.stopAllSongs();
            currentSong = document.getElementById(title);
            currentSong.play();
        }
    }

}

Vue.createApp(App).mount('#app')