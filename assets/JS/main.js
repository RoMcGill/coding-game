window.addEventListener('load',init)
//global variables
let time = 10;
let score= 0;
let runGame;

//DOM elemnets
const wordInput = document.querySelector('#text-input');
const currentLine = document.querySelector('#current-phrase');
const socreDisplay = document.querySelector('#score');
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
    // load phrase from array
    showLine(lines);
    // call countdown every second
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50)

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

        isPlaying = false;

     }
     timeDisplay.innerHTML = time
 }

//check game status
function checkStatus(){
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game over';
    }
}
