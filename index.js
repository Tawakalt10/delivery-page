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