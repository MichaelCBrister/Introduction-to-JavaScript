/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge 
if (age > 18) {
    console.log("true");
} else {
    console.log("false");
}
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var votingAge = (age < 18) ? "Too young":"Old enough";




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var c = Number("1999")




//Task d: Write a function to multiply a*b 
multiply(a , b) {
    return a * b;
}


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogAge(age) {
    var dogYears = 7 * age;
    console.log("You are " + dogYears + " dog-years old");
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function DoggieDiet(age , weight) {
    if(age >= 1) {
      if(weight <= 5) {
        var dogFood = (.05 * weight);
      } else if(weight <= 10) {
        var dogFood = (.04 * weight);
      } else if(weight <= 15) {
        var dogFood = (.03 * weight);
      } else if(weight > 15) {
        var dogFood = (.02 * weight);
      }
    } else if(age <= .33) {
      var dogFood = (.1 * weight);
    } else if(age <= .58) {
      var dogFood = (.05 * weight);
    } else if(age > .58) {
      var dogFood = (.04 * weight);
    }
    console.log("Your dog needs " + dogFood + "lbs of raw food per day.")
  }
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var win = "You Win!";
var loss = "You lose.";
var computerChoice = Math.random();
if (computerChoice < .34) {
  computerChoice = "rock";
} else if (computerChoice < .67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
function iChoose(userChoice) {
  if (userChoice === computerChoice) {
    var result = "It's a tie!";
  } else if (userChoice === "rock") {
    if(computerChoice === "paper") {
      var result = loss;
    } else if(computerChoice === "scissors") {
      var result = win;
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      var result = win;
    } else if (computerChoice === "scissors") {
      var result = loss;
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      var result = loss;
    } else if (computerChoice === "paper") {
      var result = win;
    }
  } else {
    var result = "You're not playing by the rules.";
  }
console.log("You chose " + userChoice + " the computer chose " + computerChoice + ". " + result)
}
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function km(kilometers) {
    var miles = (kilometers / 1.609);
    console.log(kilometers + " kilometers is equal to " + miles + " miles.");
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feet(ft) {
    var cm = (ft * 30.48);
    console.log(ft + " feet is equal to " + cm + " centimeters.");
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong() {
    var word = "bottles";
    var count = 99;
    while (count > 0) {
      if (count == 1){
        var word = "bottle"
        }
      console.log(count + " " + word + " of beer on the wall");
      console.log(count + " " + word + " of beer,");
      console.log("Take one down, pass it around,");
      count = count - 1;
      if (count > 0) {
        if (count == 1){
          var word = "bottle"
          }
      } else {
        if (count < 1){
          var word = "bottles"
          }
        console.log("No more " + word + " of beer on the wall.");
      }
    }
  }
annoyingSong();
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grade(number) {
    if (number >= 90) {
        var letter = "A";
    } else if (number >= 80) {
        var letter = "B";
    } else if (number >= 70) {
        var letter = "C";
    } else if (number >= 60) {
        var letter = "D";
    } else {
        var letter ="F";
    }
    console.log(number + " " + letter);
}
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





