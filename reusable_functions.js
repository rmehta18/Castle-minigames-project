/*
  checks if the mouse is inside of the rectangle/square and returns true or false
  Since most of the exercices are going to require arrays to hold the objects, it 
  passes x as a parameter to determine what object you are trying to check
*/
function mouseInRect(x){
  if(mouseX > xSquare[x] - squareSize &&
    mouseX < xSquare[x] + squareSize &&
    mouseY > ySquare[x] - squareSize &&
    mouseY < ySquare[x] + squareSize){
    return true;
    }
  else{
    return false;
  }
}

function mouseInCircle(x){
  let d = dist(mouseX,mouseY,xCircle[x],yCircle[x])
  if(d<RAD){
    return true;
  }
  else{
    return false;
  }
}


