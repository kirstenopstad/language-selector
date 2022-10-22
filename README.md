# Programming Language Selector

#### By Kirsten Opstad

#### A simple survey to determine which programming language a person should learn

## Technologies Used

* HTML 
* CSS 
* Javascript
* Bootstrap

## Description

### Objectives (MVP)

Create a Programming Language Suggester webpage (using HTML, CSS, JavaScript, and Web APIs) that asks future students a series of questions about themselves and provides a language suggestion based on their answers. 
  * Include a form with a minimum of 5 survey questions.
  * Offer a minimum of 3 different language suggestions.
  * One branch should return one result. It shouldn't be possible to be suggested two languages at once.
  * When the user submits the survey again (for a second or third time), that previous answers are hidden, cleared, or replaced prior to showing the new result.
  * Regular Git commits and a detailed README. Commit messages should always be on-topic and professional in tone.

Addt'l Requirements:
  * Does not use window methods to interact with the user. 
  * Form gathers input from the user.
  * Branching is used to determine the result.
  * Web API object properties or methods _(not including window methods for alerting, prompting, or confirming)_ are used to display the result to the user.
  * Event handler properties or event listeners are used to handle events.
  * _When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced._
  * Variable names are descriptive of what they represent and use lower camel case (e.g. myVariableExample).
  * Web page is styled using custom CSS.
  * Project is in a polished, portfolio-quality state.
  * The prompt’s required functionality and baseline project requirements are in place by the deadline.

<!-- This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images) -->

[Link to operational site](https://www.kirstenopstad.github.io/language-selector)

### Goals
1. Meet MVP requirements
2. Add styling to mimic Buzzfeed quizzes like [this](https://www.buzzfeed.com/lady_emerald/celebrity-preferences-guess-favorite-color-quiz)
3. Strech: Add informational snippet about each language to display with language result.
4. Stretch: Add "why" section that display with results, lending insight into the logic of why a user was given a certain language.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

<!-- KO Ask Yourself:

[x] Do I need to run a server? 

[x] How should I set up my databases? 

[x] Is there other code this application depends on?

_{Epicodus recommends deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_ -->

## Known Bugs

* When a user submits a complete form, the quiz questions are supposed to disappear (be hidden) but functionality was lost when the "validate" portion of the business logic was implemented.
* README: gh-pages link not working.

* If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.