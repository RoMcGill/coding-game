window.addEventListener('load',runGame)
// text area = textinput
const textInput = document.querySelector('#text-input');
// line of code
const currentLine = document.querySelector('#current-phrase');
// timer
const timeDisplay = document.querySelector('#time');
let time = ''
// messege for game over
const message = document.querySelector('#message');
// modal container
let modalContainer = document.getElementById ("modal-container");
// close modal container
let closeModal = document.getElementById("close");
// restart button
let restart = document.getElementById('btn');
// score display
let scoreDisplay = document.getElementById('score');
// score
let score = '';
// lines of code in string to be displayed by the show line function
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
    '<link rel="stylesheet" href="assets/CSS/styles.css">',
    '<div class="about-section"></div>',
    '<button id = "open">open</button>',
];


//plays game
function runGame(){
    textInput.classList.add('incorrect-background');
     // start matching on text input
        textInput.addEventListener('input', checkInput);
        setInterval(checkStatus, 50);
       
        
        
       
}
// gets random item from string
function showLine(lines){
    const randIndex = Math.floor(Math.random() * lines.length);
    currentLine.innerText = lines[randIndex];
}


// countdown timer, decreasing 
setInterval(timer, 1000);
function timer() {
    // make sure time is >0
    if(time>0){
        time--;
} else if (time===0) {
      runGame = false;
      showModal();
}
    timeDisplay.innerHTML = time
    
}

//show modal for when timer runs out
function showModal(){
    
     modalContainer.style.display='flex';  

}
// close modal on click
closeModal.onclick = function() {
    modalContainer.style.display='none';
    time = ''
    textInput.value='';
    
        
}
// restart game on click of start button
restart.onclick = function(){

    ('load',runGame)
    showLine(lines);
    time=18;
    score = 0 + 1
    currentLine.classList.remove("linedown");
    void currentLine.offsetWidth; 
    currentLine.classList.add("linedown");
    focusTextarea()
  


}

//checks for correct answer
function checkStatus(){

}



function checkInput(){
    if (textInput.value === currentLine.innerText){
        setInterval(checkStatus, 50)
        message.innerText = 'Correct'
        displayScore()
        score +1;
        showLine(lines);
        time=18;
        currentLine.classList.remove("linedown");
        void currentLine.offsetWidth; 
        currentLine.classList.add("linedown");
        textInput.value='';
        textInput.classList.add('correct-background')
       
    }else{
        textInput.classList.remove('correct-background')
        message.innerText = ''

    }
    
}
// focus on textarea when play button clicked
    function focusTextarea(){
    document.getElementById("text-input").focus();
}


//display score
function displayScore(){
    scoreDisplay.innerHTML=score
    score ++
}