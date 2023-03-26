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

  //Validate Input
  if (itemInput.value === '') {
    alert('Please add an item');
    return;
  };

  console.log('Success!');

  // let li = document.createElement('li');
  // li.textContent = itemInput.value;
  // li.className =

  // itemList.appendChild(li);
}



//Event Listeners
itemForm.addEventListener('submit', addItem);
//addItem.addEventListener('click', onSubmit)

