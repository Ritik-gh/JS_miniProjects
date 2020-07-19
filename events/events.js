newEvent=document.querySelector('#newEvent');
form=document.querySelector('form');

newEvent.onclick=()=>{
    form.style.display='flex';
}
form.onsubmit=()=>{
    form.style.display='none';
    EventCard();
    return false;
}
function EventCard(){
    let inputs=document.querySelectorAll('input');

    let eventF=inputs[0].value;
    let descF=inputs[1].value;
    let dinankF=inputs[2].value;
    let samayF=inputs[3].value;

    Event= document.createElement('span');
    Description= document.createElement('span');
    Dinank= document.createElement('span');
    Samay= document.createElement('span');

    div=document.createElement('div');

    Event.setAttribute('id', 'event');
    Description.setAttribute('id', 'desc');
    Dinank.setAttribute('id', 'date');
    Samay.setAttribute('id', 'time');

    Event.textContent=eventF;
    Description.textContent=descF;
    Dinank.textContent=dinankF;
    Samay.textContent=samayF;

    div.appendChild(Event);
    div.appendChild(Description);
    div.appendChild(Dinank);
    div.appendChild(Samay);

    console.log(div);
    document.querySelector('main').appendChild(div);
}
