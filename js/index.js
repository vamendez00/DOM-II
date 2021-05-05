// EXPERIMENTING

// function transBackground(event) {
//     console.log(event);
//     console.log(event.target);
//     event.target.style.backgroundColor = "aqua";
//     event.target.style.transition = "7s";
// }
// document.querySelector("body").addEventListener("wheel", transBackground);


// Your code goes here
console.log(document);

const body = document.querySelector("body");
console.log (body);

window.addEventListener("load", () => {
    body.style.backgroundColor = "lightsalmon";
    body.style.transition = "4s";
});

body.addEventListener("wheel", () => {
    body.style.backgroundColor = "cyan";
    body.style.transition = "2s";
});

body.addEventListener("keydown", () => {
    body.style.backgroundColor = "white";
    body.style.transition = "1s";
});

const headerNavBar = document.querySelector("header.main-navigation");
const logoHeading = document.querySelector(".logo-heading");

headerNavBar.addEventListener("mouseenter", function(){
    logoHeading.style.fontWeight = "bold";
});
headerNavBar.addEventListener("mouseleave", function(){
    logoHeading.textContent="ALL ABOARD!";
    logoHeading.style.transform = "rotate(720deg)";
    logoHeading.style.transition = "1s";
});

const headerImage = document.querySelector(".intro img");
// console.log(headerImage);
headerImage.addEventListener("mouseover", ()=>{
    headerImage.src="https://www.mewallpaper.com/thumbnail/city/9396-vw-bus-toy-hq-image-free-wallpaper.jpg";
    // headerImage.style.transform = "rotateY(360deg)";
    headerImage.style.transform = "rotateX(360deg)";
    headerImage.style.transition = "1s";
    headerImage.style.width = "900px";
    headerImage.style.height = "300px";
})

const contentSectionImages = document.querySelectorAll(".content-section img");
console.log(contentSectionImages);
contentSectionImages.forEach((element)=>{
    element.addEventListener("mouseenter", (event)=>{
        event.target.style.transition = "transform 1.3s";
        event.target.style.transform = "rotateY(360deg)";
    })
});

let h2Titles = document.querySelectorAll("h2");

h2Titles.forEach((element) => {  
    element.addEventListener("mouseenter", (event) => {
        event.target.style.fontSize = "3.5rem";
        event.target.style.fontWeight = "bold";
        event.target.style.transition = "1s";
    })
})