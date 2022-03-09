
# **Code Hero**

Code Hero is a site for people to practice basic HTML coding In a semi cometitive environment While also having fun.

-----
Live site: https://romcgill.github.io/coding-game/

-----

![](assets/Images/amiresponsive-placeholder.png)

-----
<details>
<summary>Table of Contents </summary>

* [User Experience (UX)](#user-experience--ux-)
    + [User stories](#user-stories)
      - [First Time Visitor Goals](#first-time-visitor-goals)
      - [Returning Visitor Goals](#returning-visitor-goals)
      - [Frequent User Goals](#frequent-user-goals)
  * [Design](#design)
    + [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
* [Wireframes](#wireframes)
    + [Home Page Wireframe](#home-page-wireframe)
    + [Mobile Wireframe -](#mobile-wireframe--)
    + [genre pages and footer](#genre-pages-and-footer)
    + [Genre page and footer mobile](#genre-page-and-footer-mobile)
    + [Contribute Page Wireframe](#contribute-page-wireframe)
    + [Contribute page wireframe mobile](#contribute-page-wireframe-mobile)
* [Features](#features)
    + [* New Feature *](#--new-feature--)
    + [Existing Features](#existing-features)
  * [Features still to be added.](#features-still-to-be-added)
* [Testing](#testing)
    + [Accesability](#accesability)
    + [Functionality](#functionality)
    + [Visual asthetic](#visual-asthetic)
* [Bugs/Fixes](#bugs-fixes)
* [Deployment](#deployment)
* [Technologies used](#technologies-used)
    + [Balsamiq](#balsamiq)
    + [Font Awesome](#font-awesome)
    + [Coolors.co](#coolorsco)
    + [Chrome DevTools](#chrome-devtools)
    + [Google Fonts](#google-fonts)
    + [Formspree](#formspree)
    + [W3C Validation Servicees](#w3c-validation-servicees)
    + [Gitpod](#gitpod)
* [Credits](#credits)
    + [Content and media](#content-and-media)
    + [Ackwnowledgements](#ackwnowledgements)

<small><I><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></I></small>


</details>

-----

 
 


## User Experience (UX)
--------------------

### User Stories

#### First Time Visitor Goals

-   As a First Time Visitor, I want to easily understand the game and why I should be interested in it.

-   ![]
-   As a First Time Visitor, I want to be able to easily navigate to the game and find content that relates to my interests.

![]


-   As a First Time Visitor, I want to be excited, intrigued and feel I am in a fun environment where i can practice typing code.

![]

#### Returning Visitor Goals

-   As a Returning Visitor, I want to try and beat my previous scores.

![] insert image

-   As a Returning Visitor, I want to feel as though I am not playiing the same game with the same content over and over again.

![]insert image

-   As a Returning Visitor, I want to better my skills and boost my confidence in writing HTML code.

![]insert image
#### Frequent User Goals

-   As a Frequent User, I want there to be new code blocks for me to practice a more diverse range of code 

-   As a Frequent User, I want to be able to change dificulty levels as my coding skills improve 

-   As a Frequent User, I want to be challenged.

-  As a Frequent User I dont want to be hindered by technical issues in the game.

## Design
_____
### Colour Scheme

-   The colour scheme used is black, green and a range of blue and purple gradients. the black background is remineccent of old school coding (hackers) and retro video games, i think it suits the function of the site perfectly.

![](assets/Images/colour-pallete.png)

## Typography

fantasy and sans-serif font-familys are the main font used throughout the site, I have chose to use these  as they are web safe and stable on all devices and browsers. I have used the 
(avatar font)
Papyrus font in the Fantasy family. This font is easy to read and also Intresting and familiar to the user as it is a widley used font.

```r
.body{
    font-family: sans-serif;
}

.heading{
    font-family: Fantasy;
}
```

## Imagery



-The imagery (look and feel) used was done to create a sense of retro Gaming and old school " Hacking " link in the movies 



![]insert image

When the site is viewed on a mobile device it will function as supposed to as it is fully responsive on all devices. but the player will be at a disadvantage as thumb typing is not very efficient for typing HTML code.



#  Wireframes
### Desktop Wireframe for correct answer

![](assets/Images/wireframe-answer-correct-desktop.png)

### Desktop Wireframe for incorrect answer

![](assets/Images/wireframe-answer-incorrect-desktop.png)
### Small desktop Wireframe for correct answer

![](assets/Images/wireframe-small-desktop-correct-answer.png)
### Small desktop Wireframe for incorrect answer

![](assets/Images/wireframe-answer-wrong-small-desktop.png)
### Mobile Wireframe for correct answer

![](assets/Images/mobile-wireframe-correct-answer.png)
### Mobile Wireframe for incorrect answer

![](assets/Images/mobile-wireframe-wrong-answer.png)
## Features
____
### * New Feature *





### Existing Features
1. The design of the game is fully responsive on all modern devices.
> " As a Frequent User I want to play the game on my phone while I am away from my desk."
- The Game uses vh and vw units of measurement when setting the sizes of every element. this is to ensure that every screen size is catered for.

Example
```
.game-play-area{
  
    width: 90vw;
    height: 40vh;
```
![screenshot of landing page on iphone](./assets/images/screenshot-of-landing-page-on-mobile.png)

-----------

2.  The game is easy to navigate and understand 
> " As a First Time Visitor, I want to easily understand the game and why I should be interested in it.
."
-   the game is uncomplicated as it gives you only one goal to achieve "type the line of code before it reaches the bottom of the box" as the lines of code change randomly each time this also keeps the game fresh and exciting.

Example (random lines of code  pulled from string)

JS
```{r}. 
const lines =
[
    '<h1>Heading</h1>',
    '<p>Paragraph</p>',
    '<h1>big title</h1>',
    '<h5>small title</h5>',
    '<h2>descriptive subtitle</h2>',
]
 function showLine(lines){
    const randIndex = Math.floor(Math.random() * lines.length);
    currentLine.innerText = lines[randIndex];
```    




------

3. for the text area i used focus so that when a correct answer is typed or the game begins the area is ready for input. the text area also turns green when the correct answer is entered and is stays yellow when the current text does not match the current line of code.

JS
```{r}. 
function checkInput(){
    if (textInput.value === currentLine.innerText){
        setInterval(checkStatus, 50)
        message.innerText = 'Correct'
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
```
CSS
```{r}
.incorrect-background{
    background: rgb(0,0,0);
    background: linear-gradient(177deg, rgba(0,0,0,1) 29%, rgb(185, 183, 14) 100%, rgba(0,157,255,1) 100%);
}
.correct-background{
    background: rgb(0,0,0);
    background: linear-gradient(177deg, rgba(0,0,0,1) 29%, rgb(40, 147, 45) 100%, rgba(0,157,255,1) 100%);
}
```

4. Anticheat, I have added a feature that will not alow players to cheat by using copy and paste to get the correct answer in the box immediately. To stop this I added an event listener to listen for 'paste' in the text area, when paste is (heard) the event listenr will fire and add the text No Cheating! into the textarea. and also by using prevent default the user will be unable to paste into the text area afterwards 

JS
```{r}
textInput.addEventListener(
    'paste', (e) => {
        e.preventDefault();
        textInput.innerText = ("NO CHEATING !");
        console.log("NO CHEATING !");
```

5. score board, I have added a score counter that keeps track of every time a user gets an answer correct. and increments by 1 each time, this score is then shown in the modal that is displayed when the user looses. When the modal is closed the score is reset back to 0.

6. (linedown) animation, this feature is the heart and soul of the game, the animation is simple yet affective. It targets the random code block that is pulled from the string and drops it down the screen at a steady pace, this creates a sence of urgency and competitiveness for the user.

JS
```{r}
restart.onclick = function(){
    showLine(lines)
    time=18;
    displayScore();
    currentLine.classList.remove("linedown");
    void currentLine.offsetWidth; 
    currentLine.classList.add("linedown");
    focusTextarea()
}
```

CSS
```{r}
.linedown {
    top: 0;
    opacity: 0;
    animation: new-item-animation 20s linear forwards;
    color: green;
    background-color: rgba(138, 43, 226, 0.7);
    border-radius: 25px;
    box-shadow: 5px;
}

@keyframes new-item-animation {
    from {
        opacity: 1;
        transform: translateY(0);
}

    to {
        opacity: 1;
        transform : translateY(400px);
    }
}

```

HTML
```{r}
<div class="game-area">
        <h3 id="current-phrase" class="linedown"></h3>
```




------

-----
## Features Still to be Added change these.
1. dififculty levels, there are 3 possibel ways I will go about doing this
option 1. is to have the timer set a difffrent times depending on which button the user clicks for example : hard = 10 seconds easy = 30 seconds.
option 2. is to change the size of the text area, aswell as the time i think I could do this with media queries exampe: if hard button clicked textarea = 10vh by 80 vw, this along with a shortend timer would make for a very seamless chnage in the dificulty of the game. option 3 is to divide my string into 3 seperate strings easy medium and hard, with shorter lines of code in easy, long lines of code in hard and so on.The issue i will face here will be with my function that pulls the random line from the string.
2. score board/local storage of score and email score to user 
------
## Testing change this 


 The site is written with HTML, CSS and Java Script my testing will be focused on accessibility, functionality and the visual asthetic/.  
 1. #### Accessability/responsiveness
 To test the accessibility of my site I carried out some manual testing using google dev tools, amiresponsive and different devices and screen sizes. my main objective was to ensure that my game was fully playable on all devices but paying more atention to devices with bigger screen sizes as these devices are primarly used with a keyboard which is highly advised when playing the game as the thumb typing on a phone or smaller device will leave the user at a big disadvantage. As I did not use media queries I could not test how my site reacts at exact screen sizes I had to manualy check them all by using chromes dev tools.(I used vh and vw units of measurement to achive responsivness on this site)
 2. #### Functionality
 - To test the functionality of the site I used a combination of manual testing and markup validators. Using the W3C markup validator and the w3cssvalidator the site had no errors or warnings.
 ![markup validator](./assets/images/html-check.png)
 I generated a lighthouse report on dev tools and .... add here...
 ![lighthouse score](./assets/images/lighthouse-score.png)
 ![permission error](./assets/images/github-permissions-error.png)
 ![stack overflow response](./assets/images/stack-overflow-response.png)

 ![css validator](./assets/images/css-validator.png)
 - Manual Testing. 
 To test the site/game manually I played it many times and console loged my functions along the way to ensure they were being called when I wanted them. throughout the process of coding the website I was continuously testing every feature added and never left a feature that didnt work in the project until it was fully functional. I did this by commenting out code that did not work then uncommenting it as i was working on it.
3. #### Visual aesthetic
 - I manually checked the colours on my site using colors.co, I did this because I felt that the contrast validators were not great at recognising where the colours are on the page. They try to contrast two colours that are not relevant to eachother. 
 ![contrast check](./assets/images/contrast-check.png)
----
 ## Bugs/Fixes add current  
 
 1. monday 21st feb
JS code to show random phrase from string is showing undefined instead of daata from the string (could be a simple spelling/syntax error).....fix "simple syntax error I forgot to put = after const before string of lines "


issue i am having is figuring out how to link the current level and the diffrent level buttons 
I am thinking an if statement ( if easy clicked set level to easy ) or (on mouse click set current level to event ? )


bug cant get animation to reset when correct answer is typed fix .... dom reflow, make animation void then call agin. as advised by tutor supporrt ....?



tuesday 1st of march bug 
code to show alert that user has lost the game when time reches 0 wont go away because time is still ===0 

fix ......  modal close on click function resets the time to ('') (stadard time is 18 seconds before adding diffrent dificulty levels)


closeModal.onclick = function() {
    modalContainer.style.display='none';
    time = ''
    textInput.value='';     ......  ?



issue with incorrect line of code staying in the text area when the game ends, this would make the user delet the code before typing in a new line which would ruin the flow of the game..... the fix was the same as the timer in the last bug. on the modal close function I added  textInput.value=''; this will clear the text area and allow the game to start fresh after a user looses and tries to play again.



bug level select not working .. on click function to show hard easy or medium lines of code works byut does not set or stay with the option that is clicked. I need to set the level at the start then run the game ******



bug score counter not showing in the modal .... fix... the fix was a simple one, I was using document.getelementById to get the "score from the html and that was already being used by the score counter in the game so i had to change the index.html for the score to have a class instead of an Id and then use document.getElementByClassName and target the 1st element of my display score array for the game and the 2nd element of my display score for my modal. this resolved my issue  









------
## Deployment

For this project I have used Gitpod. throughout the process I have been adding and committing code to my Github repository. From there I can deploy my live site to make it accessible to everyone. I do this by using Github Pages.  
1.
From my Github repository navigate to settings on the far right near the top of the page
![step one for deployment](./assets/images/step-1-deployment.png)
![step one for deployment](./assets/images/step-2-deployment.png)
2.
In the left hand side of the screen there will be a list of options, from these options select pages
![step 2 for deployment](./assets/images/step-3-deployment.png)   
3.
When in the pages section select "branch : main" as the source and ensure the directory is selected as "/(root)"
then click save. (my save button is currently grey and unclickable as I have aready deployed my site). 

![step 3 for deployment](./assets/images/step-5-deplyment.png) 
4.
When all of the previous steps are complete you should be given this message
![step 4 for deplyment](./assets/images/step-6-deployment.png)

The site is now live and ready to view by anyone with the link. It can take Github a couple of minutes to push all of the data to the live site and to publish the page.

## Forking the GitHub Repository. 

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

Log in to GitHub and locate the GitHub Repository
At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone

Log in to GitHub and locate the GitHub Repository
Under the repository name, click "Clone or download".
To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
Open Git Bash
Change the current working directory to the location where you want the cloned directory to be made.
Type git clone, and then paste the URL you copied in Step 3.
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Press Enter. Your local clone will be created. 
```
 git clone : https://github.com/YOUR-USERNAME/YOUR-REPOSITORY"
- Cloning into `CI-Clone`...
- remote: Counting objects: 10, done.
- remote: Compressing objects: 100% (8/8), done.
- remove: Total 10 (delta 1), reused 10 (delta 1)
- Unpacking objects: 100% (10/10), done.
```

## Technologies Used 
------
### Languages Used

- HTML5
- CSS
-Java Script

 ### Balsamiq
Balsamiq was used to create wireframes for the project

### Font Awesome
The project uses icons from Font Awesome in the nav bar

### Coolors.co
The colour scheme and palette were generated and tested using coolors.co


### Chrome DevTools
This was used to test and debug my site as I went through the process of building it.
The lighthouse feature was used to create a report on the performance of the site.

### Google Fonts
The fonts used on the site are imported from Google Fonts.

### Formspree
This was used to link my contribute form directly to my email address.


### W3C Validation Services
These services were used to validate my css and HTML code to ensure there was no errors.

### Gitpod
This was my IDE and where I wrote all of my code, Made commits and pushed to Github.

## Credits
-----
### Content and media chnage this 
- https://www.wikipedia.org/ for information on music genres.
- https://www.billboard.com/ + https://www.rollingstone.com/ for in depth information on the songs and artists.
- https://www.freepik.com/ + https://www.shutterstock.com/ + https://unsplash.com/s/photos/singer for images.
- https://youtube.com/ for all video content.

### Acknowledgements chnage some

- I would like to thank my Code Institute mentor Antonio Rodriguez for all of his help, tips and feedback. 
- My Cohort facilitator Kasia for all of her help and encouragement throughout the project.
- WEB CIFAR on youtube for a great video on how to set up formspree
- The stackoverflow community for responding to questions and having built up a massive database of invaluable tips,tricks and bug fixes
- https://medium.com/ for teaching the bounce animation in a clear way
- W3schools.com for easy to follow lessons on Grid and Flex
- Kevin Powell on youtube for all of his Css tips and tricks.
- Fellow students at Code Institute for answering all of my questions.
- Peter Szabo for his attention to detail and great feedback.
- Code Institute for supplying an amazing course, from the content to the staff and alumni. 






