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
let key = false;

function calculator(e){
    let input;

    // checking if the type of event
    if(e.type === 'click' && e.target.tagName === 'BUTTON'){
        input = e.target.innerText;
    }
    else if(e.type === 'keyup'){
        input = e.key;
        key=true;
    }

    console.log({input});


    // feeding the input to DOM
    if(!isNaN(parseInt(input))){
        if(!inputOnly && firstTextNode.data.length < 12) {
            firstTextNode.data = firstTextNode.data + input;
        }
        else if(inputOnly && secondTextNode.data.length < 12){
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
        inputOnly = false;
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
    else if(!inputOnly && (input === '+' || input === '-' || input === '*' || input === '/')){
        inputOnly = true;
        if(!key){
            e.target.classList.add('active');
        }
        else{
            const elements = document.querySelectorAll('BUTTON');
            for (element of elements){
                if(element.innerText === e.key){
                    element.classList.add('active');
                }
            }
        }
        operationType = input;
    }
    else if(input === '=' || input.toUpperCase() === 'ENTER'){
        if(secondTextNode.data !== ''){
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
                firstTextNode.data = (parseInt(firstTextNode.data) / parseInt(secondTextNode.data)).toPrecision(12);
                console.log(parseInt(firstTextNode.data) / parseInt(secondTextNode.data));
                console.log(firstTextNode.data.length);
            }
            secondTextNode.data = '';
        }
        else{
            firstTextNode.data = '';
        }
        let el = document.querySelector('.active');
            el?.classList.remove('active');
        inputOnly = false;
    }
}

window.addEventListener('click', calculator);
window.addEventListener('keyup', calculator);