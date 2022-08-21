const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", handleInputRange);
function handleInputRange() {
  span.style.fontSize = `${input.value}px`;
}

// const inputEl = document.querySelector('#font-size-control');
// const textEl = document.querySelector('#text');

// inputEl.addEventListener('input', onFontSizeControl);

// function onFontSizeControl(event) {
//     const fontSize = this.value;
//     textEl.style.fontSize = `${fontSize}px`;
// }

// const inputRef = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text');

// inputRef.addEventListener('input', OnInputChange);

// function OnInputChange(event) {   
//     spanRef.style.fontSize = `${inputRef.value}px`;
// }
