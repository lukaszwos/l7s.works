let img = document.querySelector('img');

function newDog() {fetch('https://dog.ceo/api/breed/ridgeback/images/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(dogJson) {
	console.log(dogJson.message);
	img.src = dogJson.message
  });
};

newDog()

let button = document.querySelector('button');

button.addEventListener('click', newDog);




  