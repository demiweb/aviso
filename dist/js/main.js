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
            console.log('worked')

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
            e.preventDefault()
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