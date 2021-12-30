new Swiper('.hero-swiper', {
    effect: 'creative',
    creativeEffect: {
        prev: {
            scale: 1.2,
        },
        next: {
            scale: 1,
        },
    },
    direction: 'horizontal',
    loop: true,
    autoplay: true,
});

new Swiper('.seo-swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: {
        prevEl: '.seo-swiper .swiper-button-prev',
        nextEl: '.seo-swiper .swiper-button-next',
    }
});


// Функия работы dropdown-input
const dropdownInput = document.querySelectorAll('.dropdown-input')

if (!dropdownInput.length) {

} else {

    dropdownInput.forEach(input => {
        input.addEventListener('click', function (e) {
            // dropdownInput.forEach(content => {
            //     content.classList.remove('open')
            //     content.querySelector('.dropdown-content').style.maxHeight = null
            // })

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
    map.forEach(elem => {
        elem.querySelectorAll('path').forEach(country => {
            country.addEventListener('mousemove', function (elem) {
                const description = document.querySelector('.map .description')
                description.querySelector('.circle').style.animationName = 'circle'
                description.querySelector('.circle-shadow').style.animationName = 'circleShadow'
                description.querySelector('.line').style.animationName = 'line'
                description.querySelector('.text').style.animationName = 'fade'

                const pos = this.getBBox();
                const x = pos.x + (pos.width / 2.3)
                const y = pos.y + (pos.width / 4)

                description.style.left = x + 'px'
                description.style.top = y + 'px'

                description.querySelector('.name').innerText = this.dataset.name
                description.querySelector('.address').innerText = this.dataset.address

                console.log(pos)
                if (pos.x < 400) {
                    description.classList.add('description-revert')
                } else {
                    description.classList.remove('description-revert')
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

const icons = document.querySelectorAll('.hero-icons svg path')

if (!icons.length) {

} else {
    let time = 0

    icons.forEach(elem => {
        time = time + 500
        const length1 = elem.getTotalLength()
        elem.style.strokeDashoffset = length1
        elem.style.strokeDasharray = length1
        elem.style.animationDelay = time
    })
}