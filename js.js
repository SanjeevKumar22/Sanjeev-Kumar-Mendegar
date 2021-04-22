

//let showMenu = false
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
links =document.querySelector('.link');

 


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

// const hamburger = document.querySelector(".burger")
// const lsection = document.querySelector('h-nav-resp')
// const navName = document.querySelector(".nav-list")
// const links = document.querySelectorAll(".link1")

// function toggleMenu() {
//     if (!showMenu) {
//         hamburger.classList.add("close")
//         lsection.classList.add("h-nav-resp")
//         navName.classList.add('v-class-resp')
//         showMenu = true
//     }
//     else {
//         hamburger.classList.remove("close")
//         lsection.classList.remove("show")
//         navName.classList.remove("hide")
//         showMenu = false
//     }
// }

// hamburger.addEventListener("click", toggleMenu)
// links.forEach(item => {
//     item.addEventListener("click", toggleMenu)
// })