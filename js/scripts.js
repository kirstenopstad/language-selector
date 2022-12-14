// Business logic

// Tally answers
function tallyResults(ansList) {
  
    // ansList
    const ans1 = ansList[0];
    const ans2 = ansList[1];
    const ans3 = ansList[2];
    const ans4 = ansList[3];
    const ans5 = ansList[4];

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
    // console.log("TallyA = " + tallyA);
    // console.log("TallyB = " + tallyB);
    // console.log("TallyC = " + tallyC);
    // console.log("TallyD = " + tallyD);

    return calculateResult(tallyA, tallyB, tallyC, tallyD);
  }

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
    // console.log("Winner: " + winner);

    if (winner === "tie") {
      const tieResults = tieCalculate(talA, talB, talC, talD);
      // console.log("tieResults: " + tieResults);
      return tieResults;
    } else {

      return winner;
    }

  }

  function tieCalculate(talA, talB, talC, talD) {
    // If tie, determine other winner
    let tie1;
    let tie2;
    if (talA === 2 && talB === 2) {
      tie1 = "a";
      tie2 = "b";
    } else if (talA === 2 && talC === 2) {
      tie1 = "a";
      tie2 = "c"
    } else if (talA === 2 && talD === 2) {
      tie1 = "a";
      tie2 = "d"
    } else if (talB === 2 && talC === 2) {
      tie1 = "b";
      tie2 = "c";
    } else if (talB === 2 && talD === 2) {
      tie1 = "b";
      tie2 = "d"
    } else if (talC === 2 && talD === 2) {
      tie1 = "c";
      tie2 = "d";
    };

    // Store tied winners in an array
    const winners = [tie1, tie2];

    return winners;

  }

// UI Logic

// Retrieve inputs
function retrieveInputs() {
  // Validate input
  if (!document.querySelector("input[name='question1']:checked") || 
    !document.querySelector("input[name='question2']:checked") ||
    !document.querySelector("input[name='question3']:checked") ||
    !document.querySelector("input[name='question4']:checked") ||
    !document.querySelector("input[name='question5']:checked")) {
    // Return error
    return 0;
  } else {
    // Store user answers in variables
    const ans1 = document.querySelector("input[name='question1']:checked").value;
    const ans2 = document.querySelector("input[name='question2']:checked").value;
    const ans3 = document.querySelector("input[name='question3']:checked").value;
    const ans4 = document.querySelector("input[name='question4']:checked").value;
    const ans5 = document.querySelector("input[name='question5']:checked").value;
    // Store in array
    const answers = [ans1, ans2, ans3, ans4, ans5];
    return answers;
  };
}

// Display results
function displayResults(winningLang) {
  // Clear previous results
  resetDisplay();

  // Define answer key
  const a = "Ruby";
  const b = "Javascript";
  const c = "C#";
  const d = "Python";

  // Check UI inputs
  // console.log(winningLang);
  
  //Initialize langResult variable for single winner
  let langResult;

  // Determine language name for single winner
  if (winningLang === "a") {
    langResult = a;
  } else if (winningLang === "b") {
    langResult = b;
  } else if (winningLang === "c") {
    langResult = c;
  } else if (winningLang === "d") {
    langResult = d;
  } else {
    // if tie
    langResult = "tie"
  };

  // Tie Conditions:

  // Define individual tied winners by accessing index of array input
  const tie1 = winningLang[0];
  const tie2 = winningLang[1];

  // Initialize tieResult variables
  let tieResult1;
  let tieResult2;

  // Determine language names for tie
  if (tie1 === "a") {
    tieResult1 = a;
  } else if (tie1 === "b") {
    tieResult1 = b;
  } else if (tie1 === "c") {
    tieResult1 = c;
  } else {
    tieResult1 = d;
  };

  if (tie2 === "b") {
    tieResult2 = b;
  } else if (tie2 === "c") {
    tieResult2 = c;
  } else {
    tieResult2 = d;
  };
  
  // If error 
  if (winningLang === 0) {
    // Display error
    document.getElementById("error").removeAttribute("class");
    return 0;
  } else { 
    // Hide error
    document.getElementById("error").setAttribute("class", "hidden");
  };

  // Hide quiz questions
  document.getElementById("quizQuestions").setAttribute("class", "hidden");

  // Unhide results div
  document.getElementById("results").removeAttribute("class");

  // If no tie results
  if (langResult != "tie") {
    // Unhide results div
    document.getElementById("not-a-tie").removeAttribute("class");
    // Display single winner
    document.getElementById("langResult").innerText = langResult;
  } else {
    // Unhide tied text
    document.getElementById("tie").removeAttribute("class");
    // Display which languages are tied 
    document.getElementById("tieResult1").innerText = tieResult1;
    document.getElementById("tieResult2").innerText = tieResult2;
  };  
  
}

function resetDisplay() {
  // Hide error message
  document.getElementById("error").setAttribute("class", "hidden");
  // Hide results
  document.getElementById("results").setAttribute("class", "hidden");
  // Hide tie div
  document.getElementById("tie").setAttribute("class", "hidden");
  // Hide not-a-tie div
  document.getElementById("not-a-tie").setAttribute("class", "hidden");
}

// When page loads, run these functions:
window.addEventListener("load", function() {
  // When form is submitted, run these functions:
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    // Prevent page from reloading on submission
    event.preventDefault();
      // Retrieve inputs
      const inputs = retrieveInputs();
      // Tally answers & calculate results
      const result = tallyResults(inputs);
      // Display results
      displayResults(result);
  });

  const button = document.getElementById("tryAgain")
  button.addEventListener("click", function(event) {
    event.preventDefault();
    // Display quiz questions again
    document.getElementById("quizQuestions").removeAttribute("class");
    // Hide results
    resetDisplay();
  });
})