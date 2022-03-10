window.addEventListener('load',runGame);
// text area = textinput
const textInput = document.querySelector('#text-input');
// line of code
const currentLine = document.querySelector('#current-phrase');
// timer
const timeDisplay = document.querySelector('#time');
let time = '';
// messege for game over
const message = document.querySelector('#message');
// modal container
let modalContainer = document.getElementById ("modal-container");
// close modal container
let closeModal = document.getElementById("close");
// restart button
let restart = document.getElementById('btn');
// score display
let scoreDisplay = document.getElementsByClassName('score');
// score
let score = 0;
//  of code in string to be displayed by the show line function
const easy  =
[
    '<h1>Heading</h1>',
    '<p>Paragraph</p>',
    '<h1>big title</h1>',
    '<h5>small title</h5>',
    '<button>Filter</button>',
    '<span>this is a span</span>',
];
//plays game
function runGame(){
    textInput.classList.add('incorrect-background');
     // start matching on text input
        textInput.addEventListener('input', checkInput);
        setInterval(checkStatus, 50);
        displayScore();
}
// gets random item from string
function showLine(easy){
    const randIndex = Math.floor(Math.random() * easy.length);
    currentLine.innerText = easy[randIndex];
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
    timeDisplay.innerHTML = time;
    
}
//show modal for when timer runs out
function showModal(){
    
     modalContainer.style.display='flex';
     scoreDisplay[1].innerHTML = score;

}
// close modal on click
closeModal.onclick = function() {
    modalContainer.style.display='none';
    time = '';
    textInput.value='';       
};
// restart game on click of start button
restart.onclick = function(){
    showLine(easy);
    time=18;
    score = 0;
    displayScore();
    currentLine.classList.remove("linedown");
    void currentLine.offsetWidth; 
    currentLine.classList.add("linedown");
    focusTextarea();
};
//checks for correct answer
function checkStatus(){
}
function checkInput(){
    if (textInput.value === currentLine.innerText){
        setInterval(checkStatus, 50);
        message.innerText = 'Correct';
        score ++;
        displayScore();
        showLine(easy);
        time=18;
        currentLine.classList.remove("linedown");
        void currentLine.offsetWidth; 
        currentLine.classList.add("linedown");
        textInput.value='';
        textInput.classList.add('correct-background');
       
    }else{
        textInput.classList.remove('correct-background');
        message.innerText = '';

    }
    
}
// focus on textarea when play button clicked
    function focusTextarea(){
    document.getElementById("text-input").focus();
}
//display score
function displayScore(){
    scoreDisplay[0].innerHTML=score;    
}
// NO CHEATING IF USER USES COPY AND PASTE into the text area
textInput.addEventListener(
    'paste', (e) => {
        e.preventDefault();
        textInput.innerText = ("NO CHEATING !");
    }
);
