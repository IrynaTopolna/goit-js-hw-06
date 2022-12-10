{
  /* <div id="counter">
       <button type="button" data-action="decrement">-1</button>
       <span id="value">0</span>
       <button type="button" data-action="increment">+1</button>
     </div>; */
}

const counter = document.querySelector("#value");

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

let counterValue = 0;

incrementBtnRef.addEventListener("click", function () {
  counterValue += 1;
  counter.textContent = counterValue;
});

decrementBtnRef.addEventListener("click", function () {
  counterValue -= 1;
  counter.textContent = counterValue;
});
