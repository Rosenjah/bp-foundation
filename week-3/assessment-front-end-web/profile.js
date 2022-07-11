let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', handleColorClick);
ritual.addEventListener('click', handleRitualClick);
place.addEventListener('click', handlePlaceClick);


function handleColorClick(evt) {
  evt.preventDefault();
  alert("My favorite color is Red!!!")
}

function handleRitualClick(evt) {
  evt.preventDefault();
  alert("My favorite ritual is drinking milk in the morning!!!")
}

function handlePlaceClick(evt) {
  evt.preventDefault();
  alert("My favorite place is Nyanga!!!")
}
