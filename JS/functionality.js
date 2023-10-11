// Globals to change pet animation & image
let petMood = "super";
let petImageNum = 1;

// Getting every element needed
const gameOver = document.getElementById("gameOver");
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
  updateEveryTick: {
    tickUpdate: {
      hunger: 1000,
      health: 5000,
      happy: 1000,
    },
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
  petMethods: {
    updateHunger() {
      if (petEverything.updateEveryTick.levelDefault.hunger > 0) {
        petEverything.updateEveryTick.levelDefault.hunger -= petEverything.updateEveryTick.updateRates.hunger;

        if (petEverything.updateEveryTick.levelDefault.hunger < 0) {
          petEverything.updateEveryTick.levelDefault.hunger = 0;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    updateHealth() {
      if (petEverything.updateEveryTick.levelDefault.health > 0) {
        petEverything.updateEveryTick.levelDefault.health += petEverything.updateEveryTick.updateRates.health;
        if (petEverything.updateEveryTick.levelDefault.health > 100) {
          petEverything.updateEveryTick.levelDefault.health = 100;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    updateHappy() {
      if (petEverything.updateEveryTick.levelDefault.happy > 0) {
        petEverything.updateEveryTick.levelDefault.happy -= petEverything.updateEveryTick.updateRates.happy;
        if (petEverything.updateEveryTick.levelDefault.happy < 0) {
          petEverything.updateEveryTick.levelDefault.happy = 0;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    petUpdate() {
      hungerBar.style.width = `${petEverything.updateEveryTick.levelDefault.hunger}%`;
      healthBar.style.width = `${petEverything.updateEveryTick.levelDefault.health}%`;
      happyBar.style.width = `${petEverything.updateEveryTick.levelDefault.happy}%`;

      if (
        petEverything.updateEveryTick.levelDefault.hunger <= 1 ||
        petEverything.updateEveryTick.levelDefault.health <= 1 ||
        petEverything.updateEveryTick.levelDefault.happy <= 1
      ) {
        petHasDied();
      } else if (petEverything.updateEveryTick.levelDefault.hunger <= 30 || (petEverything.updateEveryTick.levelDefault.happy <= 30 && petMood !== "sad")) {
        petMood = "sad";
      } else if (petEverything.updateEveryTick.levelDefault.hunger <= 50 || (petEverything.updateEveryTick.levelDefault.happy <= 50 && petMood !== "mid")) {
        petMood = "mid";
      } else if (petEverything.updateEveryTick.levelDefault.hunger <= 90 || (petEverything.updateEveryTick.levelDefault.happy <= 90 && petMood !== "happy")) {
        petMood = "happy";
      } else if (
        petEverything.updateEveryTick.levelDefault.hunger > 90 ||
        (petEverything.updateEveryTick.levelDefault.health >= 50 && petEverything.updateEveryTick.levelDefault.happy > 90 && petMood !== "super")
      ) {
        petMood = "super";
      }
    },
    petAnimate() {
      if (petImageNum === 1) {
        petImageNum = 2;
      } else {
        petImageNum = 1;
      }
      petImg.src = `/images/${lsAnimalLow}/${lsAnimalLow}-${petMood}${petImageNum}.png`;
    },
  },
};
// Running each function
setInterval(petEverything.petMethods.updateHunger, petEverything.updateEveryTick.tickUpdate.hunger);
setInterval(petEverything.petMethods.updateHealth, petEverything.updateEveryTick.tickUpdate.health);
setInterval(petEverything.petMethods.updateHappy, petEverything.updateEveryTick.tickUpdate.happy);
setInterval(petEverything.petMethods.petAnimate, 500);
//Food
feedButton.addEventListener("click", () => animalReward(petEverything.food.feed));
chocoButton.addEventListener("click", () => animalReward(petEverything.food.chocolate));
saladButton.addEventListener("click", () => animalReward(petEverything.food.salad));
//Activities
partyButton.addEventListener("click", () => animalReward(petEverything.activities.party));
parkButton.addEventListener("click", () => animalReward(petEverything.activities.park));
gymButton.addEventListener("click", () => animalReward(petEverything.activities.gym));

// Food Function
function animalReward(reward) {
  petEverything.updateEveryTick.levelDefault.hunger += reward.hunger;
  if (petEverything.updateEveryTick.levelDefault.hunger > 100) {
    petEverything.updateEveryTick.levelDefault.hunger = 100;
  }
  petEverything.updateEveryTick.levelDefault.happy += reward.happy;
  if (petEverything.updateEveryTick.levelDefault.happy > 100) {
    petEverything.updateEveryTick.levelDefault.happy = 100;
  }
  petEverything.updateEveryTick.levelDefault.health += reward.health;
  if (petEverything.updateEveryTick.levelDefault.health > 100) {
    petEverything.updateEveryTick.levelDefault.health = 100;
  }
  petEverything.petMethods.petUpdate();
}

// Pet dying function
function petHasDied() {
  gameOver.style.display = "flex";
}
function restartGame() {
  location.assign("./index.html");
}
