var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active");
    })
}
// const bar = document.querySelector('#bar');
// // const burger = document.querySelector('.burger');

// bar.addEventListener('click', () => {
//   navbar.classList.toggle('active');
// });
