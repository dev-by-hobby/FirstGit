//console.dir(document);
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.style.border = 'solid 3px black';
// var titles = document.getElementsByTagName('title');
// console.log(titles);
// titles[0].style.fontWeight = 'bold';
// titles[0].style.color = '#6eeb34';
// var lists = document.getElementsByTagName('li');
// lists[2].style.background = '#34eb5e';
// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.fontWeight = 'bold';
// }
// var lists2 = document.querySelector('.list-group-item:nth-child(2)');
// lists2.style.background = '#34eb5e';
// var lists3 = document.querySelector('.list-group-item:nth-child(3)');
// lists3.style.display = 'none';

// var listAll = document.querySelectorAll('.list-group-item');
// listAll[1].style.color ='#9bebb7';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
// odd[i].style.background = '#34eb5e';
// }
var itemList = document.querySelector('#items');

console.log(itemList.parentElement);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
console.log(itemList.lastChild);
itemList.lastElementChild.textContent="Seriously! This is the last one.";
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');
newDiv.className= "firstAdded";
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);
// console.log(newDiv);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

var newDiv2 = document.createElement('div');
newDiv2.className= "secondAdded";
var newDivText2 = document.createTextNode('Hello');
newDiv2.appendChild(newDivText2);

var unorder = document.querySelector('ul');
var li1 = document.querySelector('ul li:first-child');
unorder.insertBefore(newDiv2, li1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
  
    var deleteBtn = document.createElement('button');
  
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    deleteBtn.appendChild(document.createTextNode('X'));
  
    li.appendChild(deleteBtn);
  
    itemList.appendChild(li);
  }
  
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  