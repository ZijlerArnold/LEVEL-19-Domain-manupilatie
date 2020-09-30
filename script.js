console.log('Jij bent goed bezig man :-)');
console.log('');
console.log('');


//=== Opdracht: DOM Manipulatie: dynamisch elementen toevoegen aan de DOM ===
console.log(`Opdracht: DOM Manipulatie: dynamisch elementen toevoegen aan de DOM`);

//// Deel 1 - Elementen toevoegen aan de DOM
console.log(` ===== The buttons with animals =====`);
const BigfiveBtns = document.querySelectorAll('.big-five-button');
BigfiveBtns.forEach(animal => {
    animal.addEventListener('click', (e) => {
        animals = animal.innerHTML
        console.log(`This is the button: ${animals}`);
        let spottedAnimalBox = document.querySelector('#spotted-animals-list');
        let newAnimal = document.createElement('li');
        let newAnimalName = document.createTextNode(animals);
        spottedAnimalBox.appendChild(newAnimal);
        newAnimal.appendChild(newAnimalName);
    });
});
//// Deel 1 uitgevoerd!!!!!!!!!



//// Deel 2 - 1 element verwijderen uit de DOM
//// To delete Duck
let deleteDuckButton = document.querySelector('#remove-first-item-button');
deleteDuckButton.addEventListener('click', (e) => {
    let spottedAnimalsListBox = document.querySelector('#spotted-animals-list');
    let duckToDelete = spottedAnimalsListBox.querySelector('.spotted-animals-list-item');
    spottedAnimalsListBox.removeChild(duckToDelete);
    return
});
// Deel 2 uitgevoerd!!!!!!!!!



// Deel 3 - Meerdere element verwijderen uit de DOM
// To delete all animals
let box = document.querySelector('#spotted-animals-list');
let animal = box.querySelectorAll('.spotted-animals-list-item');
let btnRemoveAllAnimals = document.querySelector('#remove-all-button');
btnRemoveAllAnimals.addEventListener('click', e => box.remove(animal));
// opdracht 3 uitgevoerd!!!!!!!!!












