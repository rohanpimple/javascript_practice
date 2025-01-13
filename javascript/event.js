// // let btn = document.querySelector("#btn1");

// // btn1.onclick = () => {
// //     console.log("you are entered button");
// // };

// //double click

// // let btn = document.querySelector("#btn2");

// // btn2.ondblclick = () => {
// //     console.log("you are clicked buttnon twice");
// // };

// // mouseover

// let div = document.querySelector("#div");

// div.onmouseover = () => {

// }

let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
