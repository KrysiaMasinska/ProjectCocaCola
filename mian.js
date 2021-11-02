const nav = document.querySelector('.nav');
const allNavItems = document.querySelectorAll('.nav__item');
const search = document.querySelector('.fa-search');
const headerInput = document.querySelector('.header__input');
const headerImg = document.querySelector('.header__img');
const mediaQuery = window.matchMedia('max-widht: 576px');
const headerBtn = document.querySelector('.header__btn');

search.addEventListener('click', () =>{
    headerInput.classList.toggle('header__addSearch');
    if(window.innerWidth <= 576){
        headerImg.classList.toggle('header__imgHidden')
    }
    else{
        headerImg.classList.remove('header__imgHidden')
    }
})


headerBtn.addEventListener('click', () =>{
    nav.classList.toggle('showNav')
    allNavItems.forEach(item =>{
        item.addEventListener('click', () =>{
            nav.classList.remove('showNav');
        })
    })
})