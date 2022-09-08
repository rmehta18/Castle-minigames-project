function switchToE1(){
  currentActivity = 1;
  menuButton.show();
  
  menuButton.position(50,25);
  button2.position(50,60);
  button3.position(50,95);
  button4.position(50,130);
  resetButtonE1.position(50, 165);

  e1MenuButton.hide();
  e2MenuButton.hide();
  e3MenuButton.hide();
  button1.hide();
  button2.show();
  button3.show();
  button4.show();
  resetButtonE1.show();
  resetButtonE2.hide();
  button5.hide();
  slider.hide();
}//end of switchToE1()

function e1Menu(){
  let gameText = "Welcome to Bridge Build!\n Help knight Angelica cross the bridge\n and defeat the dragon!\n Win by dragging the shape with\n matching colors to each other,\n and hurry! The kingdom is relying on you!";
  
  fill(0);
  textSize(30);
  currentActivity = 5;
  menuButton.position(50,25);
  e1MenuButton.position(50,60);

  e1MenuButton.show();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  resetButtonE1.hide();
  menuButton.show();
  button5.hide();
  slider.hide();
  
  background(100);
  
  text(gameText, width/2-200, height/2-200);
  image(knight, width/2-600, height/2-250, 350,500);
}

function resetE1(){
  ySquare[0] = height/2+200;
  ySquare[1] = height/2-100;
  ySquare[2] = height/2+200;
  ySquare[3] = height/2-100;
  yCircle[0] = height/2+200;
  yCircle[1] = height/2-100;
  yCircle[2] = height/2+200;
  yCircle[3] = height/2-100;
  knightX = width/2-500;
  dragonX = width/2+350, dragonY = height/2-250;
}

function loadE1Images(){
  image(right_bridge, width/2+175, height/2-230, 500,400);
  image(left_bridge, width/2-795, height/2-230, 500,400);
  image(knight, knightX, knightY, 75,125);
  image(dragon, dragonX, dragonY, 150,100);
}

function testAreaCircle()  {
  //testArea is = to square2
  let testAreaCircle = false, testAreaCircle2 = false;
  //if moveSquare is true, check to see if mouse is over square2
  if(moveCircle){
    //if mouse if over square2, testArea is true
    if (mouseInCircle(1)) {
        testAreaCircle = true;
        //if testArea is true set square1=square2/make moveSquare false
        if(testAreaCircle){
          xCircle[0] = xCircle[1];
          yCircle[0] = yCircle[1];
          winSound.setVolume(0.1);
          winSound.play();
          moveCircle = false;
        }//end inner if(testArea)
    }//end inner if(mouseX...)
  }//end if(moveSquare)
  if(moveCircle2){
    if(mouseInCircle(3)){
      testAreaCircle2 = true;
    }
    if(testAreaCircle2){
      xCircle[2] = xCircle[3];
      yCircle[2] = yCircle[3];
      winSound.setVolume(0.1);
      winSound.play();
      moveCircle2 = false;
    }
  }
}//end testArea()

function drawCircles(){
  if(mouseInCircle(0)){
    strokeWeight(1);
    stroke(0);
    fill(200, 0, 0);
  }
  else{
    strokeWeight(1);
    stroke(255);
    fill(255, 0, 0);
  }
  if(yCircle[0] == yCircle[1] && xCircle[0] == xCircle[1]){
    strokeWeight(2);
    stroke(175);
    fill(255,0,0);
  }//end if(yCircle...)
  circle(xCircle[1],yCircle[1],DIAM);
  circle(xCircle[0],yCircle[0],DIAM);
  if(mouseInCircle(2)){
    strokeWeight(1);
    stroke(0);
    fill(0, 85, 255);
  }
  else{
    strokeWeight(1);
    stroke(255);
    fill(0, 128, 255);
  }
  if(yCircle[2] == yCircle[3] && xCircle[2] == xCircle[3]){
    strokeWeight(2);
    stroke(175);
    fill(0, 128, 255);
  }//end if(yCircle...)
  circle(xCircle[2],yCircle[2],DIAM);
  circle(xCircle[3],yCircle[3],DIAM);
}//end drawCircles()

function testAreaSquare()  {
  //testArea is = to square2
  let testAreaSquare = false;
  let testAreaSquare2 = false;
  //if moveSquare is true, check to see if mouse is over square2
  if(moveSquare){
    //if mouse if over square2, testArea is true
    if (mouseInRect(1)) {
      testAreaSquare = true;
      //if testArea is true set square1=square2/make moveSquare false
      if(testAreaSquare){
        xSquare[0] = xSquare[1];
        ySquare[0] = ySquare[1];
        winSound.setVolume(0.1);
        winSound.play();
        moveSquare = false;
      }//end inner if(testArea)  
    }//end inner if(mouseInRect)

  }//end if(moveSquare)
  if(moveSquare2){
    if (mouseInRect(3)){
      testAreaSquare2 = true
    }
      if(testAreaSquare2){
        xSquare[2] = xSquare[3];
        ySquare[2] = ySquare[3];
        winSound.setVolume(0.1);
        winSound.play();
        moveSquare2 = false;
      }
  }
  //if square1=square2 set fill to black and get rid of the stroke
}//end testArea()

function drawSquares(){
  /*
    rectMode(RADIUS) is used to draw the rectangle with the first 2 parameters
    being the center point and the 2nd to parameters being the width and height
    the exercise will not work properly without it
  */
  if(mouseInRect(0)){
    strokeWeight(1);
    stroke(0);
    fill(204, 204, 0);
  }
  else{
    strokeWeight(1);
    stroke(255);
    fill(255, 255, 0);
  }
  if(ySquare[0] == ySquare[1] && xSquare[0] == xSquare[1]){
    fill(255, 255, 0);
    strokeWeight(2)
    stroke(175);
  }//end if(ySquare...)
  rectMode(RADIUS);
  rect(xSquare[1],ySquare[1], squareSize, squareSize);
  rect(xSquare[0],ySquare[0], squareSize, squareSize);
    if(mouseInRect(2)){
    strokeWeight(1);
    stroke(0);
    fill(0, 200, 0);
  }
  else{
    strokeWeight(1);
    stroke(255);
    fill(0,225,0);
  }
  if(ySquare[2] == ySquare[3] && xSquare[2] == xSquare[3]){
    fill(0,255,0);
    strokeWeight(2)
    stroke(175);
  }//end if(ySquare...)
  rect(xSquare[2],ySquare[2], squareSize, squareSize);
  rect(xSquare[3],ySquare[3], squareSize, squareSize);
}//end drawSquares()
