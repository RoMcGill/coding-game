window.addEventListener('load',ini)
//global variables

// available levels
const levels ={
    easy: 30,
    medium: 18,
    hard: 10
}
//change level
let currentLevel = levels.medium;

// difficulty button 

document.getElementById('buttoneasy')
document.getElementById('buttonmedium')
document.getElementById('buttonhard')

// start button 
document.getElementById('start-button')


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

    '<h1>Heading</h1>',
    '<p>Paragraph</p>',
    '<h1>big title</h1>',
    '<h5>small title</h5>',
    '<h2>descriptive subtitle</h2>',
    '<div id="call">call div</div>',
    '<span>this is a span</span>',
    '<article> this is an article </article>',
    '<ol><li>list item 1</li></ol>',
    '<script src="assets/JS/main.js"></script>',
    '<button>Filter</button>',
    '<input type="checkbox" id="checkbox">',
    '<label for="checkbox">Slider</label>',
    '<section class="hero-border">',
    '<img src="./assets/images/hero.jpg" alt="hero image">',
    '<link rel="stylesheet" href="assets/CSS/styles.css">'

];
let startGame = document.getElementById("start-button")
startGame.onclick = function() {
    
    showLine(lines);
    textInput.addEventListener('input', startMatch);
    textInput.classList.add('incorrect-background');
    currentLine.classList.remove("linedown");
    void currentLine.offsetWidth; 
    currentLine.classList.add("linedown");
    time = currentLevel +1
        
}

//initialize game
function init (){
    // load line from array
    showLine(lines);
    // start matching on text input
    textInput.addEventListener('input', checkInput);
    // call countdown every second
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
    textInput.classList.add('incorrect-background');
    
   
   

}
//start match
function checkInput() {
    if (matchLines()){
       runGame = true;
       time = currentLevel + 1;
       showLine(lines);
       textInput.value = '';
       score ++;
       setTimeout(currentLine.classList.add("linedown"),100);
       



    

    }
    scoreDisplay.innerText = score;
    
    
        
}

// match current line to line input
function matchLines (){
    if (textInput.value === currentLine.innerText) {
        message.innerText = 'Correct'
        currentLine.classList.remove("linedown")
        textInput.classList.add('correct-background')
        score + 1

        // trigger a DOM reflow 
        void currentLine.offsetWidth; 
        
        currentLine.classList.add("linedown");
        
        return true;
     

    } else{
        textInput.classList.remove('correct-background');
        message.innerHTML = '';
        currentLine.classList.remove("linedown");
        void currentLine.offsetWidth; 
        currentLine.classList.add("linedown");
        return false;
        
    }
      

}

//trying to get the text box to light up green if correct and red if incorrect 

         

// Pick & show random word
function showLine(lines) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * lines.length);
    // Output random line
    currentLine.innerText = lines[randIndex];
    

  }
  
 //countdown timer
 function countdown() {
     // make sure time is >0
     if(time>0){
         time--;
       

     } else if (time===0) {
         /// bug alert wont go away onced clicked because time is still at zero
        /// alert("Aw you lost, click start game to try again!");
        
        runGame = false;
        
        

     }
     timeDisplay.innerHTML = time
     
 }
 
//check game status
function checkStatus(){
    if (!runGame && time === 0) {
        message.innerHTML = 'Game over';
        modalContainer.style.display='flex';
        score = 0;
       
        
    }else 
        modalContainer.style.display='none';
}

let closeModal = document.getElementById("close");
closeModal.onclick = function() {
    modalContainer.style.display='none';
    time = currentLevel +1;
    textInput.value=''; 
}

    
let open = document.getElementById ("open");
let modalContainer = document.getElementById ("modal-container");



/*
open.addEventListener('click',()=>{
    modalContainer.classList.add('show');
});

close.addEventListener('click',()=>{
    modalContainer.classList.remove('show');
});*/