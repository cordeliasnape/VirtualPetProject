console.log("hello world");

const petContainer = document.getElementById("pet-container");
const feedButton = document.getElementById("feed-button");
const hungerBar = document.getElementById("hunger-bar");

let hungerLevel = 100;
const decreaseRate = 1;

console.log("Hunger: " + `${Math.round(hungerLevel)}`);

function updatePet() {
  petContainer.innerText = "Hunger: " + `${Math.round(hungerLevel)}`;
  updateHungerBar();
}

function updateHungerBar() {
  hungerBar.style.width = `${hungerLevel}%`;
}

function decreaseHunger() {
  if (hungerLevel > 0) {
    const decreaseAmount = (decreaseRate / 100) * hungerLevel;
    hungerLevel -= decreaseAmount;
    if (hungerLevel < 0) {
      hungerLevel = 0;
    }
    updatePet();
  }
}

feedButton.addEventListener("click", feedPet);

setInterval(decreaseHunger, 1000);

updatePet();
