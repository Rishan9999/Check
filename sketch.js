var form,playerCount,player,database,gameState,game,allPlayers
async function setup() {
  createCanvas(800,400);
  database = firebase.database()
  game = new Game()
 await game.getState()
  game.start()
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (playerCount == 4) {
    game.updateCount(1)
  }
 if (gameState == 1) {
   game.play()
 }
}