document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var startScroll = 100; // Scroll position to start the effect
    var endScroll = 300; // Scroll position to end the effect
//test
    function updateNavbar() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > startScroll && scrollPosition < endScroll) {
            // Apply effect between startScroll and endScroll
            var progress = (scrollPosition - startScroll) / (endScroll - startScroll);
            // Calculate the progress ratio between start and end points

            navbar.style.backdropFilter = 'blur(' + (30 * progress) + 'px)';
            // Adjust the blur effect based on progress
        } else if (scrollPosition <= startScroll) {
            // Reset when scrolling above startScroll
            navbar.style.backdropFilter = 'blur(0)';
        } else if (scrollPosition >= endScroll) {
            // Apply maximum effect when scrolling beyond endScroll
            navbar.style.backdropFilter = 'blur(30px)';
        }
    }

    // Listen for the scroll event and update the navbar accordingly
    window.addEventListener('scroll', updateNavbar);
});
