let countDownDate = new Date("Dec 23, 2023 15:30:00").getTime();
let span= document.querySelectorAll('main h1 span');
let judul = document.querySelector("main h1");
console.log(span);
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    span[0].textContent= days;
    span[1].textContent = hours;
    span[2].textContent= minutes;
    if (distance < 0) {
        clearInterval(x);
        judul.textContent= "ape lu liat liat";
    }
},1000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJrzvCcoFd-5tW68zfLtk1lCO3YEk4XXYfhgDonjHBeQdyLlpxrUEB6v-QOMoHLc6WpA/exec';
const form = document.forms['HBD']
const submit= document.querySelector('.submit');
const p = document.querySelector('.form p');
form.addEventListener('submit', e => {
    e.preventDefault();
    submit.textContent="loading dulu";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            submit.textContent ="Gas";
            p.textContent= "y makasih dah isi";
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})