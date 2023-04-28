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
    {
        trackID: 6,
        title: "Dans la cage",
        artist: "Sinik",
        cover: "assets/img/cover4.png",
        src: "assets/song/Sinik - Dans la cage.mp3"
    },
]

window.addEventListener("load", getSong())

playButton.addEventListener('click', () => {
    audio.play()
    pauseButton.style.display = "flex"
    stopButton.style.display = "flex"
    playButton.style.display = "none"
})

pauseButton.addEventListener('click', () => {
    audio.pause()
    playButton.style.display = "flex"
    pauseButton.style.display = "none"
})

stopButton.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
    pauseButton.style.display = "none"
    stopButton.style.display = "none"
    playButton.style.display = "flex"
})

nextButton.addEventListener('click', () => {
    getSong()
    audio.play()
    pauseButton.style.display = "flex"
    stopButton.style.display = "flex"
    playButton.style.display = "none"
})

muteButton.addEventListener('click', () => {
    audio.volume = 0
    demuteButton.style.display = "flex"
    muteButton.style.display = "none"
})

demuteButton.addEventListener('click', () => {
    audio.volume = 1
    demuteButton.style.display = "none"
    muteButton.style.display = "flex"
})

audio.addEventListener('timeupdate', () => {
    track.value = audio.currentTime
    elapsed.textContent = buildDuration(audio.currentTime)
})

audio.addEventListener('loadedmetadata', () => {
    track.max = audio.duration
    trackTime.textContent = buildDuration(audio.duration)
})

audio.addEventListener('ended', () => {
    getSong()
    audio.play()
})


track.addEventListener('input', () => {
    elapsed.textContent = buildDuration(track.value)
    audio.currentTime = track.value
})

document.addEventListener('keydown', (event) => {
    switch(event.code){
        case "ArrowRight":
            event.preventDefault()
            audio.currentTime += 5
            break
        case "ArrowLeft":
            event.preventDefault()
            audio.currentTime -= 5
            break
        case "Space":
            event.preventDefault()
            if(audio.paused){
                audio.play()
                pauseButton.style.display = "flex"
                stopButton.style.display = "flex"
                playButton.style.display = "none"
            } else {
                audio.pause()
                playButton.style.display = "flex"
                stopButton.style.display = "none"
                pauseButton.style.display = "none"
            }
            break
    }
    
})

function buildDuration(duration){
    let minutes = Math.floor(duration / 60)
    let reste = duration % 60
    let secondes = Math.floor(reste)
    secondes = String(secondes).padStart(2, "0")
    // return `${minutes} : ${seconde}`
    return minutes + ":" + secondes
}

function getSong(){
    let songIndex = Math.floor(Math.random() * tracks.length)

    audio.setAttribute('src', tracks[songIndex].src)
    audio.dataset.trackid = tracks[songIndex].trackID
    img.setAttribute('src', tracks[songIndex].cover)
    title.textContent = tracks[songIndex].title
    artist.textContent = tracks[songIndex].artist
}

