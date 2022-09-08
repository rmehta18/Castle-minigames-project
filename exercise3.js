let num;
//var slider;
let currScore = 0;
let highScore = 0;
function exercise3() {
  background(0);
  fill("white");
  textSize(20);
  textFont('Comic Sans MS');
  text("Drag the correct amount of shields",550, 50);
  //num text
  text(num, 650,150);
   // fill("white");
  //shield nums
  text("1",80, 400);
  text("2",230, 400);
  text("3",380, 400);
  text("4",530, 400);
  text("5",680, 400);
 // fill("purple");
  text("6",830, 400);
  text("7",980, 400);
  text("8",1128, 400);
  text("9",1278, 400);
  text("10",1422, 400);
  //scores
  text("High Score: " + highScore,1100, 100);
  text("Score: " + currScore,1100, 150);
 }

function switchToE3(){
  currentActivity = 3;

  e1MenuButton.hide();
  e2MenuButton.hide();
  e3MenuButton.hide();
  menuButton.position(50,25);
  button1.position(50,60);
  button2.position(50,95);
  button4.position(50,130);
  
  menuButton.show();
  button1.show();
  button2.show();
  button3.hide();
  button4.show();
  resetButtonE1.hide();
  resetButtonE2.hide();
  randomNum();
  button5.hide();
  slider.show();
}

function e3Menu(){
  let gameText = "Welcome to Shield collector!\n Help knight Angelica collect and \n gather as many shield as you can\n to fight off the mighty dragons. The \n more shields, the better!";
  
  fill("white");
  textSize(30);
  currentActivity = 7;
  menuButton.position(50,25);
  e3MenuButton.position(50,60);

  e1MenuButton.hide();
  e2MenuButton.hide();
  e3MenuButton.show();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  resetButtonE1.hide();
  menuButton.show();
  button5.hide();
  slider.hide();
  resetButtonE2.hide();
  
  background(0);
  
  text(gameText, width/2-200, height/2-200);
  image(knight, width/2-600, height/2-250, 350,500);
} 

function addImages() {
  fill(0,75,0);
  image(shieldImage,width/4 - 350, height/2+100, 100,150);
  image(shieldImage,width/4 - 200, height/2+100, 100,150);
  image(shieldImage,width/4 - 50, height/2+100, 100,150);
  image(shieldImage,width/4 + 100, height/2+100, 100,150);
  image(shieldImage,width/4 + 250, height/2+100, 100,150);
  image(shieldImage,width/4 + 400, height/2+100, 100,150);
  image(shieldImage,width/4 + 550, height/2+100, 100,150);
  image(shieldImage,width/4 + 700, height/2+100, 100,150);
  image(shieldImage,width/4 + 850, height/2+100, 100,150);
  image(shieldImage,width/4 + 1000, height/2+100, 100,150);
  image(shieldImage,width/4 + 300, height/2-250, 100,150);
  image(e3Dragon, width/4 - 200, height/2 - 300, 250,200);
}

function randomNum() {
  fill("purple");
  num = int(random(1, 11));
}

function genNum() {
//NEW NUM BUTTON
} 

/*function changeSlider(){
  if((slider.value()+1) == num) {
      currScore++  
      randomNum();
      winSound.setVolume(0.1);
      winSound.play(); 
    } 
    else if ((slider.value()+1) != num) {
      currScore = 0;
      loseSound.setVolume(0.1);
      loseSound.play(); 
    }
} */

function numSlider() {
  slider = createSlider(0, 9, 5, 1);
  slider.position(80, 300);
  slider.style('width', '1370px');
  //slider.input(changeSlider);
  slider.hide();
}
function testSliderNum(){
//let currScore = 0;

  if(currScore >= highScore){
     highScore = currScore;
  }
  //console.log("slider value:", slider.value());
}
              
