const songs = [
{
    title: "On the floor",
    artist: "Jennifer Lopez",
    src: "song1.mp3",
    cover: "cover1.jpg"
},
{
    title: "Gale Lag Ja",
    artist: "Javed Ali",
    src: "song2.mp3",
    cover: "cover2.jpg"
},
{
    title: "Ishq De Fanniyar",
    artist: "Jyotica Tangri",
    src: "song3.mp3",
    cover: "cover3.jpg"
}
];

let currentSong = 0;

const audio = new Audio();

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

loadSong(songs[currentSong]);

// Play / Pause
playBtn.addEventListener("click", () => {

    if(audio.paused){
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }

});

// Next Song
nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong > songs.length - 1){
        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    audio.play();

});

// Previous Song
prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    audio.play();

});

// Progress Bar
audio.addEventListener("timeupdate", () => {

    progress.max = audio.duration;
    progress.value = audio.currentTime;

});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

// Volume
volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

volume.value = 1;
audio.volume = 1;