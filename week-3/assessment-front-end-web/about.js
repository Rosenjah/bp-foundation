console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted!!!")

	//console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
