const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('onForSubmit name', name)
        console.log('onForSubmit value', value)
    })

    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password= formElements.password;

        if (email.value === '' || password.value === '') {
            return alert('Заповни форму!');
        }
    
        form.reset();
}


