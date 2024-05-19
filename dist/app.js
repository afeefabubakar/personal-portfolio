var heroTitle = document.querySelector('#hero-title');
var heroSubtitle = document.querySelector('#hero-subtitle');
var heroGreeting = document.querySelector('#hero-greetings');
var heroBg = document.querySelector('#hero-bg');
if (heroBg && heroTitle && heroGreeting) {
    heroBg.classList.add('dim');
    heroBg.addEventListener('animationend', function () {
      heroGreeting.classList.add('fade-in');
      heroGreeting.addEventListener('animationend', function () {
        heroSubtitle === null || heroSubtitle === void 0
          ? void 0
          : heroSubtitle.classList.add('fade-in');
      });
    });
}
