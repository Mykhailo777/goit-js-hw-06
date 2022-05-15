const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ulList = document.querySelector("#ingredients");

const foodIngredients = (units) => {
  return units.map((unit) => {
   
    const newUnit = document.createElement('li');
    newUnit.classList = "item";
    newUnit.textContent = unit;
    return newUnit;
  });
};

const unitTo = foodIngredients(ingredients);
ulList.append(...unitTo);
