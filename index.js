$(document).ready(function() {
    const slides = [
        { src: "./assets/banner.png", alt: "AtuneFit banner showing a person meditating outdoors" },
        { src: "./assets/banner2.png", alt: "Banner encouraging to push your limits" },
        { src: "./assets/banner3.png", alt: "Banner encouraging to achieve your goals" }
    ];
    let currentIndex = 0;
    const banner = $('.banner-image');
    let slideInterval;

    // --- Core Function to Display a Slide ---
    function showSlide(index) {
        // Wrap the index to loop through slides
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const currentSlide = slides[currentIndex];

        // Fade out, change the image source, and fade back in
        banner.fadeOut(400, function() {
            $(this)
                .attr('src', currentSlide.src)
                .attr('alt', currentSlide.alt)
                .fadeIn(400);
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
    // The initial image is already set in the HTML.
    // We'll sync the alt text and start the timer.
    banner.attr('alt', slides[currentIndex].alt);
    startSlideshow();
});