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
    console.log("TallyA = " + tallyA);
    console.log("TallyB = " + tallyB);
    console.log("TallyC = " + tallyC);
    console.log("TallyD = " + tallyD);
    console.log("High Score: " + highScore);
    console.log(results);
    
    // Note: ties allowed!
    // return winners
    let winners = []
    console.log("Winners: " + winners);
    
    // iterate through keys
    Object.keys(results).forEach((key) => {
      // if value of key is equal to high score
      if (results[key] === highScore)  {
        // push key to winners array
        winners.push(key)
      }
    })
    console.log("Winners: " + winners);
    
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

  // Print results
  let resultToPrint = ""
  winningLang.forEach((language) => {
    if (language === "a") {
      resultToPrint + a
    } else if (language === "b") {
      resultToPrint + b
    } else if (language === "c") {
      resultToPrint + c
    } else if (language === "d") {
      resultToPrint + d
    } 
  })


  if (langResult != "tie") {
    // Unhide results div
    document.getElementById("not-a-tie").removeAttribute("class");
    // Display single winner
    document.getElementById("langResult").innerText = langResult;
    // document.getElementById("langResult").innerText = resultToPrint;
  } else {
    // Unhide tied text
    document.getElementById("tie").removeAttribute("class");
    // Display which languages are tied 
    document.getElementById("tieResult1").innerText = tieResult1;
    document.getElementById("tieResult2").innerText = tieResult2;
    document.getElementById("langResult").innerText = resultToPrint;
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