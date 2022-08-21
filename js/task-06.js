const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlure);

function onInputBlure(event){
    const inputText = event.currentTarget;
const InputLength = Number(inputText.dataset.length);

if (inputText.value.length === InputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
}
else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}
}
