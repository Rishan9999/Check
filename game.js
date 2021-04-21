class Game {

    constructor ()
    {

    } 
       getState(){
        var playerCountRef = database.ref('GameState');
        playerCountRef.on("value",function(data){
          gameState = data.val();
        })
      }
    
      updateCount(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start()
    {
      console.log(gameState) 
      if (gameState == 0) {
        form = new Form()
        form.display ()
      }

    }
    play()
    {   player.playerInfo()
        if(allPlayers !== undefined)
        { var display_position = 130; 
            for(var plr in allPlayers)
            { if (plr === "Player" + player.index)
             fill("red")
              else 
            fill("black");
             display_position+=20; 
             textSize(15); 
             text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) } } 
             if(keyIsDown(UP_ARROW) && player.index !== null)
             { player.distance +=50 
                player.update(); }



    }
 
}

