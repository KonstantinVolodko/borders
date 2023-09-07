document.addEventListener("DOMContentLoaded", () => {


    //= components/

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime: 800,
        // Размер шага в пикселях 
        stepSize: 75,

        // Дополнительные настройки:

        // Ускорение 
        accelerationDelta: 30,
        // Максимальное ускорение
        accelerationMax: 2,

        // Поддержка клавиатуры
        keyboardSupport: true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll: 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Поддержка тачпада
        touchpadSupport: true,
    })

    if (document.querySelector('.main__about-company-swiper')) {
        new Swiper(".main__about-company-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".main__about-company-arrows button:last-child",
                prevEl: ".main__about-company-arrows button:first-child",
            },
            breakpoints: {
                500: {
                    slidesPerView: 2,
                },
            },
        });
    }

    if (document.querySelector('.main__sertificate-swiper')) {
        new Swiper(".main__sertificate-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".main__sertificate-title button:last-child",
                prevEl: ".main__sertificate-title button:first-child",
            },

            breakpoints: {
                // 1330: {
                //     slidesPerView: 7,
                // },

                1024: {
                    slidesPerView: 7,
                },

                500: {
                    slidesPerView: 3,
                },
            },
        });
    }

    if (window.matchMedia("(min-width: 1024px)").matches && document.querySelector('.main__videos-swiper')) {
        new Swiper(".main__videos-swiper", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".main__videos-navigation button:last-child",
                prevEl: ".main__videos-navigation button:first-child",
            },
            pagination: {
                el: ".main__videos-pagination",
                clickable: true,
            },
        });
    }

    if (window.matchMedia("(max-width: 1024px)").matches && document.querySelector('.main__videos-swiper')) {
        new Swiper(".main__videos-swiper", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".main__videos-navigation button:last-child",
                prevEl: ".main__videos-navigation button:first-child",
            },
            pagination: {
                el: ".main__videos-pagination-mob",
                clickable: true,
            },
        });
    }

    const videoPreview = document.querySelectorAll('.video-preview');
    const videos = document.querySelectorAll('video')

    if (videoPreview !== undefined) {
        videoPreview.forEach(e => {
            const video = e.nextElementSibling;
            e.addEventListener('click', () => {
                video.style.display = 'block';
                videos.forEach(el => {
                    el.pause()
                })
                video.play();
                e.style.display = 'none';
            });
        })
    }

    if (document.querySelector('.main__portfolio-swiper') && document.querySelector('.main__portfolio-swiper').classList.contains('--television-modify') !== true) {
        new Swiper(".main__portfolio-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".main__portfolio .main__about-company-arrows button:last-child",
                prevEl: ".main__portfolio .main__about-company-arrows button:first-child",
            },

            breakpoints: {
                // 1330: {
                //     slidesPerView: 4.3,
                // },

                1024: {
                    slidesPerView: 4.3,
                },
                500: {
                    slidesPerView: 2.3,
                },
            },
        });
    }

    if (document.querySelector('.main__portfolio-swiper') && document.querySelector('.main__portfolio-swiper').classList.contains('--television-modify') === true) {
        new Swiper(".main__portfolio-swiper", {
            slidesPerView: 1.3,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".main__portfolio .main__about-company-arrows button:last-child",
                prevEl: ".main__portfolio .main__about-company-arrows button:first-child",
            },

            breakpoints: {
                // 1330: {
                //     slidesPerView: 4.3,
                // },

                1024: {
                    slidesPerView: 6,
                },
                500: {
                    slidesPerView: 2.3,
                },
            },
        });
    }


    if (document.querySelector('.main__reviews-swiper')) {
        new Swiper(".main__reviews-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".main__reviews button:last-child",
                prevEl: ".main__reviews button:first-child",
            },

            breakpoints: {
                // 1330: {
                //     slidesPerView: 4.3,
                // },

                1024: {
                    slidesPerView: 4,
                },

                500: {
                    slidesPerView: 2,
                },
            },
        });
    }


    const swiperElements = document.querySelectorAll('.portfolio__swiper');

    if (swiperElements.length > 0) {
        swiperElements.forEach((swiperElement) => {
            const arrowsContainers = swiperElement.closest('.portfolio__item').querySelectorAll(".main__about-company-arrows");
            const swiper = new Swiper(swiperElement, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: arrowsContainers[0].querySelector("button:last-child"), // Вторая стрелка (следующая)
                    prevEl: arrowsContainers[0].querySelector("button:first-child"), // Первая стрелка (предыдущая)
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                },
            });

            arrowsContainers.forEach((arrowsContainer) => {
                const arrows = arrowsContainer.querySelectorAll("button");

                arrows.forEach((arrow) => {
                    arrow.addEventListener("click", () => {
                        if (arrow === arrows[0]) {
                            swiper.slidePrev();
                        } else if (arrow === arrows[1]) {
                            swiper.slideNext();
                        }
                    });
                });
            });
        });
    }

    if (document.querySelector('.catalog-final__varians-swiper')) {
        new Swiper(".catalog-final__varians-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".catalog .main__about-company-arrows button:last-child",
                prevEl: ".catalog .main__about-company-arrows button:first-child",
            },

            breakpoints: {
                // 1330: {
                //     slidesPerView: 4.3,
                // },

                1024: {
                    slidesPerView: 4,
                },

                500: {
                    slidesPerView: 2,
                },
            },
        });
    }

    const menuButtons = document.querySelectorAll('.header__menu button');

    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Остановить всплытие события, чтобы клик не срабатывал на документе
            // Находим ближайший элемент с классом 'menu-item'
            const menuItem = button.closest('li');

            // Закрываем все выпадающие меню, кроме текущего
            menuButtons.forEach(otherButton => {
                const otherMenuItem = otherButton.closest('li');
                if (otherMenuItem !== menuItem) {
                    otherMenuItem.classList.remove('active');
                    const otherSubmenu = otherMenuItem.querySelector('.header__submenu');
                    otherSubmenu.style.maxHeight = '0';
                    otherSubmenu.style.opacity = '0';
                }
            });

            // Переключаем активное состояние текущего элемента меню
            menuItem.classList.toggle('active');

            // Находим соответствующее подменю
            const submenu = menuItem.querySelector('.header__submenu');

            // Если меню активно, устанавливаем максимальную высоту и плавно изменяем прозрачность
            if (menuItem.classList.contains('active')) {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
                submenu.style.opacity = '1';
            } else {
                // Если меню закрывается, то плавно скрываем и устанавливаем максимальную высоту обратно в 0
                submenu.style.maxHeight = '0';
                submenu.style.opacity = '0';
            }
        });
    });

    // Обработчик события для закрытия меню при клике вне его
    document.addEventListener('click', (event) => {
        const menuItems = document.querySelectorAll('li');
        menuItems.forEach(menuItem => {
            const button = menuItem.querySelector('.header__menu button');
            const submenu = menuItem.querySelector('.header__submenu');
            if (button && submenu && menuItem.classList.contains('active') && !menuItem.contains(event.target)) {
                menuItem.classList.remove('active');
                submenu.style.maxHeight = '0';
                submenu.style.opacity = '0';
            }
        });
    });

    class Modal {
        constructor(modalId, openButtons) {
            this.modal = document.getElementById(modalId);
            this.openButtons = [];

            if (typeof openButtons === 'string') {
                this.openButtons = Array.from(document.getElementsByClassName(openButtons));
            } else if (Array.isArray(openButtons)) {
                this.openButtons = openButtons.map(buttonId => document.getElementById(buttonId));
            }

            this.openButtons.forEach(button => {
                if (button) {
                    button.addEventListener('click', () => {
                        this.open();
                        this.disableBodyScroll();
                    });
                }
            });

            window.addEventListener('click', (event) => {
                if (this.modal && event.target === this.modal) {
                    this.close();
                    this.enableBodyScroll();
                }
            });

            const closeButton = this.modal ? this.modal.querySelector('.close') : null;
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    this.close();
                    this.enableBodyScroll();
                });
            }
        }

        open() {
            this.modal.style.display = 'block';
            setTimeout(() => {
                this.modal.classList.add('open');
            }, 10);
        }

        close() {
            this.modal.classList.remove('open');
            setTimeout(() => {
                this.modal.style.display = 'none';
            }, 300);
        }

        disableBodyScroll() {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = scrollBarWidth + 'px';
            document.body.style.overflow = 'hidden';
        }

        enableBodyScroll() {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        }
    }

    const burgerModal = new Modal('burger-modal');

    const callBack = new Modal('callBack-modal', ['callBack-button', 'callBack-button-transparent']);

    if (window.matchMedia("(max-width: 1330px)").matches) {
        document.querySelector('.burger-modal-content').innerHTML = document.querySelector('.header').innerHTML
    }

    const burger = document.querySelector(".header__burger");
    const burgerModalContainer = document.querySelector('.burger-modal')

    if (burger) {
        burger.addEventListener("click", function () {
            this.classList.toggle("active");

            if (this.classList.contains("active")) {
                burgerModalContainer.style.top = document.querySelector('header').scrollHeight + "px"
                burgerModal.disableBodyScroll()
                burgerModal.open()

                if (document.querySelector('.header').classList.contains('transparent')) {
                    document.querySelector('.header').style.background = "var(--white)"
                    document.querySelector('.header__logo p').style.backgroundPosition = "0"
                }

            } else {
                burgerModal.close()
                burgerModal.enableBodyScroll()
                if (document.querySelector('.header').classList.contains('transparent')) {
                    document.querySelector('.header').style.background = "transparent"
                    document.querySelector('.header__logo p').style.backgroundPosition = "100%"
                }
            }
        });
    }

    let acc = document.querySelectorAll(".burger-modal-content .header__menu button");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.paddingTop = "0rem"
                panel.style.maxHeight = null;
            } else {
                panel.style.paddingTop = "1rem"
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }


    let textElement = document.querySelector(".main__title-block_inner h1");
    if (textElement && window.matchMedia("(min-width: 1024px)").matches) {

        textElement.innerText = "";
        let textToType = "Изготовление и монтаж офисных перегородок различных типов";
        function typeText(text, i) {
            if (i < text.length) {
                textElement.innerText += text.charAt(i);
                textElement.innerHTML += '<span class="cursor"></span>';
                setTimeout(function () {
                    typeText(text, i + 1);
                }, 100);
            }
        }
        typeText(textToType, 0);
    }



    const listItems = document.querySelectorAll('.main__catalog li');

    gsap.registerPlugin(ScrollTrigger);

    if (listItems !== undefined && window.matchMedia("(min-width: 1024px)").matches) {
        listItems.forEach((item) => {
            gsap.to(item, {
                opacity: 1,               // Animate opacity to 1
                y: 0,                     // Animate Y position to 0
                duration: 0.5,            // Animation duration
                ease: "power2.inOut",     // Easing function
                scrollTrigger: {
                    trigger: item,        // Use the <li> as the trigger
                    start: "top 70%",     // Start the animation when the top of the element is 80% in view
                    toggleActions: "play none none reverse", // Define how the animation behaves
                }
            });
        });
    }


    const aboutCompanyList = document.querySelectorAll('.main__about-company-right ul li');


    const tl = gsap.timeline();

    // Loop through each <li> element and add them to the timeline
    if (aboutCompanyList !== undefined && window.matchMedia("(min-width: 1024px)").matches) {
        aboutCompanyList.forEach((item, index) => {
            tl.to(item, {
                opacity: 1,               // Animate opacity to 1
                x: 0,                     // Animate X position to 0
                duration: 0.5,            // Animation duration
                ease: "power2.inOut",     // Easing function
            });
        });
    }

    // Create a ScrollTrigger for the timeline
    ScrollTrigger.create({
        trigger: aboutCompanyList[0], // Use the first <li> as the trigger
        animation: tl,         // Use the timeline for the animation
        start: "top 80%",      // Start the animation when the top of the first <li> is 80% in view
        toggleActions: "play none none reverse", // Define how the animation behaves
        once: true             // Play the animation only once
    });


    const mainAdvantagesList = document.querySelectorAll('.main__advantages li');

    if (mainAdvantagesList !== undefined && window.matchMedia("(min-width: 1024px)").matches) {
        mainAdvantagesList.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 100,
                rotation: -90,
                duration: 1.5, // Увеличили длительность анимации
                ease: "power2.out", // Использовали более плавную функцию сглаживания
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    once: true,
                    delay: index * 0.2
                }
            });
        });
    }


    const mainPriceList = document.querySelectorAll('.main__price-list li');

    if (mainPriceList !== undefined && window.matchMedia("(min-width: 1024px)").matches) {
        mainPriceList.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: 100,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    once: true,
                    delay: index * 0.2
                }
            });
        })
    }

    const mainStagesList = document.querySelectorAll('.main__stages li');

    if (mainStagesList !== undefined && window.matchMedia("(min-width: 1024px)").matches) {
        mainStagesList.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: -100,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    once: true,
                    delay: index * 0.2
                }
            });
        })
    }
})





















function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

$(document).ready(function () {
    var _$$slick;

    $('.h-menu__close').on('click', function () {
        $('.h-menu').removeClass('h-menu--active');
        $('.h-menu__item--submenu .submenu').slideUp('slow');
        $('.h-menu__item--submenu .icon-down').removeClass('active');
    });
    $('.header-top__menuopen').on('click', function () {
        $('.h-menu').addClass('h-menu--active');
    });

    if ($('body').width() < 701) {
        $('.h-menu__item--submenu .icon-down').on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).siblings('.submenu').slideUp("slow");
                $(this).removeClass("active");
            } else {
                $('.h-menu__item--submenu .submenu').slideUp('slow');
                $('.h-menu__item--submenu .icon-down').removeClass('active');
                $(this).siblings('.submenu').slideDown("slow");
                $(this).addClass("active");
            }
        });
    }

    var $slider = $('.main-slider');
    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var updateSliderCounter = function updateSliderCounter(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $slider.find('.slider__counter .current').text('0' + currentSlide);
            $slider.find('.slider__counter .slush').text('/');
            $slider.find('.slider__counter .all').text('0' + slidesCount);
        };
        $slider.on('init', function (event, slick) {
            $slider.append('<div class="slider__counter container"><span class="current"></span><span class="slush"></span><span class="all"></span></div>');
            updateSliderCounter(slick);
        });
        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }

    $("#fl_inp").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $(".fl_nm").html(filename);
    });


    if ($('body').width() < 400) {
        $('.header-bottom__time br').remove();
        $('.header-bottom__address br').remove();
    }









    (function ($) {
        $(function () {
            $("ul.tabs__caption").on("click", "li:not(.active)", function () {
                $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
            });
        });
    })(jQuery);

    $(".per-height__input input").focusin(function () {
        $(this).closest('.per-height').find('svg').css('fill', '#2A8EAF');
    });
    $(".per-height__input input").focusout(function () {
        $(this).closest('.per-height').find('svg').css('fill', '#DBDBDB');
    });
    $(".per-length__input input").focusin(function () {
        $(this).closest('.per-length').find('svg').css('fill', '#2A8EAF');
    });
    $(".per-length__input input").focusout(function () {
        $(this).closest('.per-length').find('svg').css('fill', '#DBDBDB');
    });
    /*высота сантехничсеких*/

    $(".per-height__input input.height").focusin(function () {
        $(this).closest('.per-height').siblings('#santeh').find('svg').find('path.arrow').css('fill', '#2A8EAF');
    });
    $(".per-height__input input.height").focusout(function () {
        $(this).closest('.per-height').siblings('#santeh').find('svg').find('path.arrow').css('fill', '#AEAEAE');
    });
    $(".per-height__input input.count").focusin(function () {
        $(this).closest('.per-height').siblings('#santeh').find('svg').find('line').css({
            'stroke': '#2A8EAF',
            'fill': '#2A8EAF'
        });
    });
    $(".per-height__input input.count").focusout(function () {
        $(this).closest('.per-height').siblings('#santeh').find('svg').find('line').css({
            'stroke': '#AEAEAE',
            'fill': '#AEAEAE'
        });
    });
    $('body').on('click', 'button.step1', function () {
        var class1 = $('.main-tabs__content.current .tabs__caption li.active').attr('data-class');
        var type = class1.replace("-step2", "");
        $('.main-tabs__content').removeClass('current');
        $('.main-tabs__content.' + class1).addClass('current');
        var step1 = $('.main-tabs__content.current').attr('data-step');
        $('.main-calc-form__steps .calc-step').removeClass('current');
        $('.main-calc-form__steps .calc-step.' + step1).addClass('current');
        $(this).removeClass('step1').addClass('step2');
        $(this).siblings().removeClass('disabled');
        $('.step4').attr('type', type);

    });
    $('body').on('click', 'button.step2', function () {
        var class2 = $('.main-tabs__content.current').attr('data-class');
        var type = $('.step4').attr('type');
        var valid = true;
        $('.main-tabs__content.current input').each(function (a, b) {
            if ($(this).val().length < 1) {
                valid = false;
                $(this).css('box-shadow', '0px 10px 20px rgba(255, 0, 0, .2)');
            } else {
                $(this).css('box-shadow', '0px 10px 20px rgba(216, 216, 216, .9)');
            }
        });

        if (valid) {
            $('.main-tabs__content').removeClass('current');
            $('.main-tabs__content.' + class2).addClass('current');
            var step2 = $('.main-tabs__content.current').attr('data-step');
            $('.main-calc-form__steps .calc-step').removeClass('current');
            $('.main-calc-form__steps .calc-step.' + step2).addClass('current');
            $(this).removeClass('step2').addClass('step3');

            if (type != 'santeh') {
                var height = $('.' + type + '-step2 .per-height input').val();
                var length = $('.' + type + '-step2 .per-length input').val();
                $('.step4').attr('data-height', height);
                $('.step4').attr('data-length', length);

            } else {
                var height = $('.' + type + '-step2 .per-height input.height').val();
                var count = $('.' + type + '-step2 .per-height input.count').val();
                var length = $('.' + type + '-step2 .per-length input').val();
                $('.step4').attr('data-height', height);
                $('.step4').attr('data-count', count);
                $('.step4').attr('data-length', length);


            }
        }
    });
    $('.main-tabs__content input').on('focus', function () {
        $(this).css('box-shadow', '0px 10px 20px rgba(216, 216, 216, .9)');
    });
    $('body').on('click', 'button.step3', function () {
        var type = $('.step4').attr('type');
        var valid = true;
        $('.main-tabs__content.current.santeh-step3 input').each(function (a, b) {
            if ($(this).val().length < 1) {
                valid = false;
                $(this).css('box-shadow', '0px 10px 20px rgba(255, 0, 0, .2)');
            } else {
                $(this).css('box-shadow', '0px 10px 20px rgba(216, 216, 216, .9)');
            }
        });

        if ($('.main-tabs__content.mob-step3').hasClass('current')) {
            if ($('.mob-step3 .materials__bottom-left .per-type.active')) {
                $('.mob-step3 .materials__bottom-left .per-type.active .part').each(function (a, b) {
                    if (!$(this).attr('data-type-z')) {
                        valid = false;
                        $(this).css('box-shadow', '0px 10px 20px rgba(255, 0, 0, .2)');
                    } else {
                        $(this).css('box-shadow', 'none');
                    }
                });
            } else {
                valid = false;
            }
        }
        if ($('.main-tabs__content.stac1-step3').hasClass('current')) {
            if ($('.stac1-step3 .materials__bottom-left .per-type.active')) {
                $('.stac1-step3 .materials__bottom-left .per-type.active .part').each(function (a, b) {
                    if (!$(this).attr('data-type-z')) {
                        valid = false;
                        $(this).css('box-shadow', '0px 10px 20px rgba(255, 0, 0, .8)');
                    } else {
                        $(this).css('box-shadow', 'none');
                    }
                });
            } else {
                valid = false;
            }
            if ($('.stac1-step3 .materials__bottom-right input').val()) {
                $('.step4').attr('data-door', $('.stac1-step3 .materials__bottom-right input').val());
            } else {
                valid = false;
            }
        }
        if ($('.main-tabs__content.stac2-step3').hasClass('current')) {
            if ($('.stac2-step3 .materials__bottom-left .per-type.active')) {
                $('.stac2-step3 .materials__bottom-left .per-type.active .part').each(function (a, b) {
                    if (!$(this).attr('data-type-z')) {
                        valid = false;
                        $(this).css('box-shadow', '0px 10px 20px rgba(255, 0, 0, .8)');
                    } else {
                        $(this).css('box-shadow', 'none');
                    }
                });
            } else {
                valid = false;
            }

            if ($('.stac2-step3 .materials__bottom-right input').val()) {
                $('.step4').attr('data-door', $('.stac2-step3 .materials__bottom-right input').val())
            } else {
                valid = false;
            }
        }

        if (valid) {
            $('.main-tabs__content').removeClass('current');
            $('.main-tabs__content.step4').addClass('current');
            $('.main-calc-form__actions button.b-btn').addClass('disabled');
            var step3 = $('.main-tabs__content.current').attr('data-step');
            $('.main-calc-form__steps .calc-step').removeClass('current');
            $('.main-calc-form__steps .calc-step.' + step3).addClass('current');
            $(this).removeClass('step3').addClass('step4');

            if (type == 'stekl') {
                var count_door = $('.' + type + '-step3 .materials__top-input input').val();
                $('.step4').attr('data-door', count_door);
            } else if (type == 'santeh') {
                var count_door = $('.' + type + '-step3 .count__top .count__input input').val();
                $('.step4').attr('data-door', count_door);
            } else if (type == 'mob') {
                var struct = $('.mob-step3 .materials__bottom-left').attr('data-type');
                console.log(struct);
                $('.step4').attr('data-struct', struct);
                if (struct == 'type1') {
                    var type_z = $('.mob-step3 .materials__bottom-left .per-type.active .part').attr('data-type-z');
                    $('.step4').attr('data-struct-z', type_z);
                    console.log(type_z);
                } else {
                    var type_zb = $('.mob-step3 .materials__bottom-left .per-type.active .big-part').attr('data-type-z');
                    var type_zs = $('.mob-step3 .materials__bottom-left .per-type.active .small-part').attr('data-type-z');
                    $('.step4').attr('data-struct-z-b', type_zb);
                    $('.step4').attr('data-struct-z-s', type_zs);
                }
            } else if (type == 'stac1') {
                var count_door = $('.' + type + '-step3 .count__top .count__input input').val();
                $('.step4').attr('data-door', count_door);
                var struct = $('.stac1-step3 .materials__bottom-left').attr('data-type');
                $('.step4').attr('data-struct', struct);
                if (struct == 'type1') {
                    var type_z = $('.stac1-step3 .materials__bottom-left .per-type.active .part').attr('data-type-z');
                    $('.step4').attr('data-struct-z', type_z);
                } else {
                    var type_zb = $('.stac1-step3 .materials__bottom-left .per-type.active .big-part').attr('data-type-z');
                    var type_zs = $('.stac1-step3 .materials__bottom-left .per-type.active .small-part').attr('data-type-z');
                    $('.step4').attr('data-struct-z-b', type_zb);
                    $('.step4').attr('data-struct-z-s', type_zs);
                }
            } else if (type == 'stac2') {
                var count_door = $('.' + type + '-step3 .count__top .count__input input').val();
                $('.step4').attr('data-door', count_door);
                var struct = $('.stac2-step3 .materials__bottom-left').attr('data-type');
                $('.step4').attr('data-struct', struct);
                if (struct == 'type4') {
                    var type_z = $('.stac2-step3 .materials__bottom-left .per-type.active .part').attr('data-type-z');
                    $('.step4').attr('data-struct-z', type_z);
                } else {
                    var type_zb = $('.stac2-step3 .materials__bottom-left .per-type.active .big-part').attr('data-type-z');
                    var type_zs = $('.stac2-step3 .materials__bottom-left .per-type.active .small-part').attr('data-type-z');
                    $('.step4').attr('data-struct-z-b', type_zb);
                    $('.step4').attr('data-struct-z-s', type_zs);
                }
            } else {

            }

            calcForm();
        } else {
            alert('Заполните все поля');
        }
    });
    $('.additional-list__item').not('.sub').on('click', function (e) {
        e.stopPropagation();

        $('.additional-list__item').removeClass('active');
        $('.additional-list').removeClass('active');

        setTypeZ($(this));
    });
    $('.big-part, .small-part').on('click', function () {
        $('.big-part, .small-part').removeClass('active');
        $(this).addClass('active');
        $('.current .materials-list .active').removeClass('active');
        if ($(this).attr('data-type-z')) {
            if ($(this).attr('data-type-z') !== 'type5' && $(this).attr('data-type-z') !== 'type6') {
                $('.current .materials-list__item.has-drop').addClass('active');
            } else {
                $('.current .materials-list__item[data-type-z=' + $(this).attr('data-type-z') + ']').addClass('active');
            }
        }
    });
    $('.materials__bottom-left').on('click', function () {
        $(this).parent().find('.materials__bottom-center').show();
        $(this).parent().find('.materials__bottom-right').show();
    });
    $('.additional-list__item').not('.sub').on('click', function (e) {
        e.stopPropagation();

        $('.additional-list__item').removeClass('active');
        $('.additional-list').removeClass('active');

        setTypeZ($(this));
    });

    $('.additional-list__item.sub').on('click', function (e) {
        if ($(this).not('.sub')) {
            $('.additional-list__item').removeClass('active');
            $(this).siblings().find('.additional-list').removeClass('active');
            $(this).addClass('active');
            $(this).find('.additional-list').addClass('active');
        }
    });


    $('.materials-list__item').on('click', function () {
        $('.materials-list__item').removeClass('active');
        $(this).siblings().find('.additional-list').removeClass('active');
        $(this).siblings().find('.additional-list__item').removeClass('active');
        $(this).siblings().find('.additional-list__item').removeClass('choosen');
        $(this).find('ul.additional-list:first').addClass('active');
        $(this).addClass('active');

        if (!$(this).hasClass('has-drop')) {
            setTypeZ($(this));
        }

    });

    $('body').on('click', 'button.step-back', function () {
        if ($(this).siblings().hasClass('step2')) {
            $('.main-tabs__content.current').removeClass('current');
            $('.main-tabs__content.step1').addClass('current');
            $(this).siblings().removeClass('step2').addClass('step1');
            var stepPrev = $('.main-tabs__content.current').attr('data-step');
            $('.main-calc-form__steps .calc-step').removeClass('current');
            $('.main-calc-form__steps .calc-step.' + stepPrev).addClass('current');
            $(this).addClass('disabled');
        }

        if ($(this).siblings().hasClass('step3')) {
            var current_class,
                classList = $('.main-tabs__content.current').attr('class').split(/\s+/);
            $.each(classList, function (index, item) {
                if (item != 'main-tabs__content' && item != 'current') {
                    current_class = item;
                }
            });
            $('.materials-list__item,.additional-list').removeClass('active');
            $('.main-tabs__content.current').removeClass('current');
            $('.main-tabs__content[data-class=' + current_class + ']').addClass('current');
            $(this).siblings().removeClass('step3').addClass('step2');
            var stepPrev = $('.main-tabs__content.current').attr('data-step');
            $('.main-calc-form__steps .calc-step').removeClass('current');
            $('.main-calc-form__steps .calc-step.' + stepPrev).addClass('current');
        }
        /*клик на Назад на 4 шаге */

        if ($(this).siblings().hasClass('step4')) {
            var current_class = $('div.step4').attr('type') + '-step3';
            $('.main-tabs__content.current').removeClass('current');
            $('.main-tabs__content.' + current_class).addClass('current');
            $(this).siblings().removeClass('step4').removeClass('disabled').addClass('step3');
            var stepPrev = $('.main-tabs__content.current').attr('data-step');
            $('.main-calc-form__steps .calc-step').removeClass('current');
            $('.main-calc-form__steps .calc-step.' + stepPrev).addClass('current');
        }

    });
    $('.stac1-step3 .materials__top .img-item').on('click', function () {
        $('.stac1-step3 .materials__top .img-item').removeClass('active');
        $(this).addClass('active');

        $('.stac1-step3 .materials__bottom').show();
        $('.stac1-step3 .materials__bottom .per-type').removeClass('active');
        $('.stac1-step3 .materials__bottom .per-type#per-' + $(this).attr('id')).addClass('active');
        $('.stac1-step3 .materials__bottom-left').attr('data-type', $(this).attr('id'));
    });

    $('.stac2-step3 .materials__top .img-item').on('click', function () {
        $('.stac2-step3 .materials__top .img-item').removeClass('active');
        $(this).addClass('active');
        $('.stac2-step3 .materials__bottom').show();
        $('.stac2-step3 .materials__bottom .per-type').removeClass('active');
        $('.stac2-step3 .materials__bottom .per-type#per-' + $(this).attr('id')).addClass('active');
        $('.stac2-step3 .materials__bottom-left').attr('data-type', $(this).attr('id'));
    });

    $('.mob-step3 .materials__top .img-item').on('click', function () {
        $('.mob-step3 .materials__top .img-item').removeClass('active');
        $(this).addClass('active');
        $('.mob-step3 .materials__bottom').show();
        $('.mob-step3 .materials__bottom .per-type').removeClass('active');
        $('.mob-step3 .materials__bottom .per-type#per-' + $(this).attr('id')).addClass('active');
        $('.mob-step3 .materials__bottom-left').attr('data-type', $(this).attr('id'));
        reloadUl();
        var type = $('.step4').attr('type');
    });
    $('.stac1-step3 .materials__top .img-item').on('click', function () {
        $('.stac1-step3 .materials__top .img-item').removeClass('active');
        $(this).addClass('active');
        $('.stac1-step3 .materials__bottom .per-type').removeClass('active');
        $('.stac1-step3 .materials__bottom .per-type#per-' + $(this).attr('id')).addClass('active');
        $('.stac1-step3 .materials__bottom-left').attr('data-type', $(this).attr('id'));
        reloadUl();
        var type = $('.step4').attr('type');
    });
    $('.stac2-step3 .materials__top .img-item').on('click', function () {
        $('.stac2-step3 .materials__top .img-item').removeClass('active');
        $(this).addClass('active');
        $('.stac2-step3 .materials__bottom .per-type').removeClass('active');
        $('.stac2-step3 .materials__bottom .per-type#per-' + $(this).attr('id')).addClass('active');
        $('.stac2-step3 .materials__bottom-left').attr('data-type', $(this).attr('id'));
        reloadUl();
        var type = $('.step4').attr('type');
    });


});
function calcForm() {
    var type = $('.step4').attr('type');
    $('.step4').find('.input_form').remove();
    if (type == 'stekl') {
        var height = $('.step4').attr('data-height');
        var length = $('.step4').attr('data-length');
        var zapoln = $('.step4').attr('data-zapoln');
        var door = $('.step4').attr('data-door');
        var prof_zagim = length * 2 * 1219;
        var prof_krih = length * 4 * 414;
        var count_door = 1.89 * door;
        var square_door = door * 1.89;
        var square_peregorod = height * length - square_door;
        var square_total = square_door + square_peregorod;


        $('#calc-form').append('<input type="hidden" class="input_form" value="Цельностеклянные" name="type"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + height + '" name="height"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + length + '" name="length"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + door + '" name="door"/>');
        if (zapoln == 1) {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло прозрачное закаленное" name="zapoln"/>');
        } else {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло матовое закаленное" name="zapoln"/>');
        }

        if (zapoln == 1) {
            var steklo = (height * length - 1.89 * door) * 5800;
            var door_summ = door * 27939;
        } else {
            var steklo = (height * length - 1.89 * door) * 7200;
            var door_summ = door * 30452;
        }

        var trip = Math.ceil(height * length / 70) * 7000;
        var razgruzka = height * length * 25 * 12;
        var montag = (height * length - 1.89 * door) * 1380;
        var montag_door = door * 3100;
        var all_price = prof_zagim + prof_krih + steklo + door_summ + trip + razgruzka + montag + montag_door;
        var kf = 1;

        if (all_price < 50000) {
            kf = 1.15;
        } else if (all_price > 50000 && all_price < 100000) {
            kf = 1.1;
        } else if (all_price > 100000 && all_price < 200000) {
            kf = 1;
        } else if (all_price > 200000 && all_price < 500000) {
            kf = 0.9;
        } else if (all_price > 500000) {
            kf = 0.85;
        }


        var montag_step1 = (prof_zagim + prof_krih + steklo + door_summ) * kf;
        var montag_step2 = (trip + razgruzka + montag + montag_door) * kf;
        all_price = all_price * kf;
        square_total = (parseInt(square_total * 100)) / 100;
        var html = "<div class=\"prices__item\">" + "  <div class=\"title\">Материалы для перегородок (" + square_total + " м<sup>2</sup>) в т.ч. двери (" + door + " шт)</div>\n" + "  <div class=\"value\">" + montag_step1.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__item\">" + "  <div class=\"title\">Доставка, разгрузка, монтажные работы</div>\n" + "  <div class=\"value\">" + montag_step2.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__total\"><span>Итоговая сумма</span>\n" + "  <div class=\"value\">" + all_price.toFixed(2) + " RUB</div>\n" + "  <div class=\"note\">Расчет имеет приблизительный характер. Для получения точного расчета обратитесь к менеджеру</div>\n" + "</div>";
        $('.step4 .prices').html(html);

        $('#calc-form').append('<input type="hidden" class="input_form" value="' + all_price.toFixed(2) + '" name="price">');

    } else if (type == 'santeh') {
        var height = $('.step4').attr('data-height');
        var length = $('.step4').attr('data-length');
        var count = $('.step4').attr('data-count');
        var door = $('.step4').attr('data-door');
        var length_raschet = parseFloat(length) + parseFloat(height * count);
        var square = length_raschet * 2; // площадь перегородок

        $('#calc-form').append('<input type="hidden" class="input_form" value="Сантехническая" name="type"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + height + '" name="height"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + length + '" name="length"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + count + '" name="count_stenok"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + door + '" name="door"/>');

        var komplect = length_raschet * 4075;
        var profil = (2 * count + 2) * 2 * 345;
        var price_koplect = door * 4354;

        var trip = Math.ceil(square / 70) * 7000;
        var razgruzka = square * 15 * 12;
        var montag = square * 900;

        if (montag < 10000) {
            montag = 10000;
        }
        var all_price = komplect + profil + price_koplect + trip + razgruzka + montag;
        var kf = 1;

        if (all_price < 50000) {
            kf = 1.15;
        } else if (all_price > 50000 && all_price < 100000) {
            kf = 1.1;
        } else if (all_price > 100000 && all_price < 200000) {
            kf = 1;
        } else if (all_price > 200000 && all_price < 500000) {
            kf = 0.9;
        } else if (all_price > 500000) {
            kf = 0.85;
        }


        var montag_step1 = (komplect + profil + price_koplect) * kf;
        var montag_step2 = (trip + razgruzka + montag) * kf;
        all_price = all_price * kf;
        square = (parseInt(square * 100)) / 100;
        var html = "<div class=\"prices__item\">" + "  <div class=\"title\">Материалы для перегородок (" + square + " м<sup>2</sup>) в т.ч. двери (" + door + " шт)</div>\n" + "  <div class=\"value\">" + montag_step1.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__item\">" + "  <div class=\"title\">Доставка, разгрузка, монтажные работы</div>\n" + "  <div class=\"value\">" + montag_step2.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__total\"><span>Итоговая сумма</span>\n" + "  <div class=\"value\">" + all_price.toFixed(2) + " RUB</div>\n" + "  <div class=\"note\">Расчет имеет приблизительный характер. Для получения точного расчета обратитесь к менеджеру</div>\n" + "</div>";
        $('.step4 .prices').html(html);

        $('#calc-form').append('<input type="hidden" class="input_form" value="' + all_price.toFixed(2) + '" name="price">');

    } else if (type == 'mob') {

        var height = parseFloat($('.step4').attr('data-height'));
        var length = parseFloat($('.step4').attr('data-length'));
        var count = $('.step4').attr('data-count');
        var struct = $('.step4').attr('data-struct');


        $('#calc-form').append('<input type="hidden" class="input_form" value="Мобильные" name="type"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + height + '" name="height"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + length + '" name="length"/>');
        if (struct == 'type1') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 1" name="struct"/>');
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_z"/>');
            }
        } else if (struct == 'type2') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 2" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            }
        } else if (struct == 'type3') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 3" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            }
        }



        if (struct == 'type1') {
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                var price_z = 1862
            } else if (struct_z == 'type2') {
                var price_z = 2850
            } else if (struct_z == 'type3') {
                var price_z = 2755
            } else if (struct_z == 'type4') {
                var price_z = 3990
            } else if (struct_z == 'type5') {
                var price_z = 919
            }
            var square = height * length; // площадь перегородок
            var komplect = length * 2555;
            var stoyka = (square + height) * 792;
            var opora = (square + height) * 322;
            var zapoln = square * price_z;
            var uplotn = square * 2 * 68;

        } else if (struct == 'type2') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                var price_b = 1862
            } else if (struct_b == 'type2') {
                var price_b = 2850
            } else if (struct_b == 'type3') {
                var price_b = 2755
            } else if (struct_b == 'type4') {
                var price_b = 3990
            } else if (struct_b == 'type5') {
                var price_b = 919
            }
            if (struct_s == 'type1') {
                var price_s = 1862
            } else if (struct_s == 'type2') {
                var price_s = 2850
            } else if (struct_s == 'type3') {
                var price_s = 2755
            } else if (struct_s == 'type4') {
                var price_s = 3990
            } else if (struct_s == 'type5') {
                var price_s = 919
            }

            var square = height * length; // площадь перегородок
            var komplect = length * 3876;
            var stoyka = (square + height) * 792;
            var opora = (square + height) * 322;
            var zapoln = (length * ((height / 3) * 2) * price_b) + (length * (height / 3) * price_s);
            var uplotn = square * 2 * 68;


        } else if (struct == 'type3') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');

            if (struct_b == 'type1') {
                var price_b = 1862
            } else if (struct_b == 'type2') {
                var price_b = 2850
            } else if (struct_b == 'type3') {
                var price_b = 2755
            } else if (struct_b == 'type4') {
                var price_b = 3990
            } else if (struct_b == 'type5') {
                var price_b = 919
            }
            if (struct_s == 'type1') {
                var price_s = 1862
            } else if (struct_s == 'type2') {
                var price_s = 2850
            } else if (struct_s == 'type3') {
                var price_s = 2755
            } else if (struct_s == 'type4') {
                var price_s = 3990
            } else if (struct_s == 'type5') {
                var price_s = 919
            }


            var square = height * length; // площадь перегородок
            var komplect = length * 3876;
            var stoyka = (square + height) * 792;
            var opora = (square + height) * 322;
            var zapoln = (length * ((height / 3) * 2) * price_b) + (length * (height / 3) * price_s);
            var uplotn = square * 2 * 68;

        }

        var trip = Math.ceil(square / 70) * 7000;
        var montag = square * 550;
        if (montag < 7500) {
            montag = 7500;
        }
        var razgruzka = square * 15 * 12;
        var all_price = komplect + stoyka + opora + zapoln + uplotn + trip + razgruzka + montag;
        var kf = 1;

        if (all_price < 50000) {
            kf = 1.15;
        } else if (all_price > 50000 && all_price < 100000) {
            kf = 1.1;
        } else if (all_price > 100000 && all_price < 200000) {
            kf = 1;
        } else if (all_price > 200000 && all_price < 500000) {
            kf = 0.9;
        } else if (all_price > 500000) {
            kf = 0.85;
        }

        var montag_step1 = (komplect + stoyka + opora + zapoln + uplotn) * kf;
        var montag_step2 = (trip + razgruzka + montag) * kf;
        all_price = all_price * kf;
        square = (parseInt(square * 100)) / 100;
        var html = "<div class=\"prices__item\">" + "  <div class=\"title\">Материалы для перегородок (" + square + " м<sup>2</sup>) </div>\n" + "  <div class=\"value\">" + montag_step1.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__item\">" + "  <div class=\"title\">Доставка, разгрузка, монтажные работы</div>\n" + "  <div class=\"value\">" + montag_step2.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__total\"><span>Итоговая сумма</span>\n" + "  <div class=\"value\">" + all_price.toFixed(2) + " RUB</div>\n" + "  <div class=\"note\">Расчет имеет приблизительный характер. Для получения точного расчета обратитесь к менеджеру</div>\n" + "</div>";
        $('.step4 .prices').html(html);

        $('#calc-form').append('<input type="hidden" class="input_form" value="' + all_price.toFixed(2) + '" name="price">');


    } else if (type == 'stac1') {

        var height = parseFloat($('.step4').attr('data-height'));
        var length = parseFloat($('.step4').attr('data-length'));
        var count = $('.step4').attr('data-count');
        var struct = $('.step4').attr('data-struct');
        var door = $('.step4').attr('data-door');
        var square_door = door * 1.6;


        $('#calc-form').append('<input type="hidden" class="input_form" value="Стационарные заполнение 1 слой" name="type"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + height + '" name="height"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + length + '" name="length"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + door + '" name="door"/>');
        if (struct == 'type1') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 1" name="struct"/>');
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_z"/>');
            } else if (struct_z == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_z"/>');
            } else if (struct_z == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_z"/>');
            }
        } else if (struct == 'type2') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 2" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            } else if (struct_b == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_v"/>');
            } else if (struct_b == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_v"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            } else if (struct_s == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_n"/>');
            } else if (struct_s == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_n"/>');
            }
        } else if (struct == 'type3') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 3" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            } else if (struct_b == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_n"/>');
            } else if (struct_b == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_n"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            } else if (struct_s == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_v"/>');
            } else if (struct_s == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_v"/>');
            }
        }

        if (struct == 'type1') {
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                var price_z = 1862
                var door_pr = 28600
            } else if (struct_z == 'type2') {
                var price_z = 2850
                var door_pr = 29860
            } else if (struct_z == 'type3') {
                var price_z = 2755
                var door_pr = 28600
            } else if (struct_z == 'type4') {
                var price_z = 3990
                var door_pr = 29860
            } else if (struct_z == 'type5') {
                var price_z = 919
                var door_pr = 34000
            } else if (struct_z == 'type6') {
                var price_z = 3857
                var door_pr = 35000
            } else if (struct_z == 'type7') {
                var price_z = 4750
                var door_pr = 35000
            }
            var square = height * length; // площадь перегородок
            var komplect = length * 4286;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = (square - square_door) * price_z;
            var uplotn = square * 2 * 44;
            var vitraz = square * 2 * 499;
            var dver_price = door * parseFloat(door_pr);

        } else if (struct == 'type2') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');

            if (struct_b == 'type1') {
                var price_b = 1862
                var door_pr = 28600
            } else if (struct_b == 'type2') {
                var price_b = 2850
                var door_pr = 29860
            } else if (struct_b == 'type3') {
                var price_b = 2755
                var door_pr = 28600
            } else if (struct_b == 'type4') {
                var price_b = 3990
                var door_pr = 29860
            } else if (struct_b == 'type5') {
                var price_b = 919
                var door_pr = 34000
            } else if (struct_b == 'type6') {
                var price_b = 3857
                var door_pr = 35000
            } else if (struct_b == 'type7') {
                var price_b = 4750
                var door_pr = 35000
            }
            if (struct_s == 'type1') {
                var price_s = 1862
            } else if (struct_s == 'type2') {
                var price_s = 2850
            } else if (struct_s == 'type3') {
                var price_s = 2755
            } else if (struct_s == 'type4') {
                var price_s = 3990
            } else if (struct_s == 'type5') {
                var price_s = 919
            } else if (struct_s == 'type6') {
                var price_s = 3857
            } else if (struct_s == 'type7') {
                var price_s = 4750
            }

            var square = height * length; // площадь перегородок
            var komplect = length * 6972;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = ((length * (height - 1)) - (door * 0.8)) * price_b + price_s * (length - (door * 0.8));
            var uplotn = square * 2 * 44;
            var vitraz = square * 2 * 499;
            var dver_price = door * parseFloat(door_pr);




        } else if (struct == 'type3') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');

            if (struct_b == 'type1') {
                var price_b = 1862
            } else if (struct_b == 'type2') {
                var price_b = 2850
            } else if (struct_b == 'type3') {
                var price_b = 2755
            } else if (struct_b == 'type4') {
                var price_b = 3990
            } else if (struct_b == 'type5') {
                var price_b = 919
            } else if (struct_b == 'type6') {
                var price_b = 3857
            } else if (struct_b == 'type7') {
                var price_b = 4750
            }
            if (struct_s == 'type1') {
                var price_s = 1862
                var door_pr = 28600
            } else if (struct_s == 'type2') {
                var price_s = 2850
                var door_pr = 29860
            } else if (struct_s == 'type3') {
                var price_s = 2755
                var door_pr = 28600
            } else if (struct_s == 'type4') {
                var price_s = 3990
                var door_pr = 29860
            } else if (struct_s == 'type5') {
                var price_s = 919
                var door_pr = 34000
            } else if (struct_s == 'type6') {
                var price_s = 3857
                var door_pr = 35000
            } else if (struct_s == 'type7') {
                var price_s = 4750
                var door_pr = 35000
            }


            var square = height * length; // площадь перегородок
            var komplect = length * 6972;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = (length * (height - 2)) * price_s + price_b * (length * 2 - square_door);
            var uplotn = square * 2 * 44;
            var vitraz = square * 2 * 499;
            var dver_price = door * parseFloat(door_pr);

        }

        var trip = Math.ceil(square / 70) * 7000;
        var montag = square * 1200;
        if (montag < 10000) {
            montag = 10000;
        }
        var razgruzka = square * 15 * 12;
        var all_price = komplect + stoyka + naschelnik + dver_price + steklo + uplotn + vitraz + trip + razgruzka + montag;
        var kf = 1;

        if (all_price < 50000) {
            kf = 1.15;
        } else if (all_price > 50000 && all_price < 100000) {
            kf = 1.1;
        } else if (all_price > 100000 && all_price < 200000) {
            kf = 1;
        } else if (all_price > 200000 && all_price < 500000) {
            kf = 0.9;
        } else if (all_price > 500000) {
            kf = 0.85;
        }
        var montag_step1 = (komplect + stoyka + naschelnik + dver_price + steklo + uplotn + vitraz) * kf;
        var montag_step2 = (trip + razgruzka + montag) * kf;

        all_price = all_price * kf;
        square = (parseInt(square * 100)) / 100;
        var html = "<div class=\"prices__item\">" + "  <div class=\"title\">Материалы для перегородок (" + square + " м<sup>2</sup>) </div>\n" + "  <div class=\"value\">" + montag_step1.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__item\">" + "  <div class=\"title\">Доставка, разгрузка, монтажные работы</div>\n" + "  <div class=\"value\">" + montag_step2.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__total\"><span>Итоговая сумма</span>\n" + "  <div class=\"value\">" + all_price.toFixed(2) + " RUB</div>\n" + "  <div class=\"note\">Расчет имеет приблизительный характер. Для получения точного расчета обратитесь к менеджеру</div>\n" + "</div>";
        $('.step4 .prices').html(html);

        $('#calc-form').append('<input type="hidden" class="input_form" value="' + all_price.toFixed(2) + '" name="price">');


    } else if (type == 'stac2') {

        var height = parseFloat($('.step4').attr('data-height'));
        var length = parseFloat($('.step4').attr('data-length'));
        var count = $('.step4').attr('data-count');
        var struct = $('.step4').attr('data-struct');
        var door = $('.step4').attr('data-door');
        var square_door = door * 1.6;

        $('#calc-form').append('<input type="hidden" class="input_form" value="Стационарные заполнение 2 слоя" name="type"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + height + '" name="height"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + length + '" name="length"/>');
        $('#calc-form').append('<input type="hidden" class="input_form" value="' + door + '" name="door"/>');
        if (struct == 'type4') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 1" name="struct"/>');
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_z"/>');
            } else if (struct_z == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_z"/>');
            } else if (struct_z == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_z"/>');
            } else if (struct_z == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_z"/>');
            } else if (struct_z == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_z"/>');
            }
        } else if (struct == 'type5') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 2" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            } else if (struct_b == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_v"/>');
            } else if (struct_b == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_v"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            } else if (struct_s == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_n"/>');
            } else if (struct_s == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_n"/>');
            }
        } else if (struct == 'type6') {
            $('#calc-form').append('<input type="hidden" class="input_form" value="Структура 3" name="struct"/>');
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');
            if (struct_b == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_n"/>');
            } else if (struct_b == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_n"/>');
            } else if (struct_b == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_n"/>');
            } else if (struct_b == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_n"/>');
            } else if (struct_b == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_n"/>');
            }
            if (struct_s == 'type1') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type2') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type3') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм прозрачное" name="struct_v"/>');
            } else if (struct_s == 'type4') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм матовое" name="struct_v"/>');
            } else if (struct_s == 'type5') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="ЛДСП" name="struct_v"/>');
            } else if (struct_s == 'type6') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло сырое 5мм с жалюзи" name="struct_v"/>');
            } else if (struct_s == 'type7') {
                $('#calc-form').append('<input type="hidden" class="input_form" value="Стекло закаленное 5мм с жалюзи" name="struct_v"/>');
            }
        }

        if (struct == 'type4') {
            var struct_z = $('.step4').attr('data-struct-z');
            if (struct_z == 'type1') {
                var price_z = 1862
                var door_pr = 29860
            } else if (struct_z == 'type2') {
                var price_z = 2850
                var door_pr = 31120
            } else if (struct_z == 'type3') {
                var price_z = 2755
                var door_pr = 29860
            } else if (struct_z == 'type4') {
                var price_z = 3990
                var door_pr = 31120
            } else if (struct_z == 'type5') {
                var price_z = 919
                var door_pr = 34000
            } else if (struct_z == 'type6') {
                var price_z = 3857
                var door_pr = 35000
            } else if (struct_z == 'type7') {
                var price_z = 4750
                var door_pr = 35000
            }
            var square = height * length; // площадь перегородок
            var komplect = length * 4249;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = (square - square_door) * 2 * price_z;
            var uplotn = square * 2 * 2 * 44;
            var vitraz = square * 2 * 437;
            var dver_price = door * parseFloat(door_pr);


        } else if (struct == 'type5') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');

            if (struct_b == 'type1') {
                var price_b = 1862
                var door_pr = 29860
            } else if (struct_b == 'type2') {
                var price_b = 2850
                var door_pr = 31120
            } else if (struct_b == 'type3') {
                var price_b = 2755
                var door_pr = 29860
            } else if (struct_b == 'type4') {
                var price_b = 3990
                var door_pr = 31120
            } else if (struct_b == 'type5') {
                var price_b = 919
                var door_pr = 34000
            } else if (struct_b == 'type6') {
                var price_b = 2086
                var door_pr = 28600
            } else if (struct_b == 'type7') {
                var price_b = 2466
                var door_pr = 28600
            }
            if (struct_s == 'type1') {
                var price_s = 1862
            } else if (struct_s == 'type2') {
                var price_s = 2850
            } else if (struct_s == 'type3') {
                var price_s = 2755
            } else if (struct_s == 'type4') {
                var price_s = 3990
            } else if (struct_s == 'type5') {
                var price_s = 919
            } else if (struct_s == 'type6') {
                var price_s = 2086
            } else if (struct_s == 'type7') {
                var price_s = 2466
            }

            var square = height * length; // площадь перегородок
            var komplect = length * 6898;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = ((length * (height - 1)) - (door * 0.8)) * 2 * price_b + price_s * 2 * (length - (door * 0.8));
            var uplotn = square * 2 * 2 * 44;
            var vitraz = square * 2 * 437;
            var dver_price = door * door_pr;
        } else if (struct == 'type6') {
            var struct_b = $('.step4').attr('data-struct-z-b');
            var struct_s = $('.step4').attr('data-struct-z-s');

            if (struct_b == 'type1') {
                var price_b = 1862
            } else if (struct_b == 'type2') {
                var price_b = 2850
            } else if (struct_b == 'type3') {
                var price_b = 2755
            } else if (struct_b == 'type4') {
                var price_b = 3990
            } else if (struct_b == 'type5') {
                var price_b = 919
            } else if (struct_b == 'type6') {
                var price_b = 2086
            } else if (struct_b == 'type7') {
                var price_b = 2466
            }
            if (struct_s == 'type1') {
                var price_s = 1862
                var door_pr = 29860
            } else if (struct_s == 'type2') {
                var price_s = 2850
                var door_pr = 31120
            } else if (struct_s == 'type3') {
                var price_s = 2755
                var door_pr = 29860
            } else if (struct_s == 'type4') {
                var price_s = 3990
                var door_pr = 31120
            } else if (struct_s == 'type5') {
                var price_s = 919
                var door_pr = 34000
            } else if (struct_s == 'type6') {
                var price_s = 2086
                var door_pr = 28600
            } else if (struct_s == 'type7') {
                var price_s = 2466
                var door_pr = 28600
            }


            var square = height * length; // площадь перегородок
            var komplect = length * 6898;
            var stoyka = (square + height) * 851;
            var naschelnik = (square + height) * 2 * 254;
            var steklo = (length * (height - 2)) * 2 * price_s + price_b * (length * 2 - square_door) * 2;
            var uplotn = square * 2 * 2 * 44;
            var vitraz = square * 2 * 437;
            var dver_price = door * door_pr;
        }

        var trip = Math.ceil(square / 70) * 7000;

        var montag = square * 1400;
        if (montag < 10000) {
            montag = 10000;
        }
        var razgruzka = square * 30 * 12;
        var all_price = komplect + stoyka + naschelnik + dver_price + steklo + uplotn + vitraz + trip + razgruzka + montag;
        var kf = 1;

        if (all_price < 50000) {
            kf = 1.15;
        } else if (all_price > 50000 && all_price < 100000) {
            kf = 1.1;
        } else if (all_price > 100000 && all_price < 200000) {
            kf = 1;
        } else if (all_price > 200000 && all_price < 500000) {
            kf = 0.9;
        } else if (all_price > 500000) {
            kf = 0.85;
        }

        console.log(komplect);
        console.log(stoyka);
        console.log(naschelnik);
        console.log(dver_price);
        console.log(steklo);
        console.log(uplotn);
        console.log(vitraz);
        console.log(trip);
        console.log(razgruzka);
        console.log(montag);

        var montag_step1 = (komplect + stoyka + naschelnik + dver_price + steklo + uplotn + vitraz) * kf;
        var montag_step2 = (trip + razgruzka + montag) * kf;

        all_price = all_price * kf;
        square = (parseInt(square * 100)) / 100;
        var html = "<div class=\"prices__item\">" + "  <div class=\"title\">Материалы для перегородок (" + square + " м<sup>2</sup>) </div>\n" + "  <div class=\"value\">" + montag_step1.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__item\">" + "  <div class=\"title\">Доставка, разгрузка, монтажные работы</div>\n" + "  <div class=\"value\">" + montag_step2.toFixed(2) + " RUB</div>\n" + "</div>\n" + "<div class=\"prices__total\"><span>Итоговая сумма</span>\n" + "  <div class=\"value\">" + all_price.toFixed(2) + " RUB</div>\n" + "  <div class=\"note\">Расчет имеет приблизительный характер. Для получения точного расчета обратитесь к менеджеру</div>\n" + "</div>";
        $('.step4 .prices').html(html);

        $('#calc-form').append('<input type="hidden" class="input_form" value="' + all_price.toFixed(2) + '" name="price">');

    }
}

function reloadUl() {
    $('.materials__bottom-center .active').removeClass('active');
    $('.materials__bottom-center .choosen').removeClass('choosen');
}
function setTypeZ(this_obj) {

    var type = $('.step4').attr('type');
    var type_z = this_obj.attr('data-type-z');
    var data = new Map([
        ['type1', 'Стекло сырое 5мм прозрачное'],
        ['type2', 'Стекло сырое 5мм матовое'],
        ['type3', 'Стекло закаленное 5мм прозрачное'],
        ['type4', 'Стекло закаленное 5мм матовое'],
        ['type5', 'ЛДСП'],
        ['type6', 'Стекло сырое 5мм с жалюзи'],
        ['type7', 'Стекло закаленное 5мм с жалюзи']
    ]);
    var data_stekl = new Map([
        ['type1', 'Стекло 10мм Прозрачное закаленное'],
        ['type2', 'Стекло 10мм Матовое закаленное'],
    ]);
    if (type == 'stekl') {
        $('.step4').attr('data-zapoln', this_obj.attr('type'));
        var type_z = this_obj.attr('type');
    } else if (type == 'mob') {
        var type_step3 = $('.mob-step3 .materials__bottom-left').attr('data-type');
        if (type_step3 == 'type2') {
            $('.mob-step3 .materials__bottom-left #per-type2 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else if (type_step3 == 'type3') {
            $('.mob-step3 .materials__bottom-left #per-type3 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else {
            $('.mob-step3 .materials__bottom-left #per-type1 .full-part').attr('data-type-z', type_z).addClass('active').css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        }
    } else if (type == 'stac1') {
        var type_step3 = $('.stac1-step3 .materials__bottom-left').attr('data-type');
        if (type_step3 == 'type2') {
            $('.stac1-step3 .materials__bottom-left #per-type2 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else if (type_step3 == 'type3') {
            $('.stac1-step3 .materials__bottom-left #per-type3 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else {
            $('.stac1-step3 .materials__bottom-left #per-type1 .full-part').attr('data-type-z', type_z).addClass('active').css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        }
    } else if (type == 'stac2') {
        var type_step3 = $('.stac2-step3 .materials__bottom-left').attr('data-type');
        if (type_step3 == 'type5') {
            $('.stac2-step3 .materials__bottom-left #per-type5 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else if (type_step3 == 'type6') {
            $('.stac2-step3 .materials__bottom-left #per-type6 .active').attr('data-type-z', type_z).css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        } else {
            $('.stac2-step3 .materials__bottom-left #per-type4 .full-part').attr('data-type-z', type_z).addClass('active').css('box-shadow', '0 2px 14px 0 rgba(41, 255, 126, 0.8)');
        }
    }

    if (type != 'stekl') {
        $('.current .per-type.active .part.active .result').html(data.get(type_z));
    } else {
        $('.current .per-type.active .part.active .result').html(data_stekl.get('type' + type_z));
    }
    $('.current .per-type.active .part.active .icon-plus').hide();
}

//# sourceMappingURL=index.js.map

$(document).on('af_complete', function (event, response) {
    var form = response.form;
    // форма на главной наверху
    if (form.attr('id') == 'main-form') {
        if (response['success'] === true) {
            //form.hide();
            $('#thankyou-popup').show();
            setTimeout(
                function () { $('#thankyou-popup').hide() }, 5000
            );
            //window.location.href = "/spasibo/"
        } else {
            console.log(response);
        }
    }
    else {
        console.log(response);
    }

    if (form.attr('id') == 'callback-form') {
        if (response['success'] === true) {
            //form.hide();
            $('#thankyou-popup-down').show();
            setTimeout(
                function () { $('#thankyou-popup-down').hide() }, 5000
            );
            //window.location.href = "/spasibo/"
        } else {
            console.log(response);
        }
    }
    else {
        console.log(response);
    }
    // форма справа от калькулятора
    if (form.attr('id') == 'callback-calc-form') {
        if (response['success'] === true) {
            //form.hide();
            $('#thankyou-popup').show();
            setTimeout(
                function () { $('#thankyou-popup').hide() }, 5000
            );
            //window.location.href = "/spasibo/"
        } else {
            console.log(response);
        }
    }
    else {
        console.log(response);
    }

    if (form.attr('id') == 'calc-form') {
        if (response['success'] === true) {
            //form.hide();
            $('#thankyou-popup').show();
            setTimeout(
                function () { $('#thankyou-popup').hide() }, 5000
            );
            //window.location.href = "/spasibo/"
        } else {
            console.log(response);
        }
    }
    else {
        console.log(response);
    }



});


