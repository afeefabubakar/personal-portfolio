const header: HTMLElement | null = document.querySelector('header');
const backToTopButton = document.querySelector('sl-button.back-to-top');
const backToTopRoot = customElements
  .whenDefined('sl-button')
  .then(() => document.querySelector('sl-button.back-to-top').shadowRoot);

backToTopRoot.then((root) => {
  const backToTopRootButton = root.querySelector('button');
  backToTopRootButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const headerObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      backToTopRootButton.style.display = 'none';
    } else {
      backToTopRootButton.style.display = 'flex';
    }
  });
  headerObserver.observe(header);
});
