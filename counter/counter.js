let number=document.querySelector('#number');
let decrease=document.querySelector('#decrease');
let increase=document.querySelector('#increase');
let pause=document.querySelector('#pause');
let count=document.querySelector('#count');
let stop=document.querySelector('#stop');
let main=document.querySelector('main');
let counter=0;
let timer=0;

function add(){
    counter++;
    color();
    return number.textContent=counter;
}
function subtract(){
    counter--;
    color();
    return number.textContent=counter;
}

    increase.addEventListener('click', ()=>{
        add();
    })

    decrease.addEventListener('click', ()=>{
        subtract();
    })

    count.onclick=()=>{
        timer=setInterval(add, 1000);
        count.disabled=true;
    }

    pause.onclick=()=>{
        clearInterval(timer);
        count.disabled=false;
    }

    stop.onclick=()=>{
        clearInterval(timer);
        counter=0;
        color();
        number.textContent=0;
        count.disabled=false;
    }

    function color(){
        if(counter===0){
        number.style.color='#F2AA17';
        }
        else if(counter>0){
            number.style.color='#1fc788';
        }
        else{
            number.style.color='#e2532a';
        }
    }

