const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    title: "Comethru",
    artist: "Jeremy Zucker",
    image: "img00",
    track: "track00",
  },
  {
    title: "Make you mine",
    artist: "Public - The Band",
    image: "img01",
    track: "track01",
  },
];

let isPlaying = false;
let songNumber = 0;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  music.src = "Music/" + song.track + ".mp3";
  img.src = "Images/" + song.image + ".jpg";
};

next.addEventListener("click", () => {
  ++songNumber;
  loadSong(songs[songNumber % songs.length]);
  playMusic();
});

prev.addEventListener("click", () => {
  songNumber = songNumber - 1 + songs.length;
  loadSong(songs[songNumber % songs.length]);
  playMusic();
});
