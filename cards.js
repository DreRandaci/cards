
let cardsArray = [
{	
	thing: 'A full comprehension of the Javascript',
	url: 'https://static.superdeluxe.com/dankland/generators/when-you-try-to-read-the-.jpg',
}, {	
	thing: 'Time and flexibility to finish the assignments',
	url: 'https://www.rcthomas.com/wp-content/uploads/2016/08/iStock_52225964_XLARGE-1024x683.jpg'
}, {	
	thing: "Encouragement from your class when you finally figure CSS and your website looks like it's from 2002",
	url: 'https://s-media-cache-ak0.pinimg.com/originals/cb/26/e5/cb26e51d88d1a0787e580c1c624f7e46.jpg',
}]; //{	
// 	thing: '',
// 	url:
// }, {	
// 	thing:,
// 	url:
// }];

let cardsContainer = document.getElementById('cardsContainer');
let textArea = document.getElementById('textArea');
let createBtn = document.getElementById('createBtn');
let deleteBtn = document.getElementById('deleteBtn');
let thing = document.getElementById('thing');

function createCard(cards) {
	let card = '';
	let newCard = '';
	//may not need the loop
	//for (let i=0;i<cardsArray.length;i++){
		newCard += `<div id='cardBox'>`;
		newCard += `<div id='thing'>${cards[0].thing}</div>`;
		newCard += `<img class="thingImage" src="${cards[0].url}">`;
		newCard += `</div>`;
		newCard += `<button id='deleteBtn'>Delete</button>`;
		card += newCard;
	//};
	writeCardToDom(card);
};

function writeCardToDom(card) {
	cardsContainer.innerHTML = card;
}

createBtn.addEventListener('click', function(){
	createCard(cardsArray);
})

// deleteBtn.addEventListener('click', function(){
// 	cardsContainer.remove('thing');
// })




