window.onscroll = function() {
    if (window.pageYOffset > 1) {
        document.getElementsByClassName("go-up")[0].style.display='block';
    }
    else{
        document.getElementsByClassName("go-up")[0].style.display='none';
    }
};

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});