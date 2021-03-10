// Your code goes here
console.log (document);

//1 - mouseover (change heading on mouseover)
let logoHeader = document.querySelector(".logo-heading");
// console.log("myLogoHeading:", logoHeader);

logoHeader.addEventListener("mouseover", function(event){
    logoHeader.textContent = "THE WHEELS ON THE BUS GO ROUND AND ROUND!";
})

//2 - mouseover (change section background colors as you move through page)
let pageSections = document.querySelectorAll("section");
console.log ("pageSections:", pageSections);


//3 - click (change text on submit buttons)/change section background color
let pageButtons = document.querySelectorAll(".btn");
console.log("pageButtons:", pageButtons);

let destinationSections = document.querySelectorAll(".destination");

pageButtons[0].addEventListener("click", function(event){
    pageButtons[0].textContent = "WANDERLUST!";
    pageButtons[0].style.fontSize = "2.5rem";
    pageButtons[0].style.fontWeight = "bold";
    destinationSections[0].style.backgroundColor = "orange";
})

pageButtons[1].addEventListener("click", function(event){
    pageButtons[1].textContent = "NOTHING BUT UP!";
    pageButtons[1].style.fontSize = "2.5rem";
    pageButtons[1].style.fontWeight = "bold";
    destinationSections[1].style.backgroundColor = "purple";
})

pageButtons[2].addEventListener("click", function(event){
    pageButtons[2].textContent = "ADVENTURE TIME!";
    pageButtons[2].style.fontSize = "2.5rem";
    pageButtons[2].style.fontWeight = "bold";
    destinationSections[2].style.backgroundColor = "hotpink";
})


