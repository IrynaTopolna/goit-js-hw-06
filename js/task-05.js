{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
     <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const inputRef = document.querySelector("#name-input");

const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  return event.currentTarget.value
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = "Anonymous");
}
