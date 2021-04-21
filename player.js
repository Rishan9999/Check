class Player {

    constructor  () {
      this.index = null
      this.name = null
      this.distance = 0
    }
    getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value",function(data){
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          PlayerCount: count
        });
      }
        update(){
            var playerIndex = "Players/Player" + playerCount;
            database.ref(playerIndex).set({
              name:this.name,
              distance:this.distance
            });
          }
      playerInfo(){
        var playerCountRef = database.ref('Players');
        playerCountRef.on("value",function(data){
         allPlayers = data.val();
        })


      }
      
      
      
}

