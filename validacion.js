//both fields are required
//usuario must have @
var form = document.getElementById('formulario');
var email = document.getElementById('email');
var password = document.getElementById('password');
var button = document.getElementById('submit-button');
var errormessage = document.getElementById('errormessage');
var usuario = document.getElementsByClassName('possibleerror')[0]; 
var clave = document.getElementsByClassName('possibleerror')[1];



function validate(event) {
    if (email.value == "" || email.value.indexOf('@') == -1) {
        usuario.className = 'error';
        event.preventDefault();
    }
    if (password.value == "") {
        clave.className = 'error';
        event.preventDefault();
    }
}

button.addEventListener('click', validate);