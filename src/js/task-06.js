{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */
}

const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", checkInput);

function checkInput() {
  if (textInputRef.value.length !== Number(textInputRef.dataset.length)) {
    textInputRef.classList.add(`invalid`);
  } else textInputRef.classList.replace(`invalid`, `valid`);
}
