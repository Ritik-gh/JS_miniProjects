const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen');

calc.addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON'){
    screen.innerHTML = '';
    screen.innerHTML = e.target.innerHTML;
    }
})