const valueMask = document.querySelector('.personal-values-mask');
const valuesHeaders = document.querySelectorAll('.personal-values h3');
const intersectingHeaders = new Set<Element>();
let ticking = false;

const checkMaskIntersection = () => {
  const maskRect = valueMask.getBoundingClientRect();

  valuesHeaders.forEach((header) => {
    const headerRect = header.getBoundingClientRect();

    const isIntersecting = !(
      headerRect.bottom < maskRect.top ||
      headerRect.top > maskRect.bottom ||
      headerRect.right < maskRect.left ||
      headerRect.left > maskRect.right
    );

    if (isIntersecting && !intersectingHeaders.has(header)) {
      header.setAttribute('data-intersecting', 'true');
      intersectingHeaders.add(header);
    } else if (!isIntersecting && intersectingHeaders.has(header)) {
      header.setAttribute('data-intersecting', 'false');
      intersectingHeaders.delete(header);
    }
  });
};

const updateOnScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      checkMaskIntersection();
      ticking = false;
    });
    ticking = true;
  }
};

window.addEventListener('scroll', updateOnScroll);

checkMaskIntersection();
