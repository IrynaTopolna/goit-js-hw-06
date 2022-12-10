{
  /* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>; */
}

const btnRef = document.querySelector(".change-color");
const bgcSpanRef = document.querySelector(".color");

btnRef.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bgcSpanRef.textContent = document.body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
