let aud= document.getElementById("button1").children[0];
let isPlaying= false;

function playPause() {
    if (!isPlaying) {
        aud.play();
    } else {
        aud.pause();
    }
    isPlaying= !isPlaying;
}
