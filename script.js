//* AUTHOR : Tanmay Dev Prasad
//* Date : 23 Feb 2025

//accepting user's choice from the early menu
var userChoice;

document.querySelector(".choiceBtns").addEventListener("click", (event) => {
    //if user chooses x
    if (event.target.classList.contains("x")) {
        userChoice = "×"

        document.querySelector(".choiceMenu").remove(); //removing the choice menu after user selects their choice
        document.getElementById("header").style.opacity = "1"; //retaining the opacity
        document.getElementById("main").style.opacity = "1";
    }
    //if user chooses O
    else if (event.target.classList.contains("O")) {
        userChoice = "◯"

        document.querySelector(".choiceMenu").remove(); //removing the choice menu after user selects their choice
        document.getElementById("header").style.opacity = "1"; //retaining the opacity
        document.getElementById("main").style.opacity = "1";
    }
}
)

//logic for ai to play
function aiPlay() {
    const boxes = document.querySelectorAll(".box") //selecting all the boxes
    const emptyBoxes = [] //array to store all the empty boxes

    boxes.forEach((box) => { //iterating through all the boxes
        if (box.childElementCount == 0) {
            emptyBoxes.push(box)
        }
    })

    const randomBox = Math.floor(Math.random() * emptyBoxes.length) //selecting a random box from the empty boxes
    const box = emptyBoxes[randomBox] //selecting the box to append the ai's choice

    const cross = document.createElement("span") 
    cross.innerHTML = "×"

    const circle = document.createElement("p")
    circle.innerHTML = "◯"

    if(userChoice == "×"){  //if user chooses x, ai will choose O
        box.append(circle)
    }
    else{                   //if user chooses O, ai will choose x
        box.append(cross)
    }
}


//event delegation on all the boxes
const playground = document.querySelector(".arena")
playground.addEventListener("click", (event) => {

    const cross = document.createElement("span")
    cross.innerHTML = "×"

    const circle = document.createElement("p")
    circle.innerHTML = "◯"

    if (event.target.classList.contains("box")) {
        box = event.target;

        if(userChoice == "×"){
            box.append(cross)
        }
        else{
            box.append(circle)
        }

        aiPlay(); //ai plays after user plays
    }
}
) 