const toggleBtn = document.querySelector('.toggleBtn');
const navMenu = document.querySelector('.navbar_menu');
const navLink = document.querySelector('.navbar_link');


toggleBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    navLink.classList.toggle('active');
} )