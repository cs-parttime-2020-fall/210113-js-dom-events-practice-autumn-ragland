console.log("21 01 13 JS DOM Events Practice"); // sanity check

// select required elements and check 
let heading = document.querySelector("h1"); 
// console.log(heading);
let container = document.querySelector(".container");
// console.log(container);
let textArea = document.querySelector("textarea");
// console.log(textArea);
let clearBtn = document.querySelector("button");
// console.log(clearBtn);

// add mouse enter and mouse leave events to update heading color
container.addEventListener("mouseenter", () => heading.style.color = "blue");
container.addEventListener("mouseleave", () => heading.style.color = "white");

// add on click to clear text area
clearBtn.addEventListener("click", () => textArea.value = "");