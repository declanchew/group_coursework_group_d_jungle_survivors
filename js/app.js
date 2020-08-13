function removeEvents(){
    document.body.outerHTML = document.body.outerHTML
}

//Default Wrong Way 
function wrongWay(){
    alert("That is not a way you can go");
}

function lockedDoor(){
    alert("You cannot enter as you do not have a key")
}

function cannotPass(){
    alert("The ravine is to deep for you to cross, you may need something to help you...")
}

function treeblock(){
    alert("It is impossible to clear it with your bare hands. The exit remains blocked.")
} 

function playAgain(){
    location.reload()
}


//Starting room function call below
room11() //CHANGE TO THE FIRST STARTING ROOM