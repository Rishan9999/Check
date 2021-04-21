class Form {

    constructor ()
    {

    }
display() {
    var name = createInput("Name");
    var enter = createButton("Submit");
    var title = createElement ("h1")
   player = new Player()
   player.getCount()

    name.position (200,150);
    enter.position (200,200);
    title.position (200,50);
    title.html("Race")
    enter.mousePressed(function(){
           name.hide()
           playerCount = playerCount + 1
           player.updateCount(playerCount)
           player.index= playerCount 
           player.name = name.value()
           player.update()
           enter.hide()
            var greating = createElement ("h2")
            greating.position (200,150)
            greating.html("Hello "+name.value())
        }
    )
    }
}
