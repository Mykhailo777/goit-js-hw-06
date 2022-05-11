const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  ulList.append(item);
});

console.log(foodIngredients);
