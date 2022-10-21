// Retrieve user input and tally answers
retrieveAndTally () {
  // Store user answers in variables
  const ans1 = document.getElementById("question1").value;
  const ans2 = document.getElementById("question2").value;
  const ans3 = document.getElementById("question3").value;

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

  console.log("TallyA = " + tallyA);
  console.log("TallyB = " + tallyB);
  console.log("TallyC = " + tallyC);
  console.log("TallyD = " + tallyD);
};

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
  
    