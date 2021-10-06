// const contactForm = document.querySelector('.contact-form');
// let username = document.getElementById('name');
// let email = document.getElementById('email');
// let subject = document.getElementById('subject');
// let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let formData = {
        username: username.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    //may convert to fetch currently this is ajax
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('email sent');
            username.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('something went wrong')
        }
    }

    xhr.send(JSON.stringify(formData));
});