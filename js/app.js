// On récupère les éléments
const audio = document.querySelector("audio")
const img = document.querySelector(".song__infos img")
const title = document.querySelector("#title")
const artist = document.querySelector("#artist")
const track = document.querySelector("#track")
const elapsed = document.querySelector("#elapsed")
const trackTime = document.querySelector("#track-time")
const playButton = document.querySelector("#play")
const pauseButton = document.querySelector("#pause")
const reloadButton = document.querySelector("#reload")
const stopButton = document.querySelector("#stop")
const nextButton = document.querySelector("#next")
const muteButton = document.querySelector("#mute")
const demuteButton = document.querySelector("#demute")



const tracks = [
    {
        trackID: 1,
        title: "Dearly Beloved",
        artist: "Kingdom Hearts",
        cover: "assets/img/cover1.png",
        src: "assets/song/Kingdom Hearts - Dearly Beloved.mp3"
    },
    {
        trackID: 2,
        title: "Les prélis",
        artist: "Colombine",
        cover: "assets/img/cover2.png",
        src: "assets/song/Colombine - Les prélis.mp3"
    },
    {
        trackID: 3,
        title: "Uebok (Gotta Run)",
        artist: "Apashe ft. Instasamka",
        cover: "assets/img/cover3.png",
        src: "assets/song/Apashe ft. Instasamka - Uebok (Gotta Run).mp3"
    },
    {
        trackID: 4,
        title: "Demons",
        artist: "NightCore",
        cover: "assets/img/cover4.png",
        src: "assets/song/Nightcore -  Demons.mp3"
    },
    {
        trackID: 5,
        title: "Suicide social",
        artist: "Orelsan",
        cover: "assets/img/orelsan.jpg",
        src: "assets/song/Suicide social.mp3"
    },
]

window.addEventListener("load", getSong())



function getSong(){
    let songIndex = Math.floor(Math.random() * tracks.length)

    audio.setAttribute('src', tracks[songIndex].src)
    audio.dataset.trackid = tracks[songIndex].trackID
    img.setAttribute('src', tracks[songIndex].cover)
    title.textContent = tracks[songIndex].title
    artist.textContent = tracks[songIndex].artist
}

