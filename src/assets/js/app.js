document.addEventListener("DOMContentLoaded", () => {


    //= components/

    Fancybox.bind("[data-fancybox]", {
        Thumbs: false
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
            watchSlidesProgress: true,
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
        constructor(modalSelector) {
            this.modal = document.querySelector(modalSelector);
            this.initOpenButtons(modalSelector);
            this.initCloseButton();
        }

        initOpenButtons(modalSelector) {
            const buttons = document.querySelectorAll(`[data-modal="${modalSelector}"]`);
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    this.open();
                    this.disableBodyScroll();
                });
            });
        }

        initCloseButton() {
            if (this.modal) {
                const closeButton = this.modal.querySelector('.close');
                if (closeButton) {
                    closeButton.addEventListener('click', () => {
                        this.close();
                        this.enableBodyScroll();
                    });
                }
            }

            window.addEventListener('click', (event) => {
                if (this.modal && event.target === this.modal) {
                    this.close();
                    this.enableBodyScroll();
                }
            });
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

    const modalButtons = document.querySelectorAll('[data-modal-target]');

    modalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modalSelector = button.dataset.modalTarget;
            const modal = new Modal(modalSelector);
            modal.open();
            modal.disableBodyScroll();
        });
    });

    const thanksModal = new Modal('#thanks-modal');

    let sendBtn = document.querySelectorAll('.send');
    sendBtn.forEach(e => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            
            document.querySelectorAll('.modal.open').forEach(modal => {
                if (modal !== thanksModal.modal) {
                    modal.style.display = 'none';
                    modal.classList.remove('open');
                }
            });
            thanksModal.open();
        });
    });

    class Tabs {
        constructor(containerId) {
            this.container = document.getElementById(containerId);
            this.buttons = this.container.querySelectorAll('ul .button');
            this.contents = this.container.querySelectorAll('.tab-content');
            this.initTabs();
        }

        initTabs() {
            this.buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    this.changeTab(tabId);
                });
            });

            // Установка первой вкладки активной по умолчанию
            if (this.buttons.length > 0 && this.contents.length > 0) {
                this.buttons[0].classList.add('--active');
                this.contents[0].classList.add('--active');
                this.contents[0].style.display = 'block';
            }
        }

        changeTab(tabId) {
            const activeContent = this.container.querySelector('.tab-content.--active');

            if (activeContent) {
                activeContent.addEventListener('transitionend', () => {
                    activeContent.style.display = 'none';
                }, { once: true });
            }

            // Удаляем класс active у всех кнопок и контента
            this.buttons.forEach(btn => btn.classList.remove('--active'));
            this.contents.forEach(content => content.classList.remove('--active'));

            // Добавляем класс active нужной кнопке и контенту
            const newActiveButton = this.container.querySelector(`ul .button[data-tab="${tabId}"]`);
            const newActiveContent = this.container.querySelector(`#${tabId}`);

            newActiveButton.classList.add('--active');
            newActiveContent.classList.add('--active');
            newActiveContent.style.display = 'block';
        }
    }

    if (document.querySelector('.portfolio')) {
        const portfolioTabs = new Tabs('portfolio-tabs');
    }

    if (document.querySelector('.contacts')) {
        const contactsTabs = new Tabs('contacts-tabs');
    }


    if (window.matchMedia("(max-width: 1330px)").matches) {
        const burgerModalContent = document.querySelector('.burger-modal-content');
        const header = document.querySelector('.header');

        burgerModalContent.innerHTML = header.innerHTML;

        // Предположим, что у вас есть кнопка внутри .header, которая открывает модальное окно
        const modalButton = burgerModalContent.querySelector('[data-modal-target]');
        if (modalButton) {
            const modalSelector = modalButton.dataset.modalTarget;
            const modal = new Modal(modalSelector);
            modalButton.addEventListener('click', function () {
                modal.open();
                modal.disableBodyScroll();
            });
        }

        new Modal('#callBack-modal');
    }

    const burger = document.querySelector(".header__burger");
    const burgerModalContainer = document.querySelector('.burger-modal');

    if (burger) {
        burger.addEventListener("click", function () {
            this.classList.toggle("active");

            const burgerModal = new Modal("#burger-modal");

            if (this.classList.contains("active")) {
                burgerModalContainer.style.top = document.querySelector('header').scrollHeight + "px";

                burgerModal.disableBodyScroll();
                burgerModal.open();

                const burgerModalContent = document.querySelector('.burger-modal-content');
                burgerModalContent.style.height = burgerModalContent.scrollHeight + document.querySelector('.burger-modal-content .header__menu').scrollHeight + 'px';

                const header = document.querySelector('.header');
                if (header.classList.contains('transparent')) {
                    header.style.background = "var(--white)";
                    const headerLogoP = document.querySelector('.header__logo p');
                    headerLogoP.style.backgroundImage = "linear-gradient(to right, var(--black), var(--black) 50%, var(--blue) 50%)";
                    headerLogoP.style.backgroundPosition = "0";
                }

            } else {
                burgerModal.close();
                burgerModal.enableBodyScroll();

                const header = document.querySelector('.header');
                if (header.classList.contains('transparent')) {
                    header.style.background = "transparent";
                    const headerLogoP = document.querySelector('.header__logo p');
                    headerLogoP.style.backgroundImage = null;
                    headerLogoP.style.backgroundPosition = "100%";
                }
            }
        });
    }

    let acc = document.querySelectorAll(".burger-modal-content .header__menu button");
    let i;

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            let content = document.querySelector('.burger-modal-content');
            let currentHeight = parseFloat(getComputedStyle(content).height); // текущая высота

            for (let j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    let otherPanel = acc[j].nextElementSibling;
                    acc[j].classList.remove("active");
                    otherPanel.style.paddingTop = "0rem";
                    otherPanel.style.maxHeight = null;
                }
            }

            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.paddingTop = "0rem";
                panel.style.maxHeight = null;
                currentHeight -= panel.scrollHeight; // вычитаем высоту панели, если она была открыта
            } else {
                panel.style.paddingTop = "1rem";
                panel.style.maxHeight = panel.scrollHeight + "px";
                document.querySelector('.burger-modal').style.backgroundColor = "var(--white)";
                currentHeight += panel.scrollHeight; // добавляем высоту панели, если она была закрыта
            }

            // Обновляем общую высоту контента
            content.style.height = currentHeight + 'px';
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
                opacity: 1,
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


    let counter = 0;
    const calculatorTabs = document.querySelectorAll('.calculator__tab-container');
    const calculatorButtonPrev = document.querySelector('.calculator__buttons button:first-child');
    const calculatorButtonNext = document.querySelector('.calculator__buttons button:last-child');
    const stepElements = document.querySelectorAll('.calculator__title ul li');

    const updateCalculatorTabsTitle = () => {
        const activeTabContent = document.querySelector('.calculator__tab-container:not([style*="display: none"])');

        if (activeTabContent) {
            const activeTabH2 = activeTabContent.querySelector('h2');

            if (activeTabH2) {
                animateTitleChange(activeTabH2.textContent);
            }
        }
    };

    const updateTabVisibility = () => {
        const oldTab = document.querySelector('.calculator__tab-container:not([style*="display: none"])');

        if (oldTab) {
            gsap.to(oldTab, {
                opacity: 0,
                x: '-100%',  // Move the tab to the left
                duration: 0.5,
                onComplete: () => {
                    oldTab.style.display = 'none';  // Set display to none after animation
                    showNewTab();
                }
            });
        } else {
            showNewTab();
        }
    };

    const showNewTab = () => {
        const newTab = calculatorTabs[counter];

        if (newTab) {
            newTab.style.display = '';  // Make sure the new tab is visible for the animation
            gsap.fromTo(newTab, {
                opacity: 0,
                x: '100%'
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5
            });
        }

        // Если текущий таб - последний, то скрываем кнопку "Дальше"
        if (counter === calculatorTabs.length - 1) {
            calculatorButtonNext.style.display = 'none';
        } else {
            calculatorButtonNext.style.display = '';
        }

        updateCalculatorTabsTitle();
    };

    const animateTitleChange = (newTitle) => {
        const calculatorTabsH2 = document.querySelector('.calculator__tabs h2');

        if (calculatorTabsH2) {
            gsap.to(calculatorTabsH2, {
                opacity: 0,
                y: '-50%',
                duration: 0.3,
                onComplete: () => {
                    calculatorTabsH2.textContent = newTitle;
                    gsap.fromTo(calculatorTabsH2, {
                        opacity: 0,
                        y: '50%'
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3
                    });
                }
            });
        }
    };

    const updateActiveStep = () => {
        stepElements.forEach((step, index) => {
            step.classList.toggle('active', index === counter);
        });
    };

    const inputsAreFilled = (tab) => {
        const inputs = tab.querySelectorAll('.calculator__tab-sizes-input input');
        let filled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                filled = false;
                input.classList.add('--error');
            } else {
                input.classList.remove('--error');
            }
        });

        return filled;
    };

    if (calculatorButtonNext) {
        calculatorButtonNext.addEventListener('click', () => {
            const currentTab = calculatorTabs[counter];

            // Если это второй таб и инпуты не заполнены, добавляем класс error и выходим
            if (counter === 1 && !inputsAreFilled(currentTab)) {
                return;
            }

            // Если это третий таб и условия для четвертого таба не выполнены, выходим
            if (counter === 2 && !checkForFourthTab()) {
                return;
            }

            if (counter < calculatorTabs.length - 1) {
                counter++;
                updateTabVisibility();
                updateActiveStep();
            }

            if (window.matchMedia("(max-width: 1024px)").matches) {
                scrollToTop();
            }

        });
    }


    if (calculatorButtonPrev) {
        calculatorButtonPrev.addEventListener('click', () => {
            if (counter > 0) {
                counter--;
                updateTabVisibility();
                updateActiveStep();
            }

            if (window.matchMedia("(max-width: 1024px)").matches) {
                scrollToTop();
            }
        });
    }

    const scrollToTop = () => {
        const ulElement = document.querySelector('.calculator__title ul');

        if (ulElement) {
            ulElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // если элемент не найден, прокрутим страницу к началу, как в вашей изначальной функции
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    if (counter === 0) {
        const firstTabContent = document.querySelector('.calculator__tab-container[data-tab="tab_1"] .calculator__tab-content');
        const calculatorTabListButton = document.querySelectorAll('.calculator__tab-container[data-tab="tab_1"] ul li');
        let hiddenHelperInput = document.querySelector('.hidden-helper-inp')

        calculatorTabListButton.forEach(e => {
            e.addEventListener('click', () => {
                calculatorTabListButton.forEach(el => {
                    el.classList.remove('active');
                });
                e.classList.add('active');
                hiddenHelperInput.value = e.querySelector('button').innerText

                animateContentChange(firstTabContent, e.querySelector("div").innerHTML);
            });
        });
    }

    function animateContentChange(container, newContent) {
        gsap.to(container, {
            opacity: 0,
            y: '-30%',  // Move the content up a bit
            duration: 0.3,
            onComplete: () => {
                container.innerHTML = newContent;
                gsap.fromTo(container, {
                    opacity: 0,
                    y: '30%'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                });
            }
        });
    }

    const firstInput = document.querySelector('.calculator__tab-sizes-input div:first-child input');
    const secondInput = document.querySelector('.calculator__tab-sizes-input div:last-child input');
    const svgInImgContainer = document.querySelector('.calculator__tab-sizes-img-height');
    const lastSvg = document.querySelector('.calculator__tab-sizes-img-width');

    if (firstInput) {
        firstInput.addEventListener('focus', () => {
            svgInImgContainer.classList.add('active');
        });

        firstInput.addEventListener('blur', () => {
            if (firstInput.value.trim() === '') {
                svgInImgContainer.classList.remove('active');
            }
        });
    }


    if (secondInput) {
        secondInput.addEventListener('focus', () => {
            lastSvg.classList.add('active');
        });

        secondInput.addEventListener('blur', () => {
            if (secondInput.value.trim() === '') {
                lastSvg.classList.remove('active');
            }
        });
    }






    const svgImages = document.querySelectorAll('.calculator__tab-inner-img > svg');
    const subTabs = document.querySelectorAll('.calculator__tab-subtab');

    svgImages.forEach(svg => {
        svg.addEventListener('click', () => {
            svgImages.forEach(e => {
                e.classList.remove("active")
            });
            svg.classList.add('active');

            subTabs.forEach(subTab => {
                subTab.style.display = 'none';
            });



            const id = svg.getAttribute('id');
            const correspondingTab = document.querySelector(`.calculator__tab-subtab[data-tab="${id}"]`);
            if (correspondingTab) {
                correspondingTab.style.display = 'flex';
                const textareas = correspondingTab.querySelectorAll('.calculator__textarea-wrapper textarea');
                const helperElement = correspondingTab.querySelector('.calculator__tab-subtab-helper');

                textareas.forEach(textarea => {
                    textarea.addEventListener('focus', function () {
                        if (this.nextElementSibling) {
                            helperElement.innerHTML = this.nextElementSibling.innerHTML;
                            handleNewInnerTabs(this, helperElement);
                        }
                    });
                });
            }

            const activeSubTab = document.querySelector('.calculator__tab-subtab.active');

            if (activeSubTab) {
                gsap.to(activeSubTab, {
                    opacity: 0,
                    x: '-100%',  // Сдвигаем влево
                    duration: 0.5,
                    onComplete: () => {
                        activeSubTab.classList.remove('active'); // Убираем класс активности
                        activeSubTab.style.display = 'none';    // Скрываем блок
                        showTargetSubTab(correspondingTab);     // Показываем целевой блок
                    }
                });
            } else {
                // Если активного subtab нет, то просто показываем целевой
                showTargetSubTab(correspondingTab);
            }
        });
    });


    function showTargetSubTab(targetSubTab) {
        if (targetSubTab) {
            targetSubTab.style.display = 'flex';   // Отображаем блок
            gsap.fromTo(targetSubTab, {
                opacity: 0,
                x: '100%'  // Начальная позиция справа
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                onStart: () => {
                    targetSubTab.classList.add('active');  // Добавляем класс активности
                }
            });
        }
    }

    function handleNewInnerTabs(currentTextarea, helperElement) {
        let finalText = {
            first: "",
            second: "",
            third: ""
        };

        const newInnerTabs = helperElement.querySelectorAll('.calculator__first-lvl-subtub-item-title');
        newInnerTabs.forEach(e => {
            e.addEventListener("click", () => {
                newInnerTabs.forEach(el => {
                    el.classList.remove('active');
                    el.nextElementSibling.style.display = "none";
                });

                e.classList.add('active');
                e.nextElementSibling.style.display = "flex";
                finalText.first = e.innerText + " ";
            });
        });

        const firstLvlSubtubs = helperElement.querySelectorAll('.calculator__first-lvl-subtub-item-subtitle');
        firstLvlSubtubs.forEach(e => {
            e.addEventListener("click", () => {
                firstLvlSubtubs.forEach(el => {
                    el.classList.remove('active');
                    el.nextElementSibling.style.display = "none";
                });

                e.classList.add('active');
                e.nextElementSibling.style.display = "flex";
                finalText.second = e.innerText + " ";
            });
        });

        const thirdLvlSubtubs = helperElement.querySelectorAll('.calculator__third-lvl-subtub-item');
        thirdLvlSubtubs.forEach(e => {
            e.addEventListener("click", () => {
                finalText.third = e.innerText;
                updateTextarea(currentTextarea);

                newInnerTabs.forEach(el => {
                    el.classList.remove('active');
                    el.nextElementSibling.style.display = "none";
                });
            });
        });

        function updateTextarea(activeTextarea) {
            activeTextarea.value = finalText.first + finalText.second + finalText.third;
            activeTextarea.parentElement.classList.add('active');

            const textareas = activeTextarea.closest('.calculator__tab-subtab').querySelectorAll('textarea');
            const areAllFilled = Array.from(textareas).every(textarea => textarea.value.trim() !== "");
            const input = activeTextarea.closest('.calculator__tab-subtab').querySelector('input[type="text"]');

            if (areAllFilled) {
                input.value = "+";
            } else {
                input.value = "";
            }

        }
    }

    function checkForFourthTab() {
        const thirdTab = document.querySelector('.calculator__tab-container[data-tab="tab_3"]');
        const textInputs = thirdTab.querySelectorAll('input[type="text"]');
        // Отбираем только те .calculator__tab-subtab, которые видимы
        const visibleSubtabs = Array.from(thirdTab.querySelectorAll('.calculator__tab-subtab'))
            .filter(subtab => window.getComputedStyle(subtab).display === 'flex');

        // Теперь ищем textarea только в видимых .calculator__tab-subtab
        const textareas = visibleSubtabs.flatMap(subtab => Array.from(subtab.querySelectorAll('.calculator__textarea-wrapper textarea')));

        let canSwitch = false;

        textInputs.forEach(input => {
            if (input.value === "+") {
                canSwitch = true;
            }
        });

        textareas.forEach(textarea => {
            if (textarea.value.trim() === "") {
                textarea.parentElement.classList.add('--error');
            } else {
                textarea.parentElement.classList.remove('--error');
            }
        });

        return canSwitch;
    }


})

