// Saves Button
let mySavesContainer = document.getElementById("petSavesContainer");

function savesClicked() {
  if (mySavesContainer.style.display === "none" || mySavesContainer.style.display === "") {
    mySavesContainer.style.display = "flex";
  } else {
    mySavesContainer.style.display = "none";
  }
}

// Pet Namer
let inputName = "Pet Name";
let myNameContainer = document.getElementById("nameContainer");
let inputPetName = document.getElementById("nameOfPet");

function showNameContainer() {
  if (myNameContainer.style.display === "none" || myNameContainer.style.display === "") {
    myNameContainer.style.display = "flex";
  } else if (myNameContainer.style.display === "flex" && inputName === "") {
    myNameContainer.style.display = "none";
    inputName = "Freddie";
    setPetName();
  } else {
    myNameContainer.style.display = "none";
  }
}

function setPetName() {
  inputPetName.innerText = inputName;
}

// Pet Name Form
const petNameForm = document.getElementById("nameContainer");

petNameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = event.target.inputName.value;
  inputName = petName;

  if (petName.length === 0) {
    inputName = "Freddie";
  }

  localStorage.setItem("petName", inputName);
  showNameContainer();
  setPetName();
});

// if (localStorage.getItem(""))

// Colour Changer
const petImg = document.getElementById("petImg");
