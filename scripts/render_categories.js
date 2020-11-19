let categories = [
  "Robots",
  "Nicknames",
  "Famous first words",
  "Going 'dark'",
  "Fictional companies",
  "Painfully obvious"
];

function renderCategories() {
  categories.forEach(cat => {
    $("#categories").append(`<div class="category">
    <div class="category-cell">
    <div>${cat}</div></div>`);
  })
};