console.log("Hello World");

const petName = prompt("Enter the name of your virtual pet: ");
const petType = prompt("Choose you animal:");
//MVP - Cat constructor function
function Pet(name) {
  this.name = name;
  this.type = "cat";
}
//STRETCH: allow user to change the color of the animal

//function when user clicks submit on form
function petInfoSubmit(event) {
  event.preventDefault();

  //get the values from the form
  const petName = document.getElementById("pet-name").value;
  const animalType = document.getElementById("animal-type").value.toLowerCase();

  //check if user types Cat
  if (animalType === "cat") {
    const myPet = new Pet(petName, petType);
    console.log(`Cat Name: ${myPet.name}`);
    console.log(`Animal Type: ${myPet.type}`);
  } else {
    console.log("Try again. Choose an animal from the list");
  }
}

//get cat name from local storage from page 1
//check if name exists in local storage and display it
// const savedPetName = localStorage.getItem("petName")
// if (savedPetName){
//   console.log(`Saved Cat Name: ${savedPetName}`)
// }

//add event listener
const petForm = document.getElementById("pet-form");
petForm.addEventListener("submit", petInfoSubmit);
