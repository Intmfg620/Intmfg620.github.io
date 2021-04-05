// -------------------- YouTube Video Management----------------

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

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
}



// -------------------- Carousel Management----------------

var categorie = document.querySelectorAll('.btm-nav-link');
var slides = document.querySelectorAll('.carousel-item');

function categorieRemoveActive() {
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].classList.contains('active')) {

            categorie[i].classList.remove('active');
        }
    }
}

function categorieActive() {
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].classList.contains('active')) {
            categorie[i].classList.add('active');
        }
    }

}

$('#categories-slide').on('slide.bs.carousel', function () {
    categorieRemoveActive();

    setTimeout(function () {

        categorieActive();

    }, 650);
});


$('#detail-des-slide').on('slide.bs.carousel', function () {
    categorieRemoveActive();

    setTimeout(function () {

        categorieActive();

    }, 650);
});