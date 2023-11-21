// Start Desktop 

// Start Dropdown User
const btn = document.querySelector('#user-dropdown');
const dropdown = document.querySelector('.dropdown');
const btnclose = document.querySelector('#user-close > svg');
const btnclose2 = document.querySelector('#user-close-2 > svg');
const btnclose3 = document.querySelector('#user-close-3 > svg');

dropdown.style.display = 'none';
dropdown.style.transition = '1s';
btnclose.style.color = 'rgba(0,0,0,0)';
btnclose2.style.color = 'rgba(0,0,0,0)';
btnclose3.style.color = 'rgba(0,0,0,0)';
btn.style.display = 'block';

btn.addEventListener('click', () => {
    dropdown.style.height = 'auto';
    dropdown.style.display = 'block';

    btnclose.style.color = 'white';
    btn.style.display = 'none';
});

btnclose.addEventListener('click', () => {
    dropdown.style.height = '0px';
    dropdown.style.display = 'none';

    btnclose.style.color = 'rgba(0,0,0,0)';
    btn.style.display = 'block';
});

// End Dropdown User

// Start Dropdown Brands
const dropdown2 = document.querySelector('.dropdown-2')
const btn2 = document.querySelector('#btn-2');
dropdown2.style.display = 'none';
btn2.style.display = 'block';

btn2.addEventListener('click', () => {
    dropdown2.style.height = 'auto';
    dropdown2.style.display = 'block';
    btn2.style.display = 'none';

    dropdown3.style.display = 'none';
    btn3.style.display = 'block';
    btnclose3.style.color = 'rgba(0,0,0,0)';

    btnclose2.style.color = 'white';
});

btnclose2.addEventListener('click', () => {
    dropdown2.style.height = '0px';
    dropdown2.style.display = 'none';

    btnclose2.style.color = 'rgba(0,0,0,0)';
    btn2.style.display = 'block';
});
// End Dropdown Brands

// Start Dropdown Categories
const dropdown3 = document.querySelector('.dropdown-3')
const btn3 = document.querySelector('#btn-3');
dropdown3.style.display = 'none';
btn3.style.display = 'block';

btn3.addEventListener('click', () => {
    dropdown3.style.height = 'auto';
    dropdown3.style.display = 'block';

    dropdown2.style.display = 'none';
    btn2.style.display = 'block';
    btnclose2.style.color = 'rgba(0,0,0,0)';

    btnclose3.style.color = 'white';
    btn3.style.display = 'none';
});

btnclose3.addEventListener('click', () => {
    dropdown3.style.height = '0px';
    dropdown3.style.display = 'none';

    btnclose3.style.color = 'rgba(0,0,0,0)';
    btn3.style.display = 'block';
});
// End Dropdown Categories

// End Desktop

// Start Mobile
const mobile = document.querySelector('#mobile-navbar');
const mobileBtn = document.querySelector('#open-menu');
const mobileBtnClose = document.querySelector('#close-menu');

mobileBtnClose.style.display = 'none';

mobile.style.display = 'none';

mobileBtn.addEventListener('click', () => {
    mobile.style.height = '300px';
    mobile.style.display = 'block';

    mobileBtnClose.style.display = 'block';
    mobileBtn.style.display = 'none';

});

mobileBtnClose.addEventListener('click', () => {
    mobile.style.height = '0px';
    mobile.style.display = 'none';

    mobileBtnClose.style.display = 'none';
    mobileBtn.style.display = 'block';
});

// End Mobile