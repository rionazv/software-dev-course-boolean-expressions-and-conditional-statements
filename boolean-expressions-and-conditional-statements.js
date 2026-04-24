/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasMap = false;
let hasSword = false;
let currentMoney = 10;

let currentLocation = "start"; //define current location
let winCondition = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
let startingItem = readline.question("Choose a starting item - 'torch', 'map', or 'none'? "); //choose a starting item



if (startingItem === "torch") {
  hasTorch = true;
} else if (startingItem === "map") {
  hasMap = true;
}

let choice; 


while (currentLocation === "start") { //loops until the player leaves or loses the game

  choice = readline.question("Do you go to the 'mountains' or the 'village'? "); //player first choice

  if (choice === "mountains" && hasTorch) {

    console.log("You safely navigate to the dark mountains.");
    currentLocation = "mountains";

  } else if (choice === "mountains" && !hasTorch) {

    console.log("You take the dangrous, unlit journey to the mountains.");
    currentLocation = "mountains";

  } else if (choice === "village" && hasMap) {

    console.log("You find your way to the village.");
    currentLocation = "village";

  } else {

    console.log("You get lost and wander aimlessly.");
    currentLocation = "Game Over";

  }


}



/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

//In the mountains
while (currentLocation === "mountains" ) {

  if(!hasTorch) {

    choice = readline.question("Traversing the mountain is treacherous without a torch. You see something glingting in the moonlight. Do you approach it? 'Yes' or 'No' ");

    if(choice === "Yes") {

      console.log("You found a sword in good condition. Obtained a sword. You walk on to the peak of the mountain.");
      hasSword = true;
      currentLocation = "peak";

    } else if (choice === "No") {

      console.log("You decide to avoid the risk while you can't see. You slowly navigate to the peak of the mountain.");
      currentLocation = "peak";

    }


  }

  if(hasTorch) {

    choice = readline.question("You see some coins on the ground. Pick them up? 'Yes' or 'No' ");

    if (choice === "Yes") {

      console.log(`You pick up the coins and you now have ${currentMoney + 10} coins.\n`);
      choice = readline.question("Return to the base of the mountain, or keep walking to the peak? 'Base' or 'Peak' ");

      if (choice === "Base") {

        currentLocation = "start";

      } else if (choice === "Peak") {

        currentLocation = "peak";

      }


    } else if (choice === "No") {

      console.log("You walk on to the peak of the mountain. ");
      currentLocation = "peak";

    }

  }

} 



//In the village
while (currentLocation === "village" ) {

  console.log(`You see an open inn, but the nightly fee is 15 coins. You have ${currentMoney} coins.`);

  if(currentMoney >= 15) {

    choice = readline.question("Board at the inn? 'Yes' or 'No' ");

    if(choice === "Yes") {
      
      console.log("You safely spend the night at the inn and return home the next day.");
        winCondition = true;
        currentLocation = "Gave Over";

    } else if (choice === "No") {

        console.log("You return to the starting area.");
        currentLocation = "start"; //ok this does not work because the program reads top-down but that's ok

      }
  } else {

      console.log("You don't have enough money to board. You freeze to death.");

      currentLocation = "Game Over";

  }

} 




//At the mountain peak
while (currentLocation === "peak") {

  console.log("You encounter an evil wizard.");

  if (hasSword) {

    choice = readline.question("Do you fight him? 'Yes' or 'No' ");

    if (choice === "Yes") {

      console.log("The sword is no match for the evil wizard.");
      currentLocation = "Game Over";

    } else if (choice === "No") {

      console.log("Your peaceful nature has moved the wizard. He sends you home. ");
      winCondition = true;
      currentLocation = "Game Over";

    }

  } else if (!hasSword) {

    choice = readline.question("Bribe the wizard to send you home? 'Yes' or 'No' ");

    if (choice === "Yes") {

      console.log("Wizards have to eat too. He appreciates the gesture. ");
      winCondition = true;
      currentLocation = "Game Over";

    } else if (choice === "No") {

      console.log("He empties your pockets anyway and sends you down the mountain with the power of gravity. ");
      currentLocation = "Game Over";

    }

  }

}


//Game over
if (currentLocation === "Game Over") {
  console.log("Game Over! ");

  if (winCondition) {

    console.log("You win!");

  } else {

    console.log("You lose!");

  }
}