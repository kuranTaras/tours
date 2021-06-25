$(window).on("load" , function () {
    const customersSwiper = new Swiper('.customers__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
        initialSlide: 0,
        navigation: {
            prevEl: '.customers__prev',
            nextEl: '.customers__next',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 33,
                centeredSlides: true,
                initialSlide: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
    $('.enter-buss').on('click', () => {
        $('.hero__search').addClass('hero__form_active')
        $('.hero__ex').removeClass('hero__form_active')
    })
    $('.enter-ex').on('click', () => {
        $('.hero__search').removeClass('hero__form_active')
        $('.hero__ex').addClass('hero__form_active')
    })
    function initTourSwiper() {
        $('.hot-otp-content').addClass('swiper-container')
        $('.hot-wrapper').addClass('swiper-wrapper')
        $('.hot-otp-form-wrap').addClass('swiper-slide')
        const hotelSwiper = new Swiper('.hot-otp-content', {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.tour__next',
                prevEl: '.tour__prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }
        });
    }
    function initDirectionSwiper() {
        $('.os-top-countries-image').addClass('swiper-container')
        $('.os-top-countries-image ul').addClass('swiper-wrapper')
        $('.os-top-countries-item').addClass('swiper-slide')
        $('.os-top-countries-image').append('<div class="direction__bottom"><div class="direction__prev"><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM52 10.5L2 10.5L2 13.5L52 13.5L52 10.5Z" fill="#033756"/></svg></div><div class="direction__next"><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM52 10.5L2 10.5L2 13.5L52 13.5L52 10.5Z" fill="#033756"/> </svg></div><div class="swiper-pagination direction__progressbar"></div></div>')
        $('.os-top-countries-item a').append('<div class="direction-gradient"></div>')
        const hotelSwiper = new Swiper('.os-top-countries-image', {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.direction__progressbar',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.direction__next',
                prevEl: '.direction__prev'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }
        });
    }
    $('.hack__top').each(function (index) {
        $(this).on('click', () => {
            $('.hack__bottom').eq(index).toggleClass('active')
            if ($('.hack__bottom').eq(index).hasClass('active')) {
               $('.hack__bottom').eq(index).slideDown()
            } else {
                $('.hack__bottom').eq(index).slideUp()
            }
        })
    })
    let tourFind = true
    setInterval(function () {

         if (tourFind === false) {
             clearInterval()
         } else {
             initTourSwiper()
         }
        if ($('.hot-otp-content').length) {
            tourFind = false
        }
    },1000)
    let directionFind = true
    setInterval(function () {
        if (directionFind === false) {
            clearInterval()
        } else {
            initDirectionSwiper()
        }
        if ($('.os-top-countries-image').length) {
            directionFind = false
        }
    }, 1000)
    $('.header__language-top').on('click', () => {
        $('.header__language-bottom').toggleClass('active')
        if ($('.header__language-bottom').hasClass('active')) {
            $('.header__language-top svg').addClass('svg__active')
            $('.header__language-bottom').slideDown()
        } else {
            $('.header__language-bottom').slideUp()
            $('.header__language-top svg').removeClass('svg__active')
        }
    })
    $('.header__burger').on('click', () => {
        $('.header__menu').toggleClass('header__menu_active')
        $('body').toggleClass('body_overflow')
        $('.header__burger').toggleClass('header__burger_active')
        $('.header__language').toggleClass('header__language_active')
    })
    $('.header__link').on('click', () => {
        $('.header__menu').removeClass('header__menu_active')
        $('body').removeClass('body_overflow')
    })

})

$(document).ready(function (){
    $('a[href^="#"]').click(function () {
            $('html, body').animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 500);
    });
})

