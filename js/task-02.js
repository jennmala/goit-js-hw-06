const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');
const ingredientsList = [];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  ingredientsList.push(ingredientEl);
}

ingredientsEl.append(...ingredientsList);
