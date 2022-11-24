

// window.localStorage.clear();


let isPickpicked = false;
let noteGet = false;
let keyGet = false;




// Backroom page
window.addEventListener("load" ,function() {
    if (window.localStorage.isPickpicked === true){
        document.getElementById("thepick").style.display ='block';
        const backroom = document.getElementById("backroom");
        backroom.src = "gameimages/backroomnopick.png";
    }
    

    const thepick = document.getElementById("thepick");

    backroom.addEventListener("click", function(){

        document.getElementById("thepick").style.display ='block';
        backroom.src = "gameimages/backroomnopick.png"
        window.localStorage.isPickpicked = true;
        console.log("hejhej");
         
    });

});
//leftroom
window.addEventListener("load", function(){
    if (window.localStorage.noteGet ===true && window.localStorage.isPickpicked === true){
        document.getElementById("thenote").style.display ='block';
        const leftroom = document.getElementById("leftroom");
        leftroom.src ="gameimages/leftroomnolock.png"
    }

    
    const thenote = document.getElementById("thenote");
    

    leftroom.addEventListener("click", function(){
        const randomNumber = Math.floor(Math.random() * 7);
        console.log(randomNumber);
        if (localStorage.isPickpicked === "true" && randomNumber > 4){
            
        document.getElementById("thenote").style.display ='block';
        leftroom.src ="gameimages/leftroomnolock.png"
        alert("You find a note with a code written on it")
        window.localStorage.noteGet = true;
        }

        else if(localStorage.isPickpicked === "true" && randomNumber <= 4){

            alert(" you failed.try again!");
        }

        
        else {
            alert("you need to find somehthing to pick the lock");
        }

    });



});

//rightroom
window.addEventListener("load", function(){
    if(window.localStorage.noteGet ===true && window.localStorage.isPickpicked === true && window.localStorage.keyGet === true){
        document.getElementById("thekey").style.display ='block';
        const rightroom = document.getElementById("leftroom");
        rightroom.src ="gameimages/rightroomnolock.png"
    }
        const thekey = document.getElementById("thekey");

        rightroom.addEventListener("click", function(){
            if (localStorage.noteGet === "true"){

            document.getElementById("thekey").style.display ='block';
            rightroom.src ="gameimages/rightroomnolock.png"
            alert("you find a key in the box!")
            window.localStorage.keyGet = true;

            }
            else {
                alert("you need a code to unlcock it");
            }
        });
});

//door room

window.addEventListener("load", function(){
if(window.localStorage.noteGet ===true && window.localStorage.isPickpicked === true && window.localStorage.keyGet === true){
    const door = document.getElementById("door");
    door.src ="gameimages/doornolock.png"
    this.window.localStorage.keyGet =true;
}


// door

door.addEventListener("click", function(){
    if (localStorage.keyGet === "true"){
        door.src ="gameimages/doornolock.png"
        alert("You escaped");
        window.localStorage.keyGet = true;
    }
    else {
        alert("You can't open the door. You need to find a key");
        }

    });
});




