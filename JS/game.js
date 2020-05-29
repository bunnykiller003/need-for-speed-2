class Game{
constructor(){}
getState(){
    var stateref=database.ref("gameState");
    stateref.on("value",function(data){
     gameState=data.val()
      })

}
   
update(gameState){
 database.ref("/").update({
      gameState:gameState    
    }) 
   }

   start(){
   if (gameState===0){
     player=new Player()
     player.getCount();
     form=new Form()
     form.display();


   }



   }
}