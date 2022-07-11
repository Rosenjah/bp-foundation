let requestRestaurant = document.querySelector('#requestRestaurant');

requestRestaurant.addEventListener('click', handleRequestRestaurant);

function handleRequestRestaurant(evt) {
  evt.preventDefault();

  const myRestaurants = ['Mission Bbq'
    , 'Phoenician Taverna'
    , 'Two Cities Pizza Co.'
    , 'S.W. Clyborne Co. Provision & Spirits'
    , 'Luigis Ristorante Italiano'
    , 'Firebirds Wood Fired Grill'
    , 'Genki Ramen'];

  const random = Math.floor(Math.random() * myRestaurants.length);
  alert(myRestaurants[random] + ' will be a great restaurant for your date tonight!!');
}
