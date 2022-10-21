// Business logic

// Retrieve user input and tally answers
function retrieveAndTally () {
  // Store user answers in variables
  const ans1 = document.querySelector("input[name='question1']:checked").value;
  const ans2 = document.querySelector("input[name='question2']:checked").value;
  const ans3 = document.querySelector("input[name='question3']:checked").value;
  const ans4 = document.querySelector("input[name='question4']:checked").value;
  const ans5 = document.querySelector("input[name='question5']:checked").value;

  // Tally answers 
  let tallyA = 0;
  let tallyB = 0;
  let tallyC = 0;
  let tallyD = 0;

  // Tabulate answer to question 1
  if (ans1 === "a") {
    tallyA += 1;
  } else if (ans1 === "b") {
    tallyB += 1;
  } else if (ans1 === "c") {
    tallyC += 1;
  } else if (ans1 === "d") {
    tallyD += 1;
  } else {
    // Display invalid input error below question 1
  };

  // Tabulate answer to question 2
  if (ans2 === "a") {
    tallyA += 1;
  } else if (ans2 === "b") {
    tallyB += 1;
  } else if (ans2 === "c") {
    tallyC += 1;
  } else if (ans2 === "d") {
    tallyD += 1;
  } else {
    // Display invalid input error below question 2
  };

  // Tabulate answer to question 3
  if (ans3 === "a") {
    tallyA += 1;
  } else if (ans3 === "b") {
    tallyB += 1;
  } else if (ans3 === "c") {
    tallyC += 1;
  } else if (ans3 === "d") {
    tallyD += 1;
  } else {
    // Display invalid input error below question 3
  };

  // Tabulate answer to question 4
  if (ans4 === "a") {
    tallyA += 1;
  } else if (ans4 === "b") {
    tallyB += 1;
  } else if (ans4 === "c") {
    tallyC += 1;
  } else if (ans4 === "d") {
    tallyD += 1;
  } else {
    // Display invalid input error below question 4
  };

  // Tabulate answer to question 5
  if (ans5 === "a") {
    tallyA += 1;
  } else if (ans5 === "b") {
    tallyB += 1;
  } else if (ans5 === "c") {
    tallyC += 1;
  } else if (ans5 === "d") {
    tallyD += 1;
  } else {
    // Display invalid input error below question 5
  };

  // Check tally functionality
  console.log("TallyA = " + tallyA);
  console.log("TallyB = " + tallyB);
  console.log("TallyC = " + tallyC);
  console.log("TallyD = " + tallyD);

  return calculateResult(tallyA, tallyB, tallyC, tallyD);
};

function calculateResult(talA, talB, talC, talD) {
  let winner;
  let otherWinner;
  // Determine which letter has the highest tally
  if (talA === 2 && talB === 2) {
    winner = "a";
    otherWinner = "b";
  } else if (talA === 2 && talC === 2) {
    winner = "a";
    otherWinner = "c"
  } else if (talA === 2 && talD === 2) {
    winner = "a";
    otherWinner = "d"
  } else if (talB === 2 && talC === 2) {
    winner = "b";
    otherWinner = "c";
  } else if (talB === 2 && talD === 2) {
    winner = "b";
    otherWinner = "d"
  } else if (talC === 2 && talD === 2) {
    winner = "c";
    otherWinner = "d";
  };

  // Check calculate functionality
  console.log(winner);

  return winner;
}

// UI Logic
// Display results
function displayResults(winningLang) {
  // Define answer key
  const a = "Language1";
  const b = "Language2";
  const c = "Language3";
  const d = "Language4";
  
  //Initialize langResult variable

  // Add logic to determine language name
  if (winningLang === "a") {
    langResult = a;
  } else if (winningLang === "b") {
    langResult = b;
  } else if (winningLang === "c") {
    langResult = c;
  } else if (winningLang === "d") {
    langResult = d;
  } else {
    langResult = "to make up your mind"
  }

  // Display results based on winner
  document.getElementById("results").removeAttribute("class");
  document.getElementById("langResult").innerText = langResult;
};


// When page loads, run these functions:
window.addEventListener("load", function() {
  // When form is submitted, run these functions:
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    // Prevent page from reloading on submission
    event.preventDefault();
      // Retrieve & tally answers, calculate results
      const result = retrieveAndTally();
      displayResults(result);
      // Display results
  });

});
  
    