// 1. Data: A list of "Mock" songs (Later we will get these from a database)
const songs = [
    {
        id: 1,
        title: "Lofi Study",
        artist: "Chill Master",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop"
    }
];

// 2. Select HTML elements
const playBtn = document.getElementById('play-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackArt = document.getElementById('current-art');

// 3. Setup the Audio Engine
let audio = new Audio(songs[0].url);
let isPlaying = false;

// 4. Play/Pause Logic
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶"; // Change icon to Play
    } else {
        audio.play();
        playBtn.innerText = "⏸"; // Change icon to Pause
        
        // Update the UI with song info
        trackTitle.innerText = songs[0].title;
        trackArtist.innerText = songs[0].artist;
        trackArt.src = songs[0].cover;
    }
    isPlaying = !isPlaying;
});

function updateBackground(color) {
    const mainView = document.querySelector('.main-view');
    mainView.style.background = `linear-gradient(to bottom, ${color}, #121212)`;
}

// Call this inside your playBtn click listener to see it work!
// Example: updateBackground('#1DB954');