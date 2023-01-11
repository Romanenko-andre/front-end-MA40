const burger = document.querySelector('.burger');
const nev_menu = document.querySelector(".nav_menu");

// <nav class="nav_menu"> 

burger.addEventListener ('click', function(){
            nev_menu.classList.toggle('open_menu');
})