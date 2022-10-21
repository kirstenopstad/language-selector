// Retrieve user input and tally answers
function retrieveAndTally () {
  // Store user answers in variables
  const ans1 = document.querySelector("input[name='question1']:checked").value;
  const ans2 = document.querySelector("input[name='question2']:checked").value;
  const ans3 = document.querySelector("input[name='question3']:checked").value;

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

  // Check tally functionality
  console.log("TallyA = " + tallyA);
  console.log("TallyB = " + tallyB);
  console.log("TallyC = " + tallyC);
  console.log("TallyD = " + tallyD);

  return calculateResult(tallyA, tallyB, tallyC, tallyD);
};

function calculateResult(talA, talB, talC, talD) {
  let winner;
  // Determine which letter has the highest tally
  if (talA > talB && talA > talC && talA > talD) {
    winner = "a";
  } else if (talB > talA && talB > talC && talB > talD) {
    winner = "b";
  } else if (talC > talA && talC > talB && talC > talD) {
    winner = "c";
  } else if (talD > talA && talD > talB && talD > talC) {
    winner = "d";
  } else {
    winner = "tie";
  };

  // Check calculate functionality
  console.log(winner);

}

// When page loads, run these functions:
window.addEventListener("load", function() {
  // When form is submitted, run these functions:
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    // Prevent page from reloading on submission
    event.preventDefault();
      // Retrieve & tally answers
      retrieveAndTally ();
      // Calculate result
      // Display results
  });

});
  
    