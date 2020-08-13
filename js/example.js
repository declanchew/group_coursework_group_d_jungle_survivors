//Name of Person who wrote Section

function room99(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are outside a scary house there is an exit south <br> N is Death, E is Key, W is Door"
    //Change the Pic
    thepic.src = "images/pic1.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room94)
    document.getElementById("E").addEventListener("click",room93)
    document.getElementById("S").addEventListener("click",room91)
    document.getElementById("W").addEventListener("click",room92)
}

function room91(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You are in a dark scary wood there is an exit to the North"
    //Change the Pic
    thepic.src = "images/pic2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room99)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

//Example of a locked room
function room92(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "There is a lock here do you have the key?"
    //Change the Pic
    thepic.src = "images/pic2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links based on Key
    if (redKey){
        document.getElementById("N").addEventListener("click",room99) //Room unlocked
        document.getElementById("E").addEventListener("click",room99)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",wrongWay)
    }else{
        alert("You have no key")
        document.getElementById("N").addEventListener("click",wrongWay) //Room not unlocked
        document.getElementById("E").addEventListener("click",room99)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",wrongWay)
    }

}

//Example of picking up an item
function room93(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You see a red key and pick it up"
     redKey = true;
    //Change the Pic
    thepic.src = "images/pic2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room99)
}
//Example of Death
function room94(){
    alert("A monster attacks you. You have died and must restart the game")
    //Change the Text
    document.getElementById("story").innerHTML =
     "You are dead all roads go back to the start"
    //Change the Pic
    thepic.src = "images/pic2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room99)
    document.getElementById("E").addEventListener("click",room99)
    document.getElementById("S").addEventListener("click",room99)
    document.getElementById("W").addEventListener("click",room99)
}
