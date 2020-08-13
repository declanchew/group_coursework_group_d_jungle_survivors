//Section One by Declan Chew

function room11(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have been having a good time camping in the jungle. However, you sense danger and have to leave immediately. <br> You must first head East and gradually find your way out."
    //Change the Pic
    thepic.src = "images/room11_campsite.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room12)  
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = ""
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = "Head East"
    document.getElementById("fourthHeader").innerHTML = ""

    
}

function room12(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You are met with 3 pathways. <br> Choose to take PATH 1, PATH 2 or PATH 3."
    //Change the Pic
    thepic.src = "images/room12_jungle_split_paths.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room13)
    document.getElementById("S").addEventListener("click",room14)
    document.getElementById("E").addEventListener("click",room15) 
    document.getElementById("W").addEventListener("click",room11)

    document.getElementById("firstHeader").innerHTML = "Take Path 1"
    document.getElementById("secondHeader").innerHTML = "Take Path 2"
    document.getElementById("thirdHeader").innerHTML = "Take Path 3"
    document.getElementById("fourthHeader").innerHTML = "Return to Campsite"

    document.getElementById("S").onclick = function() {alert("You suddenly feel an overwhelming presence around you...")};
  
}

//Example of a locked room
function room15(){
    
    //Change the Text
    
    //Change the Pic
    thepic.src = "images/room15_safehouse.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links based on Key
    if (lockKey){

        document.getElementById("story").innerHTML = "You have arrived at a safe-house at the end of this path. It has a front door which is shut tight by a lock. <br> You will need a key of some sorts to open it...<br><br> <b> and you now try using the key you have just picked up.<b>"

        document.getElementById("N").addEventListener("click",wrongWay) //Room unlocked
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("E").addEventListener("click",room21)
        document.getElementById("W").addEventListener("click",room12)

        document.getElementById("firstHeader").innerHTML = ""
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Enter Safehouse"
        document.getElementById("fourthHeader").innerHTML = "Head back to Split Pathways"

        document.getElementById("E").onclick = function() {alert("The key works on the lock! And you now enter the Safehouse.")}
      
    }else{
        // alert("You have no key")
        document.getElementById("story").innerHTML = "You have arrived at a safe-house at the end of this path. It has a front door which is shut tight by a lock. <br> You will need a key of some sorts to open it..."

        document.getElementById("N").addEventListener("click",wrongWay) //Room not unlocked
        document.getElementById("E").addEventListener("click",lockedDoor)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room12)

        document.getElementById("firstHeader").innerText = ""
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Enter Safehouse"
        document.getElementById("fourthHeader").innerHTML = "Head back to Split Pathways"
        
    }

}

//Example of picking up an item
function room13(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You have come to a dead end, but you spot a chest under a tree. <br>You open the chest and it contains a KEY. <br><br> <b>You take the KEY and head back to the split pathways.<b>"
     lockKey = true;
    //Change the Pic
    thepic.src = "images/room13_chest_under_tree.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room12)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = ""
    document.getElementById("secondHeader").innerHTML = "Head back to Split Pathways"
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = ""
}

//Example of Death
function room14(){
    // alert("You suddenly feel an overwhelming presence around you")
    //Change the Text
    document.getElementById("story").innerHTML =
     "You have been captured by a family of Gorillas! <br> <br> GAME OVER <br> <br> Click 'Restart the Game' to start over."
    //Change the Pic
    thepic.src = "images/room14_gorillas.jpg"
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

