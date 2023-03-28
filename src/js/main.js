const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.header__top-btn')
const navItems = document.querySelectorAll('.nav-mobile__list-item')
const headerHeading = document.querySelector('.header__bottom-heading')

const headingArr = ['h', 'i', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', '']
const headingArr2 = ['_']
const headingArr3 = [' ', 'p', 'i', 'o', 't', 'r', ' ', 't', 'r', 'z', 'e', 'b', 'u', 'n', 'i', 'a', 'k']

// MOBILE MENU

const toggleMenu = () => {
    navMobile.classList.toggle('nav-mobile--active')
   
}

// AUTO TYPING TEXT - HEADER

const typeHeading = () => {
    
    let n = 0
    let m = 0
    const typingInterval = setInterval( () => {

        // console.log(headingArr.slice(0, n).concat(headingArr2).join(''));

        if(n <= 13) {
            headerHeading.textContent = headingArr.slice(0, n).concat(headingArr2).join('');
        }
        else if(n == 14) {
            headerHeading.textContent = headingArr.slice(0, n).join('');
        }
        else {
            clearInterval(typingInterval)
        }

        n++

    }, 150)

    setTimeout(function() {

        headerHeading.innerHTML = 'hi, my name is<span class="accent header__bottom-heading--accent">_</span> '
        const headerHeading2 = document.querySelector('.header__bottom-heading--accent')
        const typingInterval2 = setInterval( () => {

            // console.log(headingArr3.slice(0, m).concat(headingArr2).join(''));
            headerHeading2.textContent = headingArr3.slice(0, m).concat(headingArr2).join('');
            m++

            if(m == 18) {
                clearInterval(typingInterval2)
            }

        }, 150)

    }, 2260)

}

typeHeading()


// MOBILE MENU

navItems.forEach((el) => {
    el.addEventListener('click', toggleMenu)
})

navBtn.addEventListener('click', toggleMenu)
