console.log("21 01 13 JS DOM Events Practice"); // sanity check

// select required elements and check 
let heading = document.querySelector("h1"); 
// console.log(heading);
let divOne = document.querySelector(".container");
// console.log(container);
let textArea = document.querySelector("textarea");
// console.log(textArea);
let clearBtn = document.querySelector("#clear");
// console.log(clearBtn);

// add mouse enter and mouse leave events to update heading color
divOne.addEventListener("mouseenter", () => heading.style.color = "blue");

// declare a function to update font color of the selected element
setFontColor = () => {
    heading.style.color = "white";
}
// when the mouse enters the selected div, call the function
divOne.addEventListener("mouseleave", setFontColor);
// divOne.removeEventListener("mouseleave", setFontColor);

// declare a function that updates the value of the textarea
function clearTextArea(){
    textArea.value = "";
}
// add on click to clear text area
// clearBtn.addEventListener("click", clearTextArea);