new Swiper('.hero-swiper', {
    effect: 'creative',
    creativeEffect: {
        prev: {
            scale: 1.1,
        },
        next: {
            scale: 1,
        },
    },
    autoplay: {
        delay: 5500
    },
    speed: 300,

    direction: 'horizontal',
    loop: true,

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    }
});

new Swiper('.news-swiper', {
    autoplay: false,
    speed: 300,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        prevEl: '.news-swiper .swiper-button-prev',
        nextEl: '.news-swiper .swiper-button-next',
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

new Swiper('.seo-swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    direction: 'horizontal',
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.seo-swiper .swiper-button-prev',
        nextEl: '.seo-swiper .swiper-button-next',
    },

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    }
});

new Swiper('.reviews-swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: {
        prevEl: '.reviews-swiper .swiper-button-prev',
        nextEl: '.reviews-swiper .swiper-button-next',
    },

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    }
});


// Функия работы dropdown-input
const dropdownInput = document.querySelectorAll('.dropdown-input')

if (!dropdownInput.length) {

} else {

    dropdownInput.forEach(input => {
        input.addEventListener('click', function (e) {
            const dropdownContent = this.querySelector('.dropdown-content')

            if (this.classList.contains('open')) {
                this.classList.remove('open')
                dropdownContent.style.maxHeight = null

            } else {
                this.classList.add('open')
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'

            }
        })

        input.querySelectorAll('.dropdown-content input[type=radio]').forEach(radio => {
            radio.addEventListener('input', function () {
                const inputValue = input.querySelector('.current-value')
                const dropdownContent = input.querySelector('.dropdown-content')
                inputValue.innerText = this.value
                input.classList.remove('open')
                dropdownContent.style.maxHeight = null
            })
        })
    })

    window.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown-input')) {

            document.querySelectorAll('.dropdown-input').forEach(input => {
                input.classList.remove('open')
                input.querySelector('.dropdown-content').style.maxHeight = null
            })
        }
    })
}

// Функия работы accordion
const accordion = document.querySelectorAll('.accordion')

if (!accordion.length) {

} else {
    accordion.forEach(accordionTitle => {
        accordionTitle.querySelector('.accordion-title').addEventListener('click', function (e) {
            e.stopPropagation()
            const accordionContent = accordionTitle.querySelector('.accordion-content')

            if (!this.classList.contains('open')) {
                this.classList.add('open')
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                this.classList.remove('open')
                accordionContent.style.maxHeight = null
            }
        })
    })
}

// Анимация карты
const map = document.querySelectorAll('.map svg')

if (!map.length) {

} else {
    let delay = 0

    const description = document.querySelector('.map .description')

    map.forEach(elem => {
        elem.querySelectorAll('path').forEach(country => {

            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio) {
                        country.style.animation = `zoom-fade 750ms ease ${delay}ms forwards`

                        delay = delay + 25
                    }
                })
            }, {threshold: .6})

            if (window.innerWidth > 991) {
                map.forEach(animate => {
                    observer.observe(animate)
                })
            } else {

            }

            country.addEventListener('mouseover', function () {
                if (country.dataset.disable) {
                    description.querySelector('.circle').style.animationName = 'circle'
                    description.querySelector('.circle-shadow').style.animationName = 'circleShadow'
                    description.querySelector('.line').style.animationName = 'line'
                    description.querySelector('.text').style.animationName = 'fade'

                    let pos = this.getBBox();

                    let x = pos.x + (pos.width / 2)
                    let y = pos.y + (pos.height / 3)

                    if (window.innerWidth < 991) {
                        let x = ((pos.x + (pos.width / 2)) / 880 * 100) * (window.innerWidth / 100)
                        let y = ((pos.y + (pos.height / 2.3)) / 852 * 100) * (elem.clientHeight / 100)

                        description.style.left = x + 'px'
                        description.style.top = y + 'px'
                    }
                    else if (this.id === 'country-5') {
                        description.style.left = pos.x + 30 + 'px'
                        description.style.top = pos.y + (pos.height / 4) + 'px'
                    }

                    else if (this.id === 'country-6') {
                        description.style.left = pos.x + 50 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    }

                    else if (this.id === 'country-8') {
                        description.style.left = pos.x + 30 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    }

                    else if (this.id === 'country-12') {
                        description.style.left = pos.x + (pos.width - 50) + 'px'
                        description.style.top = pos.y + 12 + 'px'
                    }

                    else if (this.id === 'country-13') {
                        description.style.left = pos.x + (pos.width - 50) + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    }

                    else if (this.id === 'country-15') {
                        description.style.left = pos.x + (pos.width / 3.1) + 'px'
                        description.style.top = pos.y + (pos.height / 2.5) + 'px'
                        description.classList.remove('description-revert')
                    }

                    else if (this.id === 'country-24') {
                        description.style.left = pos.x + 10 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    }

                    else {
                        description.style.left = x + 'px'
                        description.style.top = y + 'px'
                    }

                    description.querySelector('.name').innerText = this.dataset.name
                    description.querySelector('.address').innerText = this.dataset.address

                    if (pos.x < 400) {
                        description.classList.add('description-revert')
                    } else {
                        description.classList.remove('description-revert')
                    }
                }
            })

            country.addEventListener('mouseleave', function () {
                const descriptionAllItems = document.querySelectorAll('.map .description *')
                descriptionAllItems.forEach(item => item.style.animationName = 'none')
            })
        })
    })
}


// Функия работы tabs
const tabs = document.querySelectorAll('.tab-btn a')

if (!tabs.length) {

} else {
    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault()

            document.querySelectorAll('.tab-content > div').forEach(elem => elem.classList.remove('show'))

            const id = this.getAttribute('href').replace('#', '')

            if (!this.classList.contains('active')) {
                tabs.forEach(item => item.classList.remove('active'))
                this.classList.add('active')
            }

            document.getElementById(id).classList.add('show')
        })
    })
}

// Анимация иконок в секции hero
const icons = document.querySelectorAll('.hero-icons svg *')

if (!icons.length) {

} else {

    if (window.innerWidth > 991) {
        let time = 2500

        icons.forEach(elem => {
            const length1 = elem.getTotalLength()
            elem.style.strokeDashoffset = length1
            elem.style.strokeDasharray = length1
            elem.style.animationDuration = time + 'ms'
        })
    } else {

    }
}

// Переключение формы
const formBtn = document.querySelector('#form-next-step')

if (!formBtn) {

} else {
    formBtn.addEventListener('click', function (e) {
        e.preventDefault()

        const headActive = document.querySelector('form header div.active')
        if (headActive.nextElementSibling) {
            headActive.classList.remove('active')
            headActive.nextElementSibling.classList.add('active')
            document.querySelector('.first-step').classList.add('d-none')
            document.querySelector('.second-step').classList.remove('d-none')
        }
    })
}

// Функция анимации элементов
const anim = document.querySelectorAll('.anim')

if (!anim.length) {

} else {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            let el = entry.target
            if (entry.isIntersecting) {
                el.style.animationDelay = el.dataset.animDelay + 'ms'
                el.style.animationDuration = el.dataset.animDuration + 'ms'
                el.style.animationName = el.dataset.anim
                observer.unobserve(entry.target)
            }

        })
    }, {threshold: .35})

    if (window.innerWidth > 991) {
        anim.forEach(animate => {
            observer.observe(animate)
        })
    }
}

// Функция анимации цифер
const animNumbers = document.querySelectorAll('.anim-number')

if (!animNumbers.length) {

} else {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio) {
                const time = 2000

                let step = 2500

                function outNum(num, elem) {
                    let n = 0

                    let t = Math.round(time / (num / step))

                    let interval = setInterval(() => {
                        n = n + step

                        if (n == num) {
                            clearInterval(interval)
                        }
                        elem.innerHTML = n.toLocaleString() + ' +'
                    }, t)
                }

                animNumbers.forEach(animNumb => {
                    const number = animNumb.dataset.numb.replace(/\s/g, '')
                    outNum(number, animNumb)
                })
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 1})

    if (window.innerWidth > 991) {
        animNumbers.forEach(animate => {
            observer.observe(animate)
        })
    } else {
        animNumbers.forEach(animNumb => {
            const number = animNumb.dataset.numb
            animNumb.innerHTML = number + ' +'
        })
    }
}

// Функция работы бургера
const burger = document.querySelector('.header-burger')

burger.addEventListener('click', function () {
    burger.classList.toggle('open')
    document.querySelector('.header-content').classList.toggle('show')
    document.querySelector('body').classList.toggle('no-scroll')
    document.querySelector('.header').classList.toggle('dark-bg')
})


if (window.innerWidth > 991) {
    let rellax = new Rellax('.rellax', {
        center: true,
    });
}


// lazyload для картинок
const lazyImg = document.querySelectorAll('.lazyload');

lazyImg.forEach(el => {
    const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    observer.observe();
})

