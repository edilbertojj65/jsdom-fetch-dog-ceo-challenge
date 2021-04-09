console.log('%c HI', 'color: firebrick')
let breeds = [];
function fetchdogs() {
    // To pass the tests, don't forget to return your fetch!
    
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(results => { results.message.forEach(image => renderdogs(image))
     });
    
  }

  function renderdogs(dogs) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogs;
    container.appendChild(newImageEl);
    
  }
  
  function fetchbreed() {
    // To pass the tests, don't forget to return your fetch!
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => { breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener(); 
     });
    
  }

  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchdogs();
    fetchbreed();
  });