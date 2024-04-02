document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var startScroll = 100; // Scroll position to start the effect
    var endScroll = 300; // Scroll position to end the effect
	
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

var coll = document.getElementsByClassName("skill-item");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
