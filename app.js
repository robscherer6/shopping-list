const itemForm = document.getElementById('item-form');

//create reference to input text
let itemInput = document.getElementById('item-input');

//create reference to addItem button
//let addItem = document.querySelector('.btn');

//create reference to item list
let itemList = document.getElementById('item-list');

function addItem (e) {
  //prevent defaul submission
  e.preventDefault();

  const newItem = itemInput.value;

  //Validate Input
  if (itemInput.value === '') {
    alert('Please add an item');
    return;
  };

  //create new list item
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  let newButton = createButton();
  let newIcon = createIcon();

  li.appendChild(newButton);
  li.appendChild(newIcon);
  console.log(li);


  itemList.appendChild(li);
}

function createButton () {
  let button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  return button;
}

function createIcon () {
  let icon = document.createElement('icon');
  icon.className = 'fa-solid fa-xmark';
  return icon;
}



//Event Listeners
itemForm.addEventListener('submit', addItem);
//addItem.addEventListener('click', onSubmit)

