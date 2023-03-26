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
  let newButton = createButton('remove-item btn-link text-red');
  let newIcon = createIcon('fa-solid fa-xmark');

  li.appendChild(newButton);
  newButton.appendChild(newIcon);
  console.log(li);


  itemList.appendChild(li);
}

function createButton (classes) {
  let button = document.createElement('button');
  button.className = classes;
  return button;
}

function createIcon (classes) {
  let icon = document.createElement('icon');
  icon.className = classes;
  return icon;
}



//Event Listeners
itemForm.addEventListener('submit', addItem);
//addItem.addEventListener('click', onSubmit)

