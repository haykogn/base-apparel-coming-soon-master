// Variables

const input = document.getElementById('email');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');
const error = document.querySelector('.error');
const sign = document.querySelector('.sign');



// Event Listener

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (validateEmail(input.value)) {
        error.innerText = 'Thanks!';
        error.style.color = '#4ee44e'
        input.style.border = '1.5px solid #4ee44e';
        submit.style.height = '53px';
        submit.style.right = '-2px';
        sign.style.visibility = 'hidden';
    } else {
        input.style.border = '1.5px solid hsl(0, 93%, 68%)';
        error.innerText = 'Please provide a valid email';
        error.style.color = 'hsl(0, 93%, 68%)';
        submit.style.height = '53px';
        submit.style.right = '-2px';
        sign.style.visibility = 'visible';
    }
});


// RegExp Function

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}