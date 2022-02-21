window.addEventListener('load',init)
//global variables

// available levels
const levels ={
    easy: 30,
    medium: 20,
    hard: 10
}
//change level
const currentLevel = levels.hard;




let time = currentLevel;
let score= 0;
let runGame;

//DOM elemnets
const textInput = document.querySelector('#text-input');
const currentLine = document.querySelector('#current-phrase');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const lines =
[

    '<h1>My First Heading</h1>',
    '<p>My first paragraph.</p>',
    '<h1>Really big title 2.0</h1>',
    '<h2>Simple, yet engaging and descriptive subtitle</h2>',
    '<div id="call-to-action"><a href="#" class="btn btn-large">Primary call to  action</a>',

];

//initialize game
function init (){
    // load line from array
    showLine(lines);
    // start matching on text input
    textInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);

}
//start match
function startMatch() {
    if (matchLines()){
       console.log('Match');
       runGame = true;
       time = currentLevel + 1;
       showLine(lines);
       textInput.value = '';
       score ++;
    }
    scoreDisplay.innerText = score;
}
// match current line to line input
function matchLines (){
    if (textInput.value === currentLine.innerText) {
        message.innerText = 'Correct'
        return true;

    } else{
        message.innerHTML = '';
        return false;
    }
      
}

// Pick & show random word
function showLine(lines) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * lines.length);
    // Output random word
    currentLine.innerText = lines[randIndex];
  }
 //countdown timer
 function countdown() {
     // make sure time is >0
     if(time>0){
         time--;

     } else if (time===0) {

        runGame = false;

     }
     timeDisplay.innerHTML = time
 }

//check game status
function checkStatus(){
    if (!runGame && time === 0) {
        message.innerHTML = 'Game over';
        score = 0;
    }
}
