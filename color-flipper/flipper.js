var hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

main=document.querySelector('main');
hash=document.querySelector('span');
flip=document.querySelector('button');
header=document.querySelector('header')

flip.addEventListener('click', function(){
    let digits='#';
    for(let i=0; i<6; i++)
    {
        digits+=hex[Math.floor(Math.random()*hex.length)]
    }
    hash.textContent=digits;
    hash.style.color='#fff';
    main.style.backgroundColor=digits;
    header.style.color=digits;
    flip.style.color=digits;
})
