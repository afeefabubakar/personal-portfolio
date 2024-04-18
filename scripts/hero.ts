const heroTitle: HTMLElement | null = document.querySelector('.hero-title');
const heroGreeting: HTMLElement | null =
  document.querySelector('.hero-greetings');

if (heroTitle && heroGreeting) {
  heroGreeting.classList.add('fade-in');
  heroGreeting.addEventListener('animationend', () => {
    heroTitle.classList.add('slide-fade-in-right');
  });
}
