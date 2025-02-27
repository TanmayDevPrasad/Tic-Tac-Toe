//* AUTHOR : Tanmay Dev Prasad
//* Date : 23 Feb 2025

//accepting user's choice from the menu
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

    }
}
) 