var heroTitle = document.querySelector('#hero-title');
var heroSubtitle = document.querySelector('#hero-subtitle');
var heroGreeting = document.querySelector('#hero-greetings');
var heroBg = document.querySelector('#hero-bg');
if (heroBg && heroTitle && heroGreeting) {
    heroBg.classList.add('dim');
    heroBg.addEventListener('animationend', function () {
        heroGreeting.classList.add('fade-in');
        heroGreeting.addEventListener('animationend', function () {
            heroSubtitle === null || heroSubtitle === void 0 ? void 0 : heroSubtitle.classList.add('fade-in');
        });
    });
}
var valueMask = document.querySelector('.personal-values-mask');
var valuesHeaders = document.querySelectorAll('.personal-values h3');
var intersectingHeaders = new Set();
var ticking = false;
var checkMaskIntersection = function () {
    var maskRect = valueMask.getBoundingClientRect();
    valuesHeaders.forEach(function (header) {
        var headerRect = header.getBoundingClientRect();
        var isIntersecting = !(headerRect.bottom < maskRect.top ||
            headerRect.top > maskRect.bottom ||
            headerRect.right < maskRect.left ||
            headerRect.left > maskRect.right);
        if (isIntersecting && !intersectingHeaders.has(header)) {
            header.setAttribute('data-intersecting', 'true');
            intersectingHeaders.add(header);
        }
        else if (!isIntersecting && intersectingHeaders.has(header)) {
            header.setAttribute('data-intersecting', 'false');
            intersectingHeaders.delete(header);
        }
    });
};
var updateOnScroll = function () {
    if (!ticking) {
        requestAnimationFrame(function () {
            checkMaskIntersection();
            ticking = false;
        });
        ticking = true;
    }
};
window.addEventListener('scroll', updateOnScroll);
checkMaskIntersection();
