
/* // Info from Homeworkw3d4.html
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
 */
// slide 12 sledgehammer approach to get or set html text
//Get all inputs
let div = document.querySelector('div');
let a = document.querySelector('a');

console.log(a.innerHTML); //"click me"
console.log(div.innerHTML); //'<a href="#">Click me</a>'

a.innerHTML = "Updated link text";



// Select items of the DOM
/* let selectedItem = document.querySelector('li.selected');
console.log(selectedItem);
let first = selectedItem.previousElementSibling;
console.log(first);
let last = selectedItem.nextElementSibling;
console.log(last);
let list = selectedItem.parentElement;
console.log(list);
let header = selectedItem.parentElement.parentElement;
console.log(header);
let section = selectedItem.parentElement.parentElement.nextElementSibling;
console.log(section); */

//Slide 11
//Laziness is your friend...
// let q = document.querySelector.bind(document)
// let qa = document.querySelectorAll.bind(document);


// q('header');
// qa('section');
// q('section.current');
// q('section.current').nextElementSibling;
// q('section.current').previousElementSibling.children[0];
// q('h2.highlight').parentElement.parentElement;

// let foo = Array.from(qa('section h2'))
//     .map(function(headline){
//         return headline.parentElement;
//     });


/* let thisthing = (function(){
    let name="Scott";
    console.log(name);

})();

let p = document.getElementById("favorite");
p.style.color = red;

let headings = document.getElementsByTagName('h3');
headings[0].style.color = "blue";
headings[1].style.color = "blue"; */



