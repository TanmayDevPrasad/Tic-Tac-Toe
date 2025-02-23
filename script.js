//* AUTHOR : Tanmay Dev Prasad
//* Date : 23 Feb 2025

//event delegation on all the boxes
const playground = document.querySelector(".arena")
playground.addEventListener("click",(event) => {

    const cross = document.createElement("span")
    cross.innerHTML = "×"
    
    const circle = document.createElement("p")
    circle.innerHTML = "◯"
  
    if (event.target.classList.contains("box")) {
        box = event.target;
        // box.append(cross)
        box.append(circle)
    }
}
) 