// Globals to change pet animation & image
// DO NOT TOUCH
let petMood = "super";
let petImageNum = 1;

// Getting every element needed
// DO NOT TOUCH
const hungerBar = document.getElementById("hunger-bar");
const healthBar = document.getElementById("health-bar");
const happyBar = document.getElementById("happy-bar");
const feedButton = document.getElementById("feed-button");
const chocoButton = document.getElementById("choco-button");
const saladButton = document.getElementById("salad-button");
const partyButton = document.getElementById("party-button");
const parkButton = document.getElementById("park-button");
const gymButton = document.getElementById("gym-button");

// Every Detail on the Pet
let petEverything = {
  levelDefault: {
    hunger: 75,
    health: 50,
    happy: 100,
  },
  updateRates: {
    hunger: 1,
    health: 2,
    happy: 1,
  },
  food: {
    feed: {
      happy: 1,
      health: 0,
      hunger: 5,
    },
    chocolate: {
      happy: 5,
      health: -3,
      hunger: 1,
    },
    salad: {
      happy: -3,
      health: 3,
      hunger: 0,
    },
  },
  activities: {
    gym: {
      happy: 2,
      health: 5,
      hunger: -3,
    },
    park: {
      happy: 3,
      health: 1,
      hunger: -2,
    },
    party: {
      happy: 5,
      health: -1,
      hunger: -2,
    },
  },
};

// Function to update the pet every tick
function updatePet() {
  hungerBar.style.width = `${petEverything.levelDefault.hunger}%`;
  healthBar.style.width = `${petEverything.levelDefault.health}%`;
  happyBar.style.width = `${petEverything.levelDefault.happy}%`;

  if (petEverything.levelDefault.hunger <= 5 || petEverything.levelDefault.health <= 10 || petEverything.levelDefault.happy <= 5) {
    petImg.src = `/images/end2.png`;
    petHasDied();
  } else if (petEverything.levelDefault.hunger <= 30 || (petEverything.levelDefault.happy <= 30 && petMood !== "sad")) {
    petMood = "sad";
  } else if (petEverything.levelDefault.hunger <= 50 || (petEverything.levelDefault.happy <= 50 && petMood !== "mid")) {
    petMood = "mid";
  } else if (petEverything.levelDefault.hunger <= 90 || (petEverything.levelDefault.happy <= 90 && petMood !== "happy")) {
    petMood = "happy";
  } else if (
    petEverything.levelDefault.hunger > 90 ||
    (petEverything.levelDefault.health >= 50 && petEverything.levelDefault.happy > 90 && petMood !== "super")
  ) {
    petMood = "super";
  }
}

// Functions to update the bars every setInterval
function updateHunger() {
  if (petEverything.levelDefault.hunger > 0) {
    petEverything.levelDefault.hunger -= petEverything.updateRates.hunger;

    if (petEverything.levelDefault.hunger < 0) {
      petEverything.levelDefault.hunger = 0;
    }
    updatePet();
  }
}
function updateHealth() {
  if (petEverything.levelDefault.health > 0) {
    petEverything.levelDefault.health += petEverything.updateRates.health;
    if (petEverything.levelDefault.health > 100) {
      petEverything.levelDefault.health = 100;
    }
    updatePet();
  }
}
function updateHappy() {
  if (petEverything.levelDefault.happy > 0) {
    petEverything.levelDefault.happy -= petEverything.updateRates.happy;
    if (petEverything.levelDefault.happy < 0) {
      petEverything.levelDefault.happy = 0;
    }
    updatePet();
  }
}
function petAnimate() {
  if (petImageNum === 1) {
    petImageNum = 2;
  } else {
    petImageNum = 1;
  }
  petImg.src = `/images/${lsAnimalLow}/${lsAnimalLow}-${petMood}${petImageNum}.png`;
}
//testIntervals
setInterval(updateHunger, 200);
setInterval(updateHealth, 2500);
setInterval(updateHappy, 200);
setInterval(petAnimate, 500);

//real intervals
// setInterval(updateHunger, 2000);
// setInterval(updateHealth, 5000);
// setInterval(updateHappy, 1000);
// updatePet();

//Food
feedButton.addEventListener("click", () => animalReward(petEverything.food.feed));
chocoButton.addEventListener("click", () => animalReward(petEverything.food.chocolate));
saladButton.addEventListener("click", () => animalReward(petEverything.food.salad));
//Activities
partyButton.addEventListener("click", () => animalReward(petEverything.activities.party));
parkButton.addEventListener("click", () => animalReward(petEverything.activities.park));
gymButton.addEventListener("click", () => animalReward(petEverything.activities.gym));

// Food Functions
function animalReward(reward) {
  petEverything.levelDefault.hunger += reward.hunger;
  if (petEverything.levelDefault.hunger > 100) {
    petEverything.levelDefault.hunger = 100;
  }
  petEverything.levelDefault.happy += reward.happy;
  if (petEverything.levelDefault.happy > 100) {
    petEverything.levelDefault.happy = 100;
  }
  petEverything.levelDefault.health += reward.health;
  if (petEverything.levelDefault.health > 100) {
    petEverything.levelDefault.health = 100;
  }
  updatePet();
}

// Pet dying function
function petHasDied() {
  let divCreation = document.createElement("div");
  console.log(divCreation);

  divCreation.style.width = "100vw";
  divCreation.style.height = "100vh";
  divCreation.style.backgroundColor = "#000";
  divCreation.style.position = "absolute";
  divCreation.style.top = "0";
  divCreation.style.left = "0";
  divCreation.style.display = "flex";
  divCreation.style.alignItems = "center";
  divCreation.style.justifyContent = "center";
  divCreation.style.flexDirection = "column";

  let gameOver = document.createElement("h3");
  gameOver.innerHTML = "GAME OVER!";
  gameOver.style.color = "#fff";
  gameOver.style.fontSize = "64px";
  divCreation.appendChild(gameOver);

  let restart = document.createElement("button");
  restart.innerText = "RESTART";
  restart.style.marginTop = "50px";
  restart.style.fontSize = "42px";
  restart.style.borderRadius = "12px";
  restart.onclick = function () {
    location.assign("./index.html");
  };
  divCreation.appendChild(restart);

  let containerWrapper = document.getElementById("container-wrapper");

  document.body.insertBefore(divCreation, containerWrapper);

  petImg.style.zIndex = 20;
}
