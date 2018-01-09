// swiper intro
var swiper = new Swiper('.intro-container', {
    speed: 1000,
    parallax: true,
    pagination: {
        el: '.intro-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//swiper friend's comment
var swiper = new Swiper('.comment-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.comment-pagination',
      clickable: true,
    },
});