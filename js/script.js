const swiperBar = new Swiper('.swiper--bar', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel:true,


    // Navigation arrows
    navigation: {
        nextEl: '.slider-bar-next',
        prevEl: '.slider-bar-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 4
        }
    },
});
const swiperCategory = new Swiper('.swiper--category', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:'auto',
    spaceBetween: 24,
    freeMode: true,
    mousewheel:true,


    // Navigation arrows
    navigation: {
        nextEl: '.slider-category-next',
        prevEl: '.slider-category-prev',
    },
});
const swiperInsta = new Swiper('.swiper--insta', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    mousewheel:true,

    breakpoints: {
        // when window width is >= 320px
        400: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 4
        }
    },
});

const pageWrapper = document.querySelector('.wrapper');
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
const burger = headerBurger.querySelector('.burger');

headerBurger.addEventListener('click', (event)=>{
    event.preventDefault()

    burger.classList.toggle('burger--active');
    headerMenu.classList.toggle('header__menu--active');
    pageWrapper.classList.toggle('wrapper-overlay')
})

