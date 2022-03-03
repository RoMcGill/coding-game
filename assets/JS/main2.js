window.addEventListener('load',runGame)
// text area = textinput
const textInput = document.querySelector('#text-input');
// line of code
const currentLine = document.querySelector('#current-phrase');
// timer
const timeDisplay = document.querySelector('#time');
let time = 4
// messege for game over
const message = document.querySelector('#message');
// modal container
let modalContainer = document.getElementById ("modal-container");
// close modal container
let closeModal = document.getElementById("close");

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
];

// gets random item from string

function showLine(lines){
    const randIndex = Math.floor(Math.random() * lines.length);
    currentLine.innerText = lines[randIndex];
}

//plays game
function runGame(){
    showLine(lines)
    timer(time)
    
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
closeModal.onclick = function() {
    modalContainer.style.display='none';
    showLine(lines);
    time=3;
    currentLine.classList.remove("linedown");
    void currentLine.offsetWidth; 
    currentLine.classList.add("linedown");
       
}


