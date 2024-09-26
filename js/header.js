"use strict"
const dropdown = document.querySelector(".dropdown_link");
const dropdownMenu = document.querySelector(".dropdown_menu");
const dropArrow = document.querySelector(".arrow_img");
const burger = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen-menu");
// const innerShadow = document.querySelector(".inner_shadow");
const navbarContainer = document.querySelector(".navbar_container");


dropdown.addEventListener("mouseenter", ()=>{
    dropdownMenu.classList.add("active");
    dropArrow.classList.add("active");
    // innerShadow.classList.add("active");
    navbarContainer.classList.add("active");
    
})
dropdown.addEventListener("mouseleave", ()=>{
    dropdownMenu.classList.remove("active");
    dropArrow.classList.remove("active");
    // innerShadow.classList.remove("active");
    navbarContainer.classList.remove("active");
    
})

dropdownMenu.addEventListener("mouseenter", ()=>{
    dropArrow.classList.add("active");
    navbarContainer.classList.add("active");
    // innerShadow.classList.add("active");
    console.log("Xurshid");
})
dropdownMenu.addEventListener("mouseleave", ()=>{
    dropArrow.classList.remove("active");
    // innerShadow.classList.remove("active");
    navbarContainer.classList.remove("active");
    console.log("Xurshid");
})

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})






const openLink = document.querySelector("#open-link");
const closeLink = document.querySelector("#close-link");
const insideLinks = document.querySelector("#inside-links");

openLink.addEventListener('click', function() {
    if (insideLinks.style.display === "none" || insideLinks.style.display === "") {
        insideLinks.style.display = "block";
        // language.style.display = "none";
    } else {
        insideLinks.style.display = "none";
        // language.style.display = "block";
    }
});

closeLink.addEventListener('click', function() {
    insideLinks.style.display = "none";
    // language.style.display = "flex";
});


// hamburger.addEventListener('click', function() {
//     if (navBottom.style.display === "none" || navBottom.style.display === "") {
//         navBottom.style.display = "block";
//         navbarTop.style.display = "none";
//         navAddition.style.display = "flex";


//     } else {
//         navBottom.style.display = "none";
//         navAddition.style.display = "flex";
//         navbarTop.style.display = "block";
//     }
// });




// closeNav.addEventListener('click', function() {
//     if (navBottom.style.display === "block" || navBottom.style.display === "") {
//         navBottom.style.display = "none";
//         navbarTop.style.display = "flex";
//         navAddition.style.display = "none";


//     } else {
//         navBottom.style.display = "block";
//         navAddition.style.display = "flex";
//         navbarTop.style.display = "flex";
//     }
// });




    




