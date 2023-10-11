// MVP - Cat constructor function
function Pet(name, type, color) {
  this.name = name;
  this.type = type;
  this.color = color;
}

// Pet Color Changer
let divColorChanger = document.getElementById("pet-container");

function petColorChanger() {
  divColorChanger.style.backgroundColor = localStorage.getItem("petColor");
}
petColorChanger();

// Pet Animal Changer
let petImg = document.getElementById("petImg");
let lsAnimal = localStorage.getItem("petAnimal");
let lsAnimalLow = lsAnimal.toLowerCase();

function setAnimalImage() {
  if (lsAnimal === "Husky") {
    petImg.src = "./images/husky/husky-super1.png";
  } else if (lsAnimal === "Cat") {
    petImg.src = "./images/cat/cat-super1.png";
  }
}
setAnimalImage();

// Retrieve pet name, type, and color from localStorage
const savedPetName = localStorage.getItem("petName") || "Default Pet Name";
// const savedPetImage =
//   localStorage.getItem("petImage") || "/images/cats/cat-happy1.png";
const savedPetColor = localStorage.getItem("petColor") || "#ff0000";

// Set pet name, image, and color on the page
const nameBox = document.querySelector(".nameBox");
const gameSpace = document.querySelector(".gameSpace");

// Create a new Pet object with retrieved name, type, and color
const myPet = new Pet(
  savedPetName,
  // savedPetImage,
  savedPetColor
);

// Function to display pet information
function displayPetInfo() {
  // Display pet name, type, and color
  console.log(`Pet Name: ${myPet.name}`);
  console.log(`Animal Type: ${myPet.type}`);
  console.log(`Pet Color: ${myPet.color}`);
}

// Display pet name
const petNameElement = document.createElement("h1");
petNameElement.textContent = savedPetName;
nameBox.appendChild(petNameElement);

// Display pet image and color
// const petImageElement = document.createElement("img");
// petImageElement.src = savedPetImage;
// petImageElement.style.backgroundColor = savedPetColor;
// gameSpace.appendChild(petImageElement);

//add event listener
// const petForm = document.getElementById("pet-form");
// petForm.addEventListener("submit", petInfoSubmit);

//Patrick's background changing code
function showPark() {
  document.querySelector("body").style.background = "url('/images/backgroundlocations/animalpark.jpg') center center / cover";
}
function showParty() {
  document.querySelector("body").style.background = "url('images/backgroundlocations/animalparty.jpg') center center / cover";
}
const modal = document.getElementById("myModal");

const btn = document.getElementById("activityModalButton");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// End of Patrick's background changing code

//   // Call the displayPetInfo function
//   displayPetInfo();
// });
