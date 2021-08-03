window.onscroll = function() {
    const needToShowButton = window.pageYOffset > 1
    document.querySelector('#goUp').style.display = needToShowButton ? 'block' : 'none'
};

const header = document.querySelector('.header')
document.querySelectorAll('.dish-type__link, #goUp').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = header.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});