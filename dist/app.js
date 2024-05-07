<<<<<<< Updated upstream
var header = document.querySelector('header .container');
if (header) {
    header.classList.add('backdrop-blur');
}
=======
var header = document.querySelector('header');
var backToTopButton = document.querySelector('sl-button.back-to-top');
var backToTopRoot = customElements
    .whenDefined('sl-button')
    .then(function () { return document.querySelector('sl-button.back-to-top').shadowRoot; });
backToTopRoot.then(function (root) {
    var backToTopRootButton = root.querySelector('button');
    backToTopRootButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    var headerObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            backToTopRootButton.style.display = 'none';
        }
        else {
            backToTopRootButton.style.display = 'flex';
        }
    });
    headerObserver.observe(header);
});
>>>>>>> Stashed changes
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
