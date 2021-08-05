class Game {
    constructor(){

    }

    getState(){
        var gsref = database.ref('gameState')
        gsref.on("value", function(data){
            gameState = data.val()
        })


    }
    update(state){
        database.ref('gameState').update({
            gamestate: state
        })
    }

    start(){
        if(gameState === 0){
           form = new Form()      
           form.display();

           player = new Player()

           player.getCount()
        }    
    }
}