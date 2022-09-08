let scoreE4 = 0;

function loadE4Images(){
  image(coin, width/2-125,height/2-125, 250,250);
  image(chest, width/2+450, height/2-250, 200,200);
  image(chest, width/2+450, height/2-50, 200,200);
  image(chest, width/2+450, height/2+150, 200,200);
}

function switchToE4(){
  currentActivity = 4;
  menuButton.show();
  
  menuButton.position(50,25);
  button1.position(50,60);
  button2.position(50,95);
  button3.position(50,130);
  button4.position(50,165);
  
  e1MenuButton.hide();
  e2MenuButton.hide();
  e3Menubutton.hide();
  menuButton.show();
  button1.show();
  button2.show();
  button3.show();
  button4.hide();
  resetButtonE1.hide();
  resetButtonE2.hide();
  button5.hide();
  slider.hide();
}//end of switchToE4()

function drawCircleE4(){
  fill(color("cyan"));
  circle(xCircle[4],yCircle[4],250);
}//end drawCircles()

function scoringE4(){
  fill(255);
  textSize(50);
  text(scoreE4, width/2, height/2-250);
  text("Score", width/2-200, height/2-250);
}

function clickCircle(){
  if(clickCircleBool && bought3){
    scoreE4 += 10;
    clickCircleBool = false;
  }
  if(clickCircleBool && bought2){
    scoreE4 += 5;
    clickCircleBool = false;
  }
  if(clickCircleBool && bought1){
    scoreE4 += 2;
    clickCircleBool = false;
  }
  else if(clickCircleBool){
    scoreE4++;
    clickCircleBool = false;
  }

}

function store(){
  rectMode(RADIUS);
  let newSquareSize = 40;
  fill(255);
  textSize(25);
  text("Upgrade Clicker!", width/2+250, height/2-250);
  fill(100,200,100);
  rect(xSquare[14],ySquare[14], newSquareSize, newSquareSize);
  rect(xSquare[15],ySquare[15], newSquareSize, newSquareSize);
  rect(xSquare[16],ySquare[16], newSquareSize, newSquareSize);

  textSize(20);
  fill(255);
  text("Upgrade 1: +1 click\nCosts 20 points",width/2+300,height/2-150);
    text("Upgrade 2: +3 click\nCosts 100 points",width/2+300,height/2+50);
    text("Upgrade 3: +5 click\nCosts 300 points",width/2+300,height/2+250);
    if(canPurchase1){
      scoreE4 -= 20;
      bought1 = true;
    }
    if(bought1)
      canPurchase1 = false;
   if(canPurchase2){
      scoreE4 -= 100;
      bought2 = true;
    }
      if(bought2)
      canPurchase2 = false;
   if(canPurchase3){
      scoreE4 -= 200;
      bought3 = true;
    }
      if(bought3)
      canPurchase3 = false;
}
