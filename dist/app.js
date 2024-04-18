var heroTitle = document.querySelector('.hero-title');
var heroGreeting = document.querySelector('.hero-greetings');
if (heroTitle && heroGreeting) {
    heroGreeting.classList.add('fade-in');
    heroGreeting.addEventListener('animationend', function () {
        heroTitle.classList.add('slide-fade-in-right');
    });
}
