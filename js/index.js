// Your code goes here
// console.log (document);


let logoHeading = document.querySelector(".logo-heading");
// console.log("myLogoHeading:", logoHeader);

logoHeading.addEventListener("mouseover", function(){
    logoHeading.style.transform = "rotate(720deg)";
    logoHeading.style.transition = ".5s";
})

logoHeading.addEventListener("click", function(){
    logoHeading.style.color = "white";
    logoHeading.style.transform = "scale(1.5)";
    logoHeading.style.transition = "transform 3s"; 
  })

let pageBody = document.querySelector("body");
// console.log("pageBody looks like:", pageBody);

let pageHeader = document.querySelector("header");

let h2Titles = document.querySelectorAll("h2");

pageBody.addEventListener("mouseenter", function() {
    pageHeader.style.backgroundColor = "lightsalmon";
    pageHeader.style.transition = "4s";
});

pageBody.addEventListener("wheel", function(event) {
    event.target.style.backgroundColor = "cyan";
    event.target.style.transition = "5s";
});

pageBody.addEventListener("keydown", function(event) {
    event.target.style.backgroundColor = "lightsalmon";
    event.target.style.transition = "5s";
});


h2Titles.forEach((element) => {  
    element.addEventListener("click", (event) => {
        event.target.style.fontSize = "3.5rem";
        event.target.style.fontWeight = "bold";
        event.target.style.transition = "1.5s";
    })
})

h2Titles.forEach((element) => {  
    element.addEventListener("keydown", (event) => {
        event.target.style.fontSize = "3.5rem";
        event.target.style.fontWeight = "bold";
        event.target.style.transition = "1.5s";
    })
})

let pageButtons = document.querySelectorAll(".btn");
// console.log("pageButtons:", pageButtons);

let signupSection = document.querySelector(".content-pick");

let destinationSections = document.querySelectorAll(".destination");

signupSection.addEventListener("mouseover", function(){
    signupSection.style.backgroundColor = "white";
    signupSection.style.transition = "2s";
})

pageButtons[0].addEventListener("click", function(){
    pageButtons[0].textContent = "WANDERLUST!";
    pageButtons[0].style.fontSize = "2rem";
    pageButtons[0].style.fontWeight = "bold";
    destinationSections[0].style.backgroundColor = "lightsalmon";
})

pageButtons[1].addEventListener("click", function(){
    pageButtons[1].textContent = "TO THE TOP!";
    pageButtons[1].style.fontSize = "2rem";
    pageButtons[1].style.fontWeight = "bold";
    destinationSections[1].style.backgroundColor = "lightsalmon";
})

pageButtons[2].addEventListener("click", function(){
    pageButtons[2].textContent = "ADVENTURE TIME!";
    pageButtons[2].style.fontSize = "2rem";
    pageButtons[2].style.fontWeight = "bold";
    destinationSections[2].style.backgroundColor = "lightsalmon";
})

//zoom images
let myImages = document.querySelectorAll("img");

myImages.forEach(function(element) {
    element.addEventListener("mouseover", (function(event) {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "transform 1s";
    }))
})

myImages.forEach(function(element) {
    element.addEventListener("mouseleave", (function(event) {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "transform .5s";
    }))
})

