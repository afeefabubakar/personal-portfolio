const heroTitle: HTMLElement | null = document.querySelector('#hero-title');
const heroSubtitle: HTMLElement | null =
  document.querySelector('#hero-subtitle');
const heroGreeting: HTMLElement | null =
  document.querySelector('#hero-greetings');
const heroBg: HTMLElement | null = document.querySelector('#hero-bg');

if (heroBg && heroTitle && heroGreeting) {
  heroBg.classList.add('dim');
  heroBg.addEventListener('animationend', () => {
    heroGreeting.classList.add('fade-in');
    heroGreeting.addEventListener('animationend', () => {
      heroTitle.classList.add('slide-fade-in-right');
      heroSubtitle?.classList.add('fade-in');
    });
  });
}
