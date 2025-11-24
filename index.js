// =======SH0W MENU ===========

const showMenu = (navId, toggleId)   =>{
  const nav = document.getElementById(navId), 
    toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')  
    })
}

showMenu('nav-menu', 'nav-toggle')


// ====REMOVE MOBILE MENU =====//

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()  =>{
    const navMenu = document.getElementById('nav-menu')
        // on click on the nav__link we remove the show- menu class

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ADD SHADOW HEADER

const shadowHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the 
  this.scrollY >=50 ? header.classList.add('shadow-header')
                    :header.classList.remove('shadow-header')
}
  window.addEventListener('scroll', shadowHeader)


  // SWIPER REVEALS

  const swiperReviews = new Swiper('.reviews__swiper', {
  loop: true,
  spaceBetween :16,
  grabCursor:true,
  speed:600,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoplay: {
  //   delay : 3000,
  //   disableOnInteraction: false
  // }

});