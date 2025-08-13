$(document).ready(function() {
    const images = [
        "https://placehold.co/1920x300/0a2240/FFF?text=Find+Your+Focus",
        "https://placehold.co/1920x300/2a4a6b/FFF?text=Push+Your+Limits",
        "https://placehold.co/1920x300/5a7a9b/FFF?text=Achieve+Your+Goals"
    ];
    let currentIndex = 0;
    const banner = $('.banner-image');
    let slideInterval;

    // --- Core Function to Display a Slide ---
    function showSlide(index) {
        // Wrap the index to loop through images
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }

        // Fade out, change the image source, and fade back in
        banner.fadeOut(400, function() {
            $(this).attr('src', images[currentIndex]).fadeIn(400);
        });
    }

    // --- Timer Controls ---
    function startSlideshow() {
        // Clear any existing interval to prevent duplicates
        clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            showSlide(currentIndex + 1);
        }, 5000);
    }

    // --- Arrow Click Handlers ---
    $('.banner-slideshow-container .next').on('click', function() {
        showSlide(currentIndex + 1);
        startSlideshow(); // Reset the timer after a manual click
    });

    $('.banner-slideshow-container .prev').on('click', function() {
        showSlide(currentIndex - 1);
        startSlideshow(); // Reset the timer after a manual click
    });

    // --- Initialize the Slideshow ---
    startSlideshow();
});