const itemForm = document.getElementById('item-form');

//create reference to input text
let itemInput = document.getElementById('item-input');

//create reference to item list
let itemList = document.getElementById('item-list');

let clearBtn = document.getElementById('clear');


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

  li.appendChild(newButton);
  console.log(li);

  itemList.appendChild(li);

  //clear item input so blank for next item
  itemInput.value = '';
}

function createButton (classes) {
  let button = document.createElement('button');
  button.className = classes;
  let newIcon = createIcon('fa-solid fa-xmark');
  button.appendChild(newIcon);
  return button;
}

function createIcon (classes) {
  let icon = document.createElement('icon');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems () {
  itemList.innerHTML = '';
  // while (itemList.firstChild) {
  //   itemList.removeChild(itemList.firstChild);
  // }
  // itemList.remove();
}



//Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems)
