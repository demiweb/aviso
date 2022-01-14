function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

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

// Функия работы dropdown-menu
const dropdownMenu = document.querySelectorAll('.dropdown-menu')

if (!dropdownMenu.length) {

} else {
    dropdownMenu.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('ul')
        dropdown.addEventListener('mouseover', function () {
            this.classList.add('open')
            dropdownContent.classList.add('show')
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
        })
        dropdown.addEventListener('mouseleave', function () {
            this.classList.remove('open')
            dropdownContent.classList.remove('show')
            dropdownContent.style.maxHeight = null
        })

        if (window.innerWidth < 991) {
            dropdownMenu.forEach(dropdown => {
                dropdown.addEventListener('click', function (e) {

                    if (this.classList.contains('open')) {
                        console.log('y')

                        this.classList.remove('open')
                        dropdownContent.classList.remove('show')
                        dropdownContent.style.maxHeight = null

                    } else {
                        this.classList.add('open')
                        dropdownContent.classList.add('show')
                        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
                    }
                })
            })
        }
    })
}


// Функия работы dropdown
const dropdown = document.querySelectorAll('.dropdown')

if (!dropdown.length) {

} else {
    dropdown.forEach(input => {
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
    })

    window.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {

            document.querySelectorAll('.dropdown').forEach(input => {
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
                    } else if (this.id === 'country-5') {
                        description.style.left = pos.x + 30 + 'px'
                        description.style.top = pos.y + (pos.height / 4) + 'px'
                    } else if (this.id === 'country-6') {
                        description.style.left = pos.x + 50 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    } else if (this.id === 'country-8') {
                        description.style.left = pos.x + 30 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    } else if (this.id === 'country-12') {
                        description.style.left = pos.x + (pos.width - 50) + 'px'
                        description.style.top = pos.y + 12 + 'px'
                    } else if (this.id === 'country-13') {
                        description.style.left = pos.x + (pos.width - 50) + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    } else if (this.id === 'country-15') {
                        description.style.left = pos.x + (pos.width / 3.1) + 'px'
                        description.style.top = pos.y + (pos.height / 2.5) + 'px'
                        description.classList.remove('description-revert')
                    } else if (this.id === 'country-24') {
                        description.style.left = pos.x + 10 + 'px'
                        description.style.top = pos.y + (pos.height - 50) + 'px'
                    } else {
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

            const yOffset = -120
            const element = document.getElementById('order-form')
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
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

$(document).ready(function () {
    $('select').niceSelect()
})


// lazyload для картинок
const lazyImg = document.querySelectorAll('.lazyload');

lazyImg.forEach(el => {
    const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    observer.observe();
})

