class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){gameState=data.val();}) 
        console.log(gameState)
    }
    update (state){
        database.ref('/').update({gameState:state})
    }
    start (){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
        }

        character1 = createSprite(30,260);
           character1.addAnimation("running",characterimg1);
           character1.scale = 0.3;
        
           character2 = createSprite(30,380)
           character2.addAnimation("walking",characterimg2);
           character2.scale = 0.3

           characters = [character1, character2]
    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        //
        //text("Game Start",120,100)
        

    //    player.getcarsatend()
        
        if (all_players !== undefined){
           // background(ground_image)
            //console.log(displayHeight)
            //image(track_image,0,-displayHeight*4,displayWidth,displayHeight*5)
           // console.log("player")
           image(background1,0,0,displayWidth,displayHeight)
            var displayPosition = 130;
            var index = 0
            var y = 147
            var x 
        
           
            for (var plr in all_players){
                
                index =index+1
                y = y+20
                //console.log(x)
                x = displayHeight-all_players[plr].distance
                characters[index-1].x = x
                characters[index-1].y = y
                
//CAMERA
                if (index === player.index){
                    fill("red")
                    stroke("black")
                    strokeWeight(3)
                    ellipse(x,y,60,60)
                    camera.position.y = displayWidth/2
                    camera.position.x = characters[index-1].x
                }
            }
            
               
        }
              //  if (player.distance<3550){
                    if (keyIsDown(RIGHT_ARROW) && player.index !== null){
                    player.distance+=25;
                    console.log(player.distance)
                    player.update();
                  }
        //    }
            
                //if (player.distance>3549 && playerfinish === false){
                  //  player.rank +=1;
                  //  playerfinish = true;
                  //  Player.updatecarsatend(player.rank)
              //      console.log(gameState+"line number 85 state")
                    //gameState = 2;
                   // player.getcarsatendcount()
      


                   drawSprites()           
 }




             
            
        
    }

    


