// variables 
const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector ('#first');
const lastNameEl = document.querySelector('#last');
const firstNames = [
    'neo',
    'morpheus',
    'trinity'
]
const lastNames = [
    'gorgonzola',
    'cheddar',
    'havariti'
]


// eventListeners
button.addEventListener('click', generateName);

// functions 
function generateName(e) {
    const rndLastName = randomChoice(lastNames);
    const rndFirstName = randomChoice(firstNames);
    firstNameEl.textContent = rndFirstName;
    lastNameEl.textContent = rndLastName; 

}
function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}
