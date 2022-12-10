const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addIngredients = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const food = document.createElement("li");
  food.textContent = ingredient;
  food.classList.add("item");

  return food;
});

console.log(ingredientsList);

addIngredients.append(...ingredientsList);
