//create reference to input text
let itemInput = document.getElementById('item-input');

//create reference to addItem button
let addItem = document.querySelector('.btn');

//create reference to item list
let ul = document.getElementById('item-list');

function onSubmit (e) {
  //prevent defaul submission
  e.preventDefault();
  let li = document.createElement('li');
  li.textContent = itemInput.value;
  li.className = 

  ul.appendChild(li);
}

//add event listener to addItem
addItem.addEventListener('click', onSubmit)

