//console.dir(document);
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.style.border = 'solid 3px black';
var titles = document.getElementsByTagName('title');
console.log(titles);
titles[0].style.fontWeight = 'bold';
titles[0].style.color = '#6eeb34';
var lists = document.getElementsByTagName('li');
lists[2].style.background = '#34eb5e';
for (let i = 0; i < lists.length; i++) {
    lists[i].style.fontWeight = 'bold';
}