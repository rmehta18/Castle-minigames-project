function mousePressed() {
  //exercise 1
  if(currentActivity == 1){
    //if statement tests if mouse is in square1
    if(mouseInRect(0)) {
      //if mouse is in square1 overSquare is true
      moveSquare = true;
    }
    else{
      moveSquare = false;
    }
    if(mouseInRect(2)){
      moveSquare2 = true;
    }
    else{
      moveSquare2 = false;
    }
    if(mouseInCircle(0)){
      moveCircle = true;
    }
    else{
      moveCircle = false;
    }
    if(mouseInCircle(2)){
      moveCircle2 = true;
    }
    else{
      moveCircle2 = false;
    }
  }
  //Exercise 2  
  else if(currentActivity == 2){
    //Crown
    if(mouseInRect(5)) {
      moveLine = true;
    }
    //Dragon
    else if(mouseInRect(6)) {
      moveLine2 = true;
    }
    //Sword
    else if(mouseInRect(4)) {
      moveLine3 = true;
    }
    //Castle
    else if(mouseInRect(8)) {
      moveLine4 = true;
    }
    //Horse
    else if(mouseInRect(7)) {
      moveLine5 = true;
    }  
  }
}//end of mousePressed()

//anytime mouse is dragged (while in E1), this function is called
function mouseDragged() {
  //if moveSquare is true the x/y coordinates of square1 = the x/y of the mouse
  if(currentActivity == 1){
    if (moveSquare) {
      xSquare[0] = mouseX;
      ySquare[0] = mouseY;
    }
    else if(moveSquare2){
      xSquare[2] = mouseX;
      ySquare[2] = mouseY;
    }
    else if(moveCircle){
      xCircle[0] = mouseX;
      yCircle[0] = mouseY
    }
    else if(moveCircle2){
      xCircle[2] = mouseX;
      yCircle[2] = mouseY;
    }
    else{
      moveSquare = false;
      moveSquare2 = false;
      moveCircle = false;
      moveCircle2 = false;
    }
  }
  else if(currentActivity == 2){
    //crown
    if (moveLine) {
      xLine[0] = mouseX;
      yLine[0] = mouseY;
    }
    //Dragon
    else if(moveLine2){
      xLine[2] = mouseX;
      yLine[2] = mouseY;
    }
    //Sword
    else if(moveLine3){
      xLine[1] = mouseX;
      yLine[1] = mouseY;
    }
    //Castle
    else if(moveLine4){
      xLine[4] = mouseX;
      yLine[4] = mouseY;
    }
    //Horse
    else if(moveLine5){
      xLine[3] = mouseX;
      yLine[3] = mouseY;
    }
  }
}//end of mouseDragged()

//anytime mouse is released, this function is called
function mouseReleased() {
  moveSquare = false;
  moveSquare2 = false;
  moveCircle = false;
  moveCircle2 = false;
  moveLine = false;
  moveLine2 = false;
  moveLine3 = false;
  moveLine4 = false;
  moveLine5 = false;

if((slider.value()+1) == num) {
      currScore++  
      randomNum();
      winSound.setVolume(0.1);
      winSound.play(); 
    } 
    else if ((slider.value()+1) != num) {
      currScore = 0;
      //loseSound.setVolume(0.1);
      //loseSound.play(); 
    }
  
  if(currentActivity == 4){
    if(mouseInCircle(4)){
      clickCircleBool = true;
    }
    if(mouseInRect(14) && scoreE4 >= 20){
      canPurchase1 = true;
    }
    if(mouseInRect(15) && scoreE4 >= 100){
      canPurchase2 = true;
    }
    if(mouseInRect(16) && scoreE4 >= 200){
      canPurchase3 = true;
    }    
  }
}//end of mouseReleased()

