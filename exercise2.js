function switchToE2(){
  currentActivity = 2;
  menuButton.show();

  e1MenuButton.hide();
  e2MenuButton.hide();
  e3MenuButton.hide();
  menuButton.position(50,25);
  button1.position(50,60);
  button3.position(50,95);
  button4.position(50,130);
  resetButtonE2.position(50, 165);
  
  button1.show();
  button2.hide();
  button3.show();
  button4.show();
  button5.hide();
  resetButtonE1.hide();
  resetButtonE2.show();
  slider.hide();
}

function e2Menu(){
  let gameText = "Welcome to Item hunt!\n Help knight Angelica find out what each magical item is\n to let it snow!\n Win by dragging a line to the matching items,\n Help the kingdom get a snow day by finding all 5 magical items!";
  
  fill(0);
  textSize(30);
  currentActivity = 6;
  menuButton.position(50,25);
  e2MenuButton.position(50,60);

  e1MenuButton.hide();
  e2MenuButton.show();
  e3MenuButton.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  resetButtonE1.hide();
  menuButton.show();
  button5.hide();
  slider.hide();
  
  background(color("brown"));
  
  text(gameText, width/2-200, height/2-200);
  image(knight, width/2-600, height/2-250, 350,500);
}

function resetE2() {
  xLine[0] = xSquare[5];
  yLine[0] = ySquare[5];
  xLine[2] = xSquare[6];
  yLine[2] = ySquare[6];
  xLine[1] = xSquare[4];
  yLine[1] = ySquare[4];
  xLine[4] = xSquare[8];
  yLine[4] = ySquare[8];
  xLine[3] = xSquare[7];
  yLine[3] = ySquare[7];
}


function textForE2() {
  background(color("brown"));
  textSize(20);
  textFont('Comic Sans MS');
  text("Help the knight find out what each item is to let it snow! (Drag the item to the correct word)",300, 100);
  text("Sword", 250, 200);
  text("Castle", 495, 200);
  text("Crown", 695, 200);
  text("Horse", 895, 200);
  text("Dragon", 1090, 200);
 }

// This function will add the corresponding images on the screen
function addImages2() {
  image(img6,width/4 + 225, height/2+175, 200,150);
  image(img7,width/4 - 225, height/2 + 175, 200, 150);
  image(img8,width/4 -15, height/2 + 175, 200,150);
  image(img9,width/4 + 650, height/2 + 175, 200,150);
  image(castleImg,width/4 + 425, height/2 + 175, 200,150);
}

function testSquares() {
  fill(color("brown"));
  rectMode(RADIUS);
  rect(xSquare[4],ySquare[4], squareSize, squareSize);
  rect(xSquare[5],ySquare[5], squareSize, squareSize);
  rect(xSquare[6],ySquare[6], squareSize, squareSize);
  rect(xSquare[7],ySquare[7], squareSize, squareSize);
  rect(xSquare[8],ySquare[8], squareSize, squareSize);
  rect(xSquare[9],ySquare[9], squareSize,squareSize);
  rect(xSquare[10],ySquare[10], squareSize,squareSize);
  rect(xSquare[11],ySquare[11], squareSize,squareSize);
  rect(xSquare[12],ySquare[12], squareSize,squareSize);
  rect(xSquare[13],ySquare[13], squareSize,squareSize);
}

function testAreaLine(){
  let testAreaLine = false;
  let testAreaLine1 = false;
  let testAreaLine2 = false;
  let testAreaLine3 = false;
  let testAreaLine4 = false;
  
  //crown line
  if(moveLine){
    if (mouseInRect(9)) {
      testAreaLine = true;
      if(testAreaLine){
        xLine[0] = xSquare[9];
        yLine[0] = ySquare[9];
        moveLine = false;
        winSound.setVolume(0.1);
        winSound.play();      
      } 
    }
  }
  
  //dragon line
  if(moveLine2){
    if (mouseInRect(13)) {
      testAreaLine1 = true;
      if(testAreaLine1){
        xLine[2] = xSquare[13];
        yLine[2] = ySquare[13];
        moveLine2 = false;
        winSound.setVolume(0.1);
        winSound.play();            
      } 
    }
  }
  
  //sword line
  if(moveLine3){
    if (mouseInRect(11)) {
      testAreaLine2 = true;
      if(testAreaLine2){
        xLine[1] = xSquare[11];
        yLine[1] = ySquare[11];
        moveLine3 = false;
        winSound.setVolume(0.1);
        winSound.play();            
      } 
    }
  }
  
  //castle line
  if(moveLine4){
    if (mouseInRect(10)) {
      testAreaLine3 = true;
      if(testAreaLine3){
        xLine[4] = xSquare[10];
        yLine[4] = ySquare[10];
        moveLine4 = false;
        winSound.setVolume(0.1);
        winSound.play();            
      } 
    } 
  }

  //horse line
  if(moveLine5){
    if (mouseInRect(12)) {
      testAreaLine4 = true;
      if(testAreaLine4){
        xLine[3] = xSquare[12];
        yLine[3] = ySquare[12];
        moveLine5 = false;
        winSound.setVolume(0.1);
        winSound.play();            
      } 
    }  
  }
}

function drawLines(){
  //crown line
  line(xSquare[5], ySquare[5], xLine[0], yLine[0]);
  //dragon line
  line(xSquare[6], ySquare[6], xLine[2], yLine[2]);
  //sword line
  line(xSquare[4], ySquare[4], xLine[1], yLine[1]);
  //castle line
  line(xSquare[8], ySquare[8], xLine[4], yLine[4]);
  //horse line
  line(xSquare[7], ySquare[7], xLine[3], yLine[3]);  
}
