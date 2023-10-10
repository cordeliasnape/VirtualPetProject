// console.log("hello world");

const petContainer = document.getElementById("pet-container");

// bars/levels
const hungerBar = document.getElementById("hunger-bar");
const healthBar = document.getElementById("health-bar");
const happyBar = document.getElementById("happy-bar");

// foods
const feedButton = document.getElementById("feed-button");
const chocoButton = document.getElementById("choco-button");
const saladButton = document.getElementById("salad-button");

// hunger decrease
let hungerLevel = 100;
const hungerDecreaseRate = 1;

// health increase
let healthLevel = 50;
const healthIncreaseRate = 2;

// happiness decrease
let happyLevel = 100;
const happyDecreaseRate = 1;

//
function updatePet() {
  updateHungerBar();
  updateHealthBar();
  updateHappyBar();
}

function updateHungerBar() {
  hungerBar.style.width = `${hungerLevel}%`;
}
function updateHealthBar() {
  healthBar.style.width = `${healthLevel}%`;
}
function updateHappyBar() {
  happyBar.style.width = `${happyLevel}%`;
}

function decreaseHunger() {
  if (hungerLevel > 0) {
    const decreaseAmount = (hungerDecreaseRate / 100) * hungerLevel;
    hungerLevel -= decreaseAmount;
    if (hungerLevel < 0) {
      hungerLevel = 0;
    }
    updatePet();
  }
}

function increaseHealth() {
  if (healthLevel > 0) {
    const increaseAmount = (healthIncreaseRate / 100) * healthLevel;
    healthLevel += increaseAmount;
    if (healthLevel < 0) {
      healthLevel = 0;
    }
    updatePet();
  }
}

function decreaseHappy() {
  if (happyLevel > 0) {
    const decreaseAmount = (happyDecreaseRate / 100) * hungerLevel;
    happyLevel -= decreaseAmount;
    if (happyLevel < 0) {
      happyLevel = 0;
    }
    updatePet();
  }
}


//testIntervals
setInterval(decreaseHunger, 1000);
setInterval(increaseHealth, 2500);
setInterval(decreaseHappy, 500);
updatePet();

//real intervals
// setInterval(decreaseHunger, 2000);
// setInterval(increaseHealth, 5000);
// setInterval(decreaseHappy, 1000);
// updatePet();

// food buttons

feedButton.addEventListener("click", function () {
  hungerLevel += 5;
  if (hungerLevel > 100) {
    hungerLevel = 100;
  }
  updatePet();
});

chocoButton.addEventListener("click", function () {
  hungerLevel += 6;
  if (hungerLevel > 100) {
    hungerLevel = 100;
  }
  happyLevel += 10;
  if (happyLevel > 100) {
    happyLevel = 100;
  }
  healthLevel -= 2;
  if (healthLevel < 0) {
    healthLevel = 0;
  }
  updatePet();
});

saladButton.addEventListener("click", function () {
  hungerLevel += 3;
  if (hungerLevel > 100) {
    hungerLevel = 100;
  }
  healthLevel += 2;
  if (healthLevel > 100) {
    healthLevel = 100;
  }
  happyLevel -= 5;
  if (happyLevel < 0) {
    happyLevel = 0;
  }
  updatePet();
});
