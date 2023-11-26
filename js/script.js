const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* BLUR Header */

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* SWIPER INITILIAZE  */

let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
})

/* SCROLL UP */

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll sections active link */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
        const scrollDown = window.scrollY

    sections.forEarch(current =>{
                const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                }else{
                    sectionsClass.classList.remove('active-link')
                }        
        })
}
window.addEventListener('scroll', scrollActive)

/* ScrollReveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 150,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`)
sr.reveal(`.home__title span:nth-child(1)`, {origin: 'left', opacity: 1})
sr.reveal(`.home__title span:nth-child(3)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__tooltip, .home__button, .model__button`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img, .model__tooltip`, {origin: 'right'})