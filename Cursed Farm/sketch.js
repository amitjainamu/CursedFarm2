var canvas, bgImage;

var ghostImg, char1Img,char2Img,char3Img,char4Img;
var char1, char2, char3, char4, ghost;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var wall1, wall2, wall3, wall4;

function preload(){
bgImage =loadImage("images/bg12.jpg");
ghostImg=loadImage("images/ghost3.png");
char1Img=loadImage("images/charec1.png");
char2Img=loadImage("images/charec2.png");
char3Img=loadImage("images/charec3.png");
char4Img=loadImage("images/charec4.png");

}

function setup(){
  canvas = createCanvas(1200,800);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 



}


function draw(){
  background(bgImage)
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    //game.play();
  }

  if(gameState===1){
    wall1=createSprite(600,800,25,150)
    wall2=createSprite(1200,400,25,150)
    wall3=createSprite(1200,400,25,150)
    wall4=createSprite(1200,400,25,150)
   }
   
  if(gameState === 2){
    game.end();
  }
  
 drawSprites(); 
}
