
// let cardsArray = [
// {	
// 	thing: 'A full comprehension of the Javascript',
// 	url: 'https://static.superdeluxe.com/dankland/generators/when-you-try-to-read-the-.jpg',
// }, {	
// 	thing: 'Time and flexibility to finish the assignments',
// 	url: 'https://www.rcthomas.com/wp-content/uploads/2016/08/iStock_52225964_XLARGE-1024x683.jpg'
// }, {	
// 	thing: "Encouragement from your class when you finally configure CSS and your website looks like it's from 2002",
// 	url: 'https://s-media-cache-ak0.pinimg.com/originals/cb/26/e5/cb26e51d88d1a0787e580c1c624f7e46.jpg',
// }, {	
//  	thing: 'Money For $10 Dollar Brunch Beers',
// 	url: 'http://www.nateleung.com/assets/7-Reasons-why-you%E2%80%99re-Dumb-and-Broke.jpg'
// }];

let cardsContainer = document.getElementById('cardsContainer');
let createBtn = document.getElementById('createBtn');

function createCard() {
	let textInput = document.getElementById('textInput').value;
	let newCard = '';
		newCard += `<div id='cardBox'>`;
		newCard += `<div class='text'><h3>${textInput}</h3></div>`;
		newCard += `<div class='deleteBtnDiv'>`;
		newCard += `<button class='deleteBtn'>Delete</button>`;
		newCard += `<div>`;
		newCard += `</div>`;
	writeCardToDom(newCard);
};

function writeCardToDom(card) {
	cardsContainer.innerHTML += card;
};

function deleteCard(event) {
	event.target.parentNode.parentNode.remove();
	event.target.remove();
};

createBtn.addEventListener('click', function(){
	createCard();
});

document.body.addEventListener('click', function(event){
  if(event.target.className === 'deleteBtn') {
    deleteCard(event);
  };
});



