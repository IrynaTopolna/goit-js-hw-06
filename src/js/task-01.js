const numOfCategoriesRef = document.querySelectorAll(".item");
console.log(` Number of categories: `, numOfCategoriesRef.length);

const categoryRef = [...numOfCategoriesRef].forEach((element) => {
  console.log(`Category:`, element.firstElementChild.textContent);

  console.log(`Elements:`, element.lastElementChild.children.length);
});
