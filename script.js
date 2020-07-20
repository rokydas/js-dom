//alert("I am learning JavaScript");
// debugger;
var first = document.getElementById("explore");
first.style.color = 'red';
first.style.fontSize = '50px';
first.style.backgroundColor = 'green';

let authors = document.getElementsByClassName('author');
for(let i = 0; i < authors.length; i ++){
    var element = authors[i];
    // console.log(element);
    element.style.backgroundColor = 'lightblue';
    element.style.margin = '5px';
    element.innerHTML = "This is changed by js "+ (i+1);
}

var special = document.querySelector('.special h3');
special.setAttribute('title', 'It is a title');

var article1 = document.getElementById('article1');
article1.setAttribute('title', 'title by js');

// querySelector ar querySelectorAll er modhye difference holo querySelector jader ke pabe tader modhye sudhu prothom jon ke return korbe ba show korbe. kintu querySelectorAll joto element pawa jabe sobaike array te rekhe array ta return korbe ba show korbe console e. 