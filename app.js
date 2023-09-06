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

var listAll = document.querySelectorAll('.list-group-item');
listAll[1].style.color ='#9bebb7';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
odd[i].style.background = '#34eb5e';
}