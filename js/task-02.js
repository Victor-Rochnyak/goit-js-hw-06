const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = 'Potatoes';
console.log(itemEl);

const itemEl1 = document.createElement('li');
itemEl1.classList.add('item');
itemEl1.textContent = 'Mushrooms';
console.log(itemEl1);

const itemEl2 = document.createElement('li');
itemEl2.classList.add('item');
itemEl2.textContent = 'Garlic';
console.log(itemEl2);

const itemEl3 = document.createElement('li');
itemEl3.classList.add('item');
itemEl3.textContent = 'Tomatos';
console.log(itemEl3);

const itemEl4 = document.createElement('li');
itemEl4.classList.add('item');
itemEl4.textContent = 'Herbs';
console.log(itemEl4);

const itemEl5 = document.createElement('li');
itemEl5.classList.add('item');
itemEl5.textContent = 'Condiments';
console.log(itemEl5);

const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.appendChild(itemEl);
ingredientsEl.append(itemEl, itemEl1, itemEl2, itemEl3, itemEl4, itemEl5);
