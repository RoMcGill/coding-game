window.addEventListener('load',init)
//global variables
let time = 5;
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
    '<a id=logo><img src=images/logo.gifalt=Logo</a>',
    '<ul><li><a href=>Home</a></li><li><a href=>About</a></li><li><a href=>Services</a></li><li><a href=>Contact</a></li></ul> ',
    '<h1>Really big title 2.0</h1>',
    '<h2>Simple, yet engaging and descriptive subtitle</h2>',
    '<div id="call-to-action"><a href="#" class="btn btn-large">Primary call to  action</a>',

];

//initialize game
function init (){
    // load phrase from array
    showLine(lines);

}
// Pick & show random word
function showLine(lines) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * lines.length);
    // Output random word
    currentLine.innerHTML = lines[randIndex];
  }
  console.log(line);


