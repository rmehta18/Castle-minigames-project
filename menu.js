function switchToMM(){
  currentActivity = 0;
  
  menuButton.position((windowWidth/2)+50, (windowHeight/2)+150);
  button1.position((windowWidth/2)+125,(windowHeight/2)-140);
  button2.position((windowWidth/2) + 425,(windowHeight/2) - 45);
  button3.position((windowWidth/2)-215,(windowHeight/2)+75);
  button4.position((windowWidth/2)+250,(windowHeight/2)+90);

  e1MenuButton.hide();
  e2MenuButton.hide();
  e3MenuButton.hide();
  menuButton.hide();
  button1.show();
  button2.show();
  button3.show();
  button4.show();
  resetButtonE1.hide();
  resetButtonE2.hide();
  button5.hide();
  slider.hide();
}