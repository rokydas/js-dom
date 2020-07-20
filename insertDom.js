const article = document.getElementById('first-article');
const newParagraph = document.createElement('p');
newParagraph.innerHTML = "This is added by js";
article.appendChild(newParagraph);

//add one more gift item
const giftItem = document.getElementById('gift-item');
const newItem = document.createElement('li');
newItem.innerHTML = "gift-item-6 by js";
giftItem.appendChild(newItem);