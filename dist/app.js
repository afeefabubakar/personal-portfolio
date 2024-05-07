var heroTitle = document.querySelector('.hero-title');
var heroGreeting = document.querySelector('.hero-greetings');
var heroBg = document.querySelector('.hero-bg');
if (heroBg && heroTitle && heroGreeting) {
    heroBg.classList.add('dim');
    heroBg.addEventListener('animationend', function () {
        heroGreeting.classList.add('fade-in');
        heroGreeting.addEventListener('animationend', function () {
            heroTitle.classList.add('slide-fade-in-right');
        });
    });
}
