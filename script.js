function toggleMenu() { 
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = './asset/sun.png';  // Change to sun icon for light mode
        } else {
            themeIcon.src = './asset/moon.png';  // Change to moon icon for dark mode
        }
    });

    // Fade in/out effect on scroll
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Add click event for experience links
    const experienceLinks = document.querySelectorAll('.experience-link');
    experienceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const slideTo = this.getAttribute('data-slide-to');
            const carousel = new bootstrap.Carousel(document.getElementById('experienceCarousel'));
            carousel.to(slideTo); // Move to the specified slide
            document.getElementById('experienceCarousel').scrollIntoView({ behavior: 'smooth' }); // Scroll to the carousel
        });
    });
});


const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      entry.target.classList.remove('is-hidden');
    } else {
      entry.target.classList.remove('is-visible');
      entry.target.classList.add('is-hidden');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});