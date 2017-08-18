
let cardsContainer = document.getElementById('cardsContainer');
let createBtn = document.getElementById('createBtn');
let clearBtn = document.getElementById('clearBtn');
let textInput = document.getElementById('textInput');

function createCard() {
	let textInputValue = document.getElementById('textInput').value;
	let newCard = '';
		newCard += `<div id='cardBox'>`;
		newCard += `<div class='text'><h3>${textInputValue}</h3></div>`;
		newCard += `<div class='deleteBtnDiv'>`;
		newCard += `<button class='deleteBtn' btn>Delete</button>`;
		newCard += `</div>`;
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

textInput.addEventListener('keypress', function(event){
	if (event.key === 'Enter') {
  		createCard();
	};
});

clearBtn.addEventListener('click', function() {
	cardsContainer.innerHTML = '';
	textInput.value = '';
});


