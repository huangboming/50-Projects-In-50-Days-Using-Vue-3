window.Seed = (function () {
    const audioPaths = [
        "sounds/sound-board_sounds_applause.mp3",
        "sounds/sound-board_sounds_boo.mp3",
        "sounds/sound-board_sounds_gasp.mp3",
        "sounds/sound-board_sounds_tada.mp3",
        "sounds/sound-board_sounds_victory.mp3",
        "sounds/sound-board_sounds_wrong.mp3"
    ];

    const audioTitles = [
        "applause",
        "boo",
        "gasp",
        "tada",
        "victory",
        "wrong"
    ]
    return {
        audioPaths,
        audioTitles
    }
}())