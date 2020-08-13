//Samira

function room31(){
    
    // alert("You latch the rope onto an overhead branch, and you swing yourself across the ravine!")
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have reached a Majestic Stone Temple where it seems like you can take shelter here until you figure out your next move. <br> You are close to your jungle escape but you must search for an exit to get there!"
    //Change the Pic
    thepic.src = "images/temple31.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room32) //injury
    document.getElementById("E").addEventListener("click",room33) //axe
    document.getElementById("S").addEventListener("click",room34) //trees
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = "Go North"
    document.getElementById("secondHeader").innerHTML = "Go South"
    document.getElementById("thirdHeader").innerHTML = "Go East"
    document.getElementById("fourthHeader").innerHTML = ""

    document.getElementById("N").onclick = function() {alert("Angry tribesmen who think you are trespassing attack you!")}
}


function room32(){

    // alert("Angry tribesmen who think you are trespassing attack you!")
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have been shot and must head back to the clearing outside the Safehouse to recover. From there you can try to escape the jungle again! "
    //Change the Pic
    thepic.src = "images/tribesmen32.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room22)
    document.getElementById("E").addEventListener("click",room22)
    document.getElementById("S").addEventListener("click",room22)
    document.getElementById("W").addEventListener("click",room22)

    document.getElementById("firstHeader").innerHTML = "Head back to the Clearing"
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = ""

    
}


function room33(){

    //Change the Text
    document.getElementById("story").innerHTML =
        "<b>You see an AXE and pick it up.<b>"
        axe = true;
    //Change the Pic
    thepic.src = "images/axe33.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room31)

    document.getElementById("firstHeader").innerHTML = ""
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = "Head back to Stone Temple"
    
}


function room34(){

    //Remove old Links
    removeEvents();
    //Add new Links
    if (axe){
        document.getElementById("story").innerHTML =
        "You use your axe to hack through the thicket of trees so you can exit the jungle. <br> Head East for safety!"
        thepic.src = "images/clearthicket34.jpg"
        document.getElementById("N").addEventListener("click",wrongWay) 
        document.getElementById("E").addEventListener("click",room35) //Room unlocked
        document.getElementById("S").addEventListener("click",wrongWay) 
        document.getElementById("W").addEventListener("click",wrongWay) 

        document.getElementById("firstHeader").innerHTML = ""
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Head East!"
        document.getElementById("fourthHeader").innerHTML = ""

    }else{
        document.getElementById("story").innerHTML =
        "You stumble upon a thicket of trees, where you can see an exit of the jungle through it. <br> You find a way to get through."
        thepic.src = "images/thicket34.png"
        document.getElementById("N").addEventListener("click",room31) //Room not unlocked
        document.getElementById("E").addEventListener("click",treeblock) 
        document.getElementById("S").addEventListener("click", wrongWay)
        document.getElementById("W").addEventListener("click",wrongWay) 

        document.getElementById("firstHeader").innerHTML = "Head back to Stone Temple"
        document.getElementById("secondHeader").innerHTML = ""
        document.getElementById("thirdHeader").innerHTML = "Try clearing the thicket"
        document.getElementById("fourthHeader").innerHTML = ""

    }
}


function room35(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "<strong> CONGRATULATIONS </strong> <br> You have survived the jungle! <br> Your rescue helicopter will fly you away. "
    //Change the Pic
    thepic.src = "images/helicopter35.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",playAgain)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)

    document.getElementById("firstHeader").innerHTML = "Play Again"
    document.getElementById("secondHeader").innerHTML = ""
    document.getElementById("thirdHeader").innerHTML = ""
    document.getElementById("fourthHeader").innerHTML = ""

}

