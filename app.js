let itemForm = document.getElementById('item-form');
let itemInput = document.getElementById('item-input');
let itemList = document.getElementById('item-list');
let clearBtn = document.getElementById('clear');
let itemFilter = document.getElementById('filter');
let items = itemList.querySelectorAll('li');

function onAddItemSubmit (e) {
  //prevent defaul submission
  e.preventDefault();

  const newItem = itemInput.value;

  //Validate Input
  if (itemInput.value === '') {
    alert('Please add an item');
    return;
  };

  checkUI();
  
  //clear item input so blank for next item
  itemInput.value = '';
}

function addItemToDOM (item) {
  //create new list item
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  let newButton = createButton('remove-item btn-link text-red');

  li.appendChild(newButton);

  // Add li to the DOM
  itemList.appendChild(li);
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





function onClickItem (e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
    removeItem(e.target.parentElement.parentElement);
  }
}

function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}


function clearItems () {
  itemList.innerHTML = '';

  checkUI();
  // while (itemList.firstChild) {
  //   itemList.removeChild(itemList.firstChild);
  // }
  // itemList.remove();

}

function filterInput (e) {
  let items = itemList.querySelectorAll('li');
  let text = e.target.value.toLowerCase();

  items.forEach(item => {
    let itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI () {
  let items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

//Initialize App
function init () {
  //Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterInput);

  checkUI();
}

init();

