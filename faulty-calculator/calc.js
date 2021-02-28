const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen');

function specialFunc(e){
    let input;
    console.log(e);
    console.log(e.type);
    if(e.type === 'click' && e.target.tagName === 'BUTTON'){
        input = e.target.innerText;
    }
    else if(e.type === 'keyup'){
        input = e.key;
    }
    console.log(input);
    if(!isNaN(parseInt(input)) && screen.innerText.length < 15){
    screen.innerHTML = screen.innerHTML + input;
    }
    else if(input.toUpperCase() === 'C'){
        screen.innerText = '';
    }
    else if(input === '←' || input.toUpperCase() === 'BACKSPACE'){
        console.log(screen.innerText);
        screen.innerText = screen.innerText.slice(0, screen.innerText.length-1);
    }
}

window.addEventListener('click', specialFunc);
window.addEventListener('keyup', specialFunc);