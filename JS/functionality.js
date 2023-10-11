let petMood = "super";
let petImageNum = 1;

const petContainer = document.getElementById("pet-container");

// bars/levels
const hungerBar = document.getElementById("hunger-bar");
const healthBar = document.getElementById("health-bar");
const happyBar = document.getElementById("happy-bar");

// foods
const feedButton = document.getElementById("feed-button");
const chocoButton = document.getElementById("choco-button");
const saladButton = document.getElementById("salad-button");

//activites
const partyButton = document.getElementById("party-button");
const parkButton = document.getElementById("park-button");
const gymButton = document.getElementById("gym-button");

// Level Defaults (%)
let hungerLevel = 100;
let healthLevel = 50;
let happyLevel = 100;

// Level Changing Rates (% per update)
const hungerUpdateRate = 1;
const healthUpdateRate = 2;
const happyUpdateRate = 1;

// Function to update the pet's bars every tick
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

// Functions to update the bars based on the level changing rates
function updateHunger() {
  if (hungerLevel > 0) {
    //                            1/100 = 0.01. 0.01 * 100 = 1.
    //                            1/99  = 0.0101. 0.0101 * 100 = 1.01.
    const updateAmount = (hungerUpdateRate / 100) * hungerLevel;
    // 100 - 1 = 99
    // 99 - 1.01 = 97.99
    hungerLevel -= updateAmount;

    // If hunger level becomes below 0 reset to 0
    if (hungerLevel < 0) {
      hungerLevel = 0;
    }
    updatePet();
  }
}
function updateHealth() {
  if (healthLevel > 0) {
    const updateAmount = (healthUpdateRate / 100) * healthLevel;
    healthLevel += updateAmount;
    if (healthLevel > 100) {
      healthLevel = 100;
    }
    updatePet();
  }
}
function updateHappy() {
  if (happyLevel > 0) {
    const updateAmount = (happyUpdateRate / 100) * hungerLevel;
    happyLevel -= updateAmount;
    if (happyLevel < 0) {
      happyLevel = 0;
    }
    updatePet();
  }
}

//testIntervals
setInterval(updateHunger, 200);
setInterval(updateHealth, 2500);
setInterval(updateHappy, 200);
setInterval(petAnimate, 500);
updatePet();

//real intervals
// setInterval(updateHunger, 2000);
// setInterval(updateHealth, 5000);
// setInterval(updateHappy, 1000);
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

partyButton.addEventListener("click", function () {
  hungerLevel -= 10;
  if (hungerLevel < 0) {
    hungerLevel = 0;
  }
  happyLevel += 20;
  if (happyLevel > 100) {
    happyLevel = 100;
  }
  updatePet();
});

parkButton.addEventListener("click", function () {
  healthLevel += 10;
  if (healthLevel > 100) {
    healthLevel = 100;
  }
  happyLevel += 20;
  if (happyLevel > 100) {
    happyLevel = 100;
  }
  updatePet();
});

gymButton.addEventListener("click", function () {
  hungerLevel -= 10;
  if (hungerLevel < 0) {
    hungerLevel = 0;
  }
  healthLevel += 20;
  if (healthLevel > 100) {
    healthLevel = 100;
  }
  updatePet();
});

function updatePetMood() {
  const petImg = document.getElementById("petImg");

  if (hungerLevel <= 5 || healthLevel <= 10 || happyLevel <= 5) {
    petImg.src = `/images/end2.png`;
    petHasDied();
  } else if (hungerLevel <= 30 || (happyLevel <= 30 && petMood !== "sad")) {
    petMood = "sad";
  } else if (hungerLevel <= 50 || (happyLevel <= 50 && petMood !== "mid")) {
    petMood = "mid";
  } else if (hungerLevel <= 90 || (happyLevel <= 90 && petMood !== "happy")) {
    petMood = "happy";
  } else if (hungerLevel > 90 || (healthLevel >= 50 && happyLevel > 90 && petMood !== "super")) {
    petMood = "super";
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

// function updateCatImage() {
//   const petImg = document.getElementById("petImg");

//   if (hungerLevel <= 5 || healthLevel <= 10 || happyLevel <= 5) {
//     petImg.src = "/images/end2.png";
//     petHasDied();
//   } else if (hungerLevel <= 30 && happyLevel <= 30) {
//     petImg.src = "/images/cats/cat-sad1.png";
//   } else if (hungerLevel <= 50 && happyLevel <= 50) {
//     petImg.src = "/images/cats/cat-mid1.png";
//   } else if (hungerLevel <= 90 && happyLevel <= 90) {
//     petImg.src = "/images/cats/cat-happy1.png";
//   } else if (hungerLevel > 90 && healthLevel >= 50 && happyLevel > 90) {
//     petImg.src = "/images/cats/cat-super1.png";
//   } else {
//     petImg.src = "";
//   }
// }

// function updateDogImage() {
//   const petImg = document.getElementById("petImg");

//   if (hungerLevel <= 5 || healthLevel <= 10 || happyLevel <= 5) {
//     petImg.src = "/images/end2.png";
//     petHasDied();
//   } else if (hungerLevel <= 30 && happyLevel <= 30) {
//     petImg.src = "/images/husky/dog-sad1.png";
//   } else if (hungerLevel <= 50 && happyLevel <= 50) {
//     petImg.src = "/images/husky/dog-mid1.png";
//   } else if (hungerLevel <= 90 && happyLevel <= 90) {
//     petImg.src = "/images/husky/dog-happy1.png";
//   } else if (hungerLevel > 90 && healthLevel >= 50 && happyLevel > 90) {
//     petImg.src = "/images/husky/dog-super1.png";
//   } else {
//     petImg.src = "";
//   }
// }

function updatePet() {
  updateHungerBar();
  updateHealthBar();
  updateHappyBar();

  updatePetMood();
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
}
