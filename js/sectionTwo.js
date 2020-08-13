//Rory Kennedy-Peers

    function room21(){
    
    // alert("The key works on the lock! And you now enter the Safehouse.")
    //Change the Text
    document.getElementById("story").innerHTML =
    "You are inside the Safehouse. Make your way through to the other side."
    //Change the Pic
    thepic.src = "images/inside_safehouse.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room22)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = ""
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = "Exit Safehouse"
    document.getElementById("fourthHeader").innerHTML = ""

}

function room22(){
    
    //Clearing outside Safehouse
    document.getElementById("story").innerHTML = 
    "You reach a clearing outside the Safehouse. Choose between NORTH, EAST and SOUTH paths."
    //Picture of Clearing
    thepic.src = "images/safehouse.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room23)
    document.getElementById("E").addEventListener("click",room25)
    document.getElementById("S").addEventListener("click",room24)
    document.getElementById("W").addEventListener("click",room21)

    document.getElementById("firstHeader").innerHTML = "Go North"
    document.getElementById("secondHeader").innerHTML = "Go South"
    document.getElementById("thirdHeader").innerHTML = "Go East"
    document.getElementById("fourthHeader").innerHTML = "Head back into Safehouse"

    document.getElementById("N").onclick = function() {alert("You suddenly find yourself sinking...")}
}

function room23(){
    
    // alert("You suddenly find yourself sinking..")
    //Sink in swamp, back to game start
    document.getElementById("story").innerHTML = 
    "You have accidentally stepped into a swamp where you slowly sink and die! <br><br> GAME OVER <br><br> Click 'Restart the Game' to start over."
    //Picture of swamp
    thepic.src = "images/swamp.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",playAgain)
    document.getElementById("E").addEventListener("click",playAgain)
    document.getElementById("S").addEventListener("click",playAgain)
    document.getElementById("W").addEventListener("click",playAgain)

    document.getElementById("firstHeader").innerHTML = "Restart the Game"
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = ""

}

function room24(){
    
    //Pick up rope
    document.getElementById("story").innerHTML = 
    "<b>You come across a piece of ROPE and pick it up.<b>"
    rope = true;
    //Picture of rope
    thepic.src = "images/rope.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room22)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = "Head back North"
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = ""
}

function room25(){
    
    
    //Ravine with overhead branch, cannot pass unless player has 'ROPE'  
    //Picture of ravine
    thepic.src = "images/ravine.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (rope){

        document.getElementById("story").innerHTML = "You reach a ravine which is surrounded by many trees, and you see a pathway across the other side... <br><br><b>but you now have the rope which could be helpful here.<b>"

        document.getElementById("N").addEventListener("click",wrongWay) //Room unlocked
        document.getElementById("E").addEventListener("click",room31)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",wrongWay)

        document.getElementById("firstHeader").innerHTML = ""
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Try to cross the Ravine"
        document.getElementById("fourthHeader").innerHTML = "Head back to Clearing"

        document.getElementById("E").onclick = function() {alert("You latch the rope onto an overhead branch, and you swing yourself across the ravine!")}

    }else{

        document.getElementById("story").innerHTML = "You reach a ravine which is surrounded by many trees, and you see a pathway across the other side..."
        
        document.getElementById("N").addEventListener("click",wrongWay) //Room not unlocked
        document.getElementById("E").addEventListener("click",cannotPass)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room22)

        document.getElementById("firstHeader").innerHTML = ""
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Try to cross the Ravine"
        document.getElementById("fourthHeader").innerHTML = "Head back to Clearing"
    }
}
