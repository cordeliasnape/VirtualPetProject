console.log("Hello World");

// MVP - Cat constructor function
function Pet(name, type, color) {
  this.name = name;
  this.type = type;
  this.color = color;
}

// Retrieve pet name, type, and color from localStorage
const savedPetName = localStorage.getItem("petName") || "Default Pet Name";
const savedPetImage =
  localStorage.getItem("petImage") || "/images/cats/cat-happy1.png";
const savedPetColor = localStorage.getItem("petColor") || "#ff0000";

// Set pet name, image, and color on the page
const nameBox = document.querySelector(".nameBox");
const gameSpace = document.querySelector(".gameSpace");

// Create a new Pet object with retrieved name, type, and color
const myPet = new Pet(savedPetName, savedPetImage, savedPetColor);

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
const petImageElement = document.createElement("img");
petImageElement.src = savedPetImage;
petImageElement.style.backgroundColor = savedPetColor;
gameSpace.appendChild(petImageElement);

// Get the form element and add an event listener
// const petForm = document.getElementById("pet-form");

// petForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get the input values from the form
//   const petName = document.getElementById("pet-name").value;
//   const petType = document.getElementById("animal-type").value.toLowerCase();
//   const petColor = document.getElementById("pet-color").value;

//   // Save the input values to localStorage
//   localStorage.setItem("petName", petName);
//   localStorage.setItem("petType", petType);
//   localStorage.setItem("petColor", petColor);

//   // Update the myPet object with new values
//   myPet.name = petName;
//   myPet.type = petType;
//   myPet.color = petColor;

//   // Call the displayPetInfo function
//   displayPetInfo();
// });
