form=document.querySelector('form');
input=document.querySelector('input');
output=document.querySelector('#output');

form.onsubmit= ()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data => {
        let currency=input.value;
        let rate=data.rates[currency].toFixed(2);
        let option=document.querySelector(`#${input.value}`);
        output.innerHTML= `${rate} ${option.innerHTML}s`;
        output.style.display='block';
        input.value="";
    })
    .catch(error => {
        console.log('Error:', error);
    })
    return false;
}

