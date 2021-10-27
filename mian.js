const search = document.querySelector('.fa-search');
const headerInput = document.querySelector('.header__input');


search.addEventListener('click', () =>{
    if(headerInput.style.display == 'none'){
        headerInput.style.display = 'inline-block';
        headerInput.style.transition = 0.3 + 's';
    }
    else{
        headerInput.style.display = 'none';
        headerInput.style.transition = 0.3 + 's';
    }
})