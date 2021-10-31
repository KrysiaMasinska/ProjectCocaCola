const search = document.querySelector('.fa-search');
const headerInput = document.querySelector('.header__input');
const headerImg = document.querySelector('.header__img');
const mediaQuery = window.matchMedia('max-widht: 576px');


search.addEventListener('click', () =>{
    headerInput.classList.toggle('header__addSearch');
    if(window.innerWidth <= 576){
        headerImg.classList.toggle('header__imgHidden')
    }
    else{
        headerImg.classList.remove('header__imgHidden')
    }
})