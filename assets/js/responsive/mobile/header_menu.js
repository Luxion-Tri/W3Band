const header = document.getElementById('header');
const menuIcon = document.querySelector('.menu__icon')
const headerHeight = header.clientHeight
const navItems = document.querySelectorAll('.nav .nav-item a')

function ControlMobileMenu() {
    const isClosed = headerHeight === header.clientHeight
    if (isClosed) {
        header.style.height = "auto"
    } else {
        header.style.height = null
        header.classList.add('overflow-hidden')
    }
}

menuIcon.addEventListener('click', ControlMobileMenu)
for (var navItem of navItems) {
    if (!navItem.classList.contains('nav-link')) {
        navItem.addEventListener('click', () => {
            header.classList.add('overflow-hidden')
            header.style.height = null
        })
    } else {
        navItem.addEventListener('click', () => {
            header.classList.toggle('overflow-hidden')
        })
    }
}

document.body.addEventListener('click', () => {
    header.classList.add('overflow-hidden')
    header.style.height = null
})

header.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
})