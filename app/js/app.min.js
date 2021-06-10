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
        $('.os-top-countries-image').append('<div class="direction__bottom"><div class="direction__prev"><svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976307 4.7308 0.659724 4.53553 0.464462C4.34027 0.2692 4.02369 0.2692 3.82843 0.464462L0.646446 3.64644ZM51 3.5L1 3.5L1 4.5L51 4.5L51 3.5Z" fill="#033756"/>\n' +
            '</svg></div><div class="direction__next"><svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976307 4.7308 0.659724 4.53553 0.464462C4.34027 0.2692 4.02369 0.2692 3.82843 0.464462L0.646446 3.64644ZM51 3.5L1 3.5L1 4.5L51 4.5L51 3.5Z" fill="#033756"/>\n' +
            '</svg></div><div class="swiper-pagination direction__progressbar"></div></div>')
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
    $('.enter-buss').on('click', () => {
        $('.hero__search').addClass('hero__form_active')
        $('.hero__ex').removeClass('hero__form_active')
    })
    $('.enter-ex').on('click', () => {
        $('.hero__search').removeClass('hero__form_active')
        $('.hero__ex').addClass('hero__form_active')
    })
})

$(document).ready(function (){
    $('a[href^="#"]').click(function () {
            $('html, body').animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 500);
    });
})

