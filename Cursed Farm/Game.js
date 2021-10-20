class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
 if (gameState === 1){
   
  char1 = createSprite(300,200);
  char1.addImage(char1Img);
  char1.sclae=0.2
  char2 = createSprite(300,200);
  char2.addImage(char2Img);
  char3 = createSprite(500,200);
  char3.addImage(char3Img);
  char4 = createSprite(700,200);
  char4.addImage(char4Img);

  ghost=createSprite(400,800);
  ghost.addImage(ghostImg)
  
 }
   


    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      
      form = new Form()
      form.display();
    

  }
 
    drawSprites();
  }

}
