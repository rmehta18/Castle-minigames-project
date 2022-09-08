//image variables
var w = window.innerWidth;
var h = window.innerHeight;  
let y = -1200;
let snowflakes = 400;
//exercise buttons
var button1, button2, button3, button4, menuButton, resetButtonE1, resetButtonE2, e1MenuButton, e2MenuButton, e3MenuButton, button5, slider;

let bought1 = false, bought2 = false, bought3 = false;
let canPurchase1 = false, canPurchase2 = false, canPurchase3 = false;

/*
  All square variables for the square movement in exercise 1. Must be declared
  here as global variables, otherwise the exercise will not work
*/
let xSquare = [], ySquare = [], moveSquare = false, moveSquare2 = false;
const squareSize = 50;
let overSquare = false;

let xCircle = [], yCircle = [], moveCircle = false, moveCircle2 = false;

const RAD = 50, DIAM = RAD*2;
let overCircle = false;

let xLine = [], yLine = [], moveLine = false, moveLine2 = false, moveLine3 = false, moveLine4 = false, moveLine5 = false;

let knightX, knightY, dragonX, dragonY;

let clickCircleBool = false;

//current activity for the switch statement in the draw()
let currentActivity = 0;

function preload() {
  /*
    all of the images loaded into the file
    using preload allows the program to load the images
    into the program before anything else is ran
  */
  map = loadImage("mapBack.jpg");
  castleImg = loadImage('Castle.png');
  img1 = loadImage('sword.png');
  img2 = loadImage('sword.png');
  img3 = loadImage('sword.png');
  img4 = loadImage('sword.png');
  img5 = loadImage('sword.png');
  img6 = loadImage('sword.png');
  img7 = loadImage('crown.png');
  img8 = loadImage('dragon.png');
  img9 = loadImage('horse.png');
  shieldImage = loadImage("shield.png");
  left_bridge = loadImage("Left_Bridge.png");
  right_bridge = loadImage("Right_Bridge.png"); 
  e1Background = loadImage("E1_Background.jpg");
  winSound = loadSound('win-sound.mp3');  
  knight = loadImage("knight.png");
  dragon = loadImage("dragon.png");
  tavern = loadImage("tavern.jpg");
  coin = loadImage("coin.png");
  chest = loadImage("chest.png");
  loseSound = loadSound('lose-sound.wav');
  e3Dragon= loadImage('dragon.jpg');
}

//creates and loads the canvas and buttons to the screen
function setup() {
  
  /*creates the canvas based on the screens width and height, allowing the GUI to       fit multiple screens */
  createCanvas(windowWidth,windowHeight);

  menuButton = createButton("Main Menu");
  menuButton.position((windowWidth/2)+50, (windowHeight/2)+150);
  //on press loads main menu
  menuButton.mousePressed(switchToMM);
  
  button1 = createButton("Game 1");
  button1.position((windowWidth/2)+125,(windowHeight/2)-140);
  //on press loads exercise1.js
  button1.mousePressed(e1Menu);
  
  button2 = createButton("Game 2");
  button2.position((windowWidth/2) + 425,(windowHeight/2) - 45);
  //on press loads exercise2.js
  button2.mousePressed(e2Menu);
  
  button3 = createButton("Game 3");
  button3.position((windowWidth/2)-215,(windowHeight/2)+75);
  //on press loads exercise3.js
  button3.mousePressed(e3Menu);
  
  button4 = createButton("Game 4");
  button4.position((windowWidth/2)+250,(windowHeight/2)+90);
  //on press loads exercise4.js
  button4.mousePressed(switchToE4);

  resetButtonE1 = createButton("Reset");
  resetButtonE1.mousePressed(resetE1);
  
  resetButtonE2 = createButton("Reset");
  resetButtonE2.mousePressed(resetE2);

  e1MenuButton = createButton("Start Game 1");
  e1MenuButton.mousePressed(switchToE1);

  e2MenuButton = createButton("Start Game 2");
  e2MenuButton.mousePressed(switchToE2);

  e3MenuButton = createButton("Start Game 3");
  e3MenuButton.mousePressed(switchToE3);

  button5 = createButton("New Number");
  button5.position(900, 100);
  //generates new number in E3
  button5.mousePressed(randomNum);
  button5.hide();

  numSlider();
  
  //Exercise 1
  //sets the position of square1,2,3,and 4
  xSquare[0] = width/2, ySquare[0] = height/2+200;
  xSquare[1] = width/2, ySquare[1] = height/2-100;
  xSquare[2] = width/3-75, ySquare[2] = height/2+200;
  xSquare[3] = width/3-75, ySquare[3] = height/2-100;

  //sets position of circle1,2,3,and 4
  xCircle[0] = width/2-175, yCircle[0] = height/2+200;
  xCircle[1] = width/2-175, yCircle[1] = height/2-100;
  xCircle[2] = width/2+200, yCircle[2] = height/2+200;
  xCircle[3] = width/2+200, yCircle[3] = height/2-100;

  //Exercise2
  //Sword Square
  xSquare[4] = width/4 + 325, ySquare[4] = height/2+300;
  //Crown Square
  xSquare[5] = width/4 - 125, ySquare[5] = height/2+300;
  //Dragon Square
  xSquare[6] = width/4 + 100 , ySquare[6] = height/2+300;
  //Horse Square
  xSquare[7] = width/4 + 750, ySquare[7] = height/2+300;
  //Castle Square
  xSquare[8] = width/4 + 525, ySquare[8] = height/2+300;

  //Crown Test Square
  xSquare[9] = width/2+ 10, ySquare[9] = height/2-190;
  // Castle Test Square
  xSquare[10] = width/2 - 200, ySquare[10] = height/2 -190;
  // Sword Test Square
  xSquare[11] = width/2 - 450, ySquare[11] = height/2 - 190;
  // Horse Test Square
  xSquare[12] = width/2 + 200, ySquare[12] = height/2 - 190;
  // Dragon Test Square
   xSquare[13] = width/2 + 360, ySquare[13] = height/2 - 190;

  //crown line
  xLine[0] = xSquare[5], yLine[0] = ySquare[5];
  //sword line
  xLine[1] = xSquare[4], yLine[1] = ySquare[4];
  //dragon line
  xLine[2] = xSquare[6], yLine[2] = ySquare[6];
  //horse line
  xLine[3] = xSquare[7], yLine[3] = ySquare[7];
  //castle line
  xLine[4] = xSquare[8], yLine[4] = ySquare[8];

  knightX = width/2-475, knightY = height/2-280;
  endKnightX = width/2+275;
  dragonX = width/2+350, dragonY = height/2-250;

  xCircle[4] = width/2, yCircle[4] = height/2;

  xSquare[14] = width/2+550, ySquare[14] = height/2-150;
  xSquare[15] = width/2+550, ySquare[15] = height/2+50;
  xSquare[16] = width/2+550, ySquare[16] = height/2+250;
}

/*draw function, which utilizes a switch statement to 
  decide what .js file must be open based on the user input
*/
function draw() {
  /*switch statement that takes the currentActivity Var
    and chooses the correct .js file to load
  */
  switch(currentActivity){
    case 0: 
      background(map);
      menuButton.hide();
      break;
    case 1: 
      background(e1Background);
      loadE1Images();
      drawSquares();
      testAreaSquare();
 
      drawCircles();
      testAreaCircle();

      stroke(0);
      textSize(50);
      fill(0);
      text("Drag the shapes to build the bridge!", width/2-400,        50);


      if(ySquare[0] == ySquare[1] && ySquare[2] == ySquare[3]
        && yCircle[0] == yCircle[1] && yCircle[2] == yCircle[3]){
        textSize(50);
        fill(0);
        text("You win!", width/2-175, height/2+200);
        if(knightX <= endKnightX){
          knightX += 5;
        }
        if(knightX >= endKnightX){
          dragonX += 4;
          dragonY -=2;
        }
        
      }
      
      break;
    case 2: 

      background(100);
      testAreaLine();

      stroke(color("green"));
      testSquares();
      stroke(0);
      fill(0);

      textForE2();
      addImages2();
      drawLines();
      if(xLine[0] == xSquare[9] && xLine[1] == xSquare[11] &&             xLine[2] == xSquare[13] && xLine[3] == xSquare[12] &&            xLine[4] == xSquare[10]){
        frameRate(10);
        textSize(50);
        fill(255);
        text("You win!", width/2-175, height/2);
        noStroke();
        for (let s = 0; s < snowflakes; s++) {
        circle(random(width), y + random(1200), random(1, 6));
        }
        y += 10;

        if (y > 0) {
        y = -600;
        }

      }
      frameRate(60);
      break;
    case 3: 
      exercise3();
      addImages();
      testSliderNum();
      //background(e3Background);
      break;
    case 4:
      button1.show();
      button2.show();
      button3.show();
      button4.hide();
      slider.hide();
      background(tavern);
      drawCircleE4();
      scoringE4();
      store();
      clickCircle();
      loadE4Images();

    if(scoreE4 >= 600){
      textSize(50);
      clickCircleBool = false;
      text("You win!", width/2-400,height/2);
    }
      
      break;
    case 5:
      e1Menu();
      break;

    case 6:
      e2Menu();
      break;

    case 7:
      e3Menu();
      break;
  }

}
