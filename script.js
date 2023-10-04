


function namevalidate() {
    let name_error = document.getElementById('username-error')
    let name = document.getElementById('username')


    if (name.value.trim == "") {
        name_error.innerHTML = 'username cannot be blank'
        return false
    }
    else if (name.value.length < 5) {
        name_error.innerHTML = 'username cant be less than 5 letters'
        return false
    }
    else {
        name_error.innerHTML = ''
        return true
    }



}
function emailvalidate() {
    let email = document.getElementById('email')
    let mailerror = document.getElementById('mailerror')
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.value.trim() == '') {
        mailerror.innerHTML = 'email cannot be blank';
        return false;
    }
    else if (!email.value.match(regex)) {
        mailerror.innerHTML = 'email is not in correct format';
        return false;
    }
    else {
        mailerror.innerHTML = '';
        return true;
    }

}
function passwordvalidate() {
    let password = document.getElementById('password')
    let passworderror = document.getElementById('passworderror')
    if (password.value.trim() == '') {
        passworderror.innerHTML = 'password cannot be blank';
        return false;
    }
    else if (password.value.length < 6 || password.value.length > 20) {
        passworderror.innerHTML = 'length of the password must be not less than 6 and greater than 20';
        return false;
    }
    else {
        passworderror.innerHTML = '';
        return true;
    }

}
function repeatvalidate() {
    let password = document.getElementById('password')
    let repeat = document.getElementById('repeat')
    if (password.value != repeat.value) {
        repeaterror.innerHTML = 'password is not matching';
        return false;
    }
    else {
        repeaterror.innerHTML = '';
        return true;

    }


}

function validateForm() {
    let submitError = document.getElementById('submiterror')
    if (!namevalidate() || !emailvalidate() || !passwordvalidate() || !repeatvalidate()) {
        submitError.innerHTML = 'please resolve the error';
        return false;
    }
    else {
        submitError.innerHTML = '';
        return true;
    }
}
