var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
var players = document.g

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {

        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {

    var pauseButton = document.getElementById("stop-button");
    pauseButton.addEventListener("click", function () {
        event.target.stopVideo();
    });

}

function toggle() {
    var category_vid = document.querySelector(".category-vid")
    onYouTubeIframeAPIReady()

    category_vid.classList.toggle("active");
    // stopVideo();


}