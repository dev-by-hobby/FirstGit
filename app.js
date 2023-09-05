//console.dir(document);
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.style.border = 'solid 3px black';
var titles = document.getElementsByClassName('title');
console.log(titles);
titles[0].style.fontWeight = 'bold';
titles[0].style.color = '#6eeb34';