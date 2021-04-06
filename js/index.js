// Your code goes here
console.log(document);

const body = document.querySelector("body");
console.log (body);

body.addEventListener("wheel", () => {
    body.style.backgroundColor = "lightsalmon";
    body.style.transition = "3s";
});
body.addEventListener("mouseleave", () => {
    body.style.backgroundColor = "white";
    body.style.transition = "3s";
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
headerImage.addEventListener("mouseenter", ()=>{
    headerImage.src="https://i0.wp.com/www.upbuild.io/wp-content/uploads/2020/08/yellow-volkswaggon-bus-arches-scaled.jpg?fit=2560%2C1810&ssl=1";
    headerImage.height = "300px";
})

const contentSectionImages = document.querySelectorAll(".content-section img");
console.log(contentSectionImages);
contentSectionImages.forEach((element)=>{
    element.addEventListener("mouseenter", (event)=>{
        // event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 1.3s";
        event.target.style.transform = "rotateY(360deg)";
    })
    // element.addEventListener("mouseleave", (event)=>{
    //     event.target.style.transform = "scale(1)";
    //     event.target.style.transition = "transform .5s";
    // })
})