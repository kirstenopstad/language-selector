// Business logic

// Tally answers
function tallyResults(ansList) {
  // takes an array of answer keys (a, b, c, d) and outputs an array of winners

    // Init tallies
    let tallyA = 0;
    let tallyB = 0;
    let tallyC = 0;
    let tallyD = 0;

    // Tabulate answers to all questions
    ansList.forEach((answer) => {
      if (answer === "a") {
        tallyA += 1;
      } else if (answer === "b") {
        tallyB += 1;
      } else if (answer === "c") {
        tallyC += 1;
      } else if (answer === "d") {
        tallyD += 1;
      };
    })

    // add tally data to array
    const results = { 
      a: tallyA, 
      b: tallyB, 
      c: tallyC, 
      d: tallyD }
    
    // get highest value in array
    const highScore = Math.max(...Object.values(results))

    // Check tally functionality
    // console.log("TallyA = " + tallyA);
    // console.log("TallyB = " + tallyB);
    // console.log("TallyC = " + tallyC);
    // console.log("TallyD = " + tallyD);
    // console.log("High Score: " + highScore);
    // console.log(results);
    
    // return winners
    let winners = []
    
    // iterate through keys
    Object.keys(results).forEach((key) => {
      // if value of key is equal to high score
      if (results[key] === highScore)  {
        // push key to winners array
        winners.push(key)
      }
    })
    // console.log("Winners: " + winners);
    
    // return calculateResult(tallyA, tallyB, tallyC, tallyD);
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
function displayResults(winners) {
  // Clear previous results
  resetDisplay();

  // Define answer key
  const a = "Ruby";
  const b = "Javascript";
  const c = "C#";
  const d = "Python";

  // Check UI inputs
  // console.log(winners);
  
  // If error 
  if (winners === 0) {
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

  // if single winner
  const getResult = (letter) => {
    if (letter === "a") {
      return a
    } else if (letter === "b") {
      return b
    } else if (letter === "c") {
      return c
    } else if (letter === "d") {
      return d
    } 
  }

  // Add first winner
  let resultToPrint = getResult(winners[0])
  // Add tied winner(s) 
  for (i = 1; i < winners.length; i++) {
    resultToPrint = resultToPrint + ` & ${getResult(winners[i])}`
  } 

  // Unhide results div
  document.getElementById("not-a-tie").removeAttribute("class");
  // Print results to screen
  document.getElementById("langResult").innerText = resultToPrint;

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