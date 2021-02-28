const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen');
let firstTextNode = document.createTextNode('');
let secondTextNode = document.createTextNode('');
screen.appendChild(firstTextNode);
const lineBreak = document.createElement("BR");
screen.appendChild(lineBreak);
screen.appendChild(secondTextNode);
let inputOnly = false;
let operationType = '';

function calculator(e){
    let input;

    // checking if the type of event
    if(e.type === 'click' && e.target.tagName === 'BUTTON'){
        input = e.target.innerText;
    }
    else if(e.type === 'keyup'){
        input = e.key;
    }

    // feeding the input to DOM
    if(!isNaN(parseInt(input)) && screen.innerText.length < 12){
        if(!inputOnly) {
            firstTextNode.data = firstTextNode.data + input;
        }
        else if(inputOnly){
            secondTextNode.data = secondTextNode.data + input;
        }
    }
    // clearing functionality
    else if(input.toUpperCase() === 'C'){
        firstTextNode.data = '';
        secondTextNode.data = '';
        inputOnly = false;
        let el = document.querySelector('.active');
            el?.classList.remove('active');
    }
    // backspace functionality
    else if(input === '←' || input.toUpperCase() === 'BACKSPACE'){
        if(secondTextNode.data !== ''){
            secondTextNode.data = secondTextNode.data.slice(0, secondTextNode.data.length-1);
        }
        else{
            firstTextNode.data = firstTextNode.data.slice(0, firstTextNode.data.length-1);
            let el = document.querySelector('.active');
            el?.classList.remove('active');
        }
        
    }
    // checking the type of operation
    else if((input === '+' || input === '-' || input === '*' || input === '/')){
        inputOnly = true;
        e.target.classList.add('active');
        operationType = e.target.innerText;
    }
    else{
        if(operationType === '+'){
            firstTextNode.data = parseInt(firstTextNode.data) + parseInt(secondTextNode.data); 
        }
        if(operationType === '-'){
            firstTextNode.data = parseInt(firstTextNode.data) - parseInt(secondTextNode.data); 
        }
        if(operationType === '*'){
            firstTextNode.data = parseInt(firstTextNode.data) * parseInt(secondTextNode.data); 
        }
        if(operationType === '/'){
            firstTextNode.data = parseInt(firstTextNode.data) / parseInt(secondTextNode.data); 
        }
        secondTextNode.data = '';
        let el = document.querySelector('.active');
            el.classList.remove('active');
    }
}

window.addEventListener('click', calculator);
window.addEventListener('keyup', calculator);