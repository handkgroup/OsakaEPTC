"use strict";

// Select all elements with the act_clr class
const dropdown = document.querySelector(".dropdown_link");
const bottomHeader = document.querySelector(".bottom_navbar_btns");
const dropdownMenu = document.querySelector(".dropdown_menu");
const navbarContainer = document.querySelector(".navbar_container");
const navbarLinks = document.querySelectorAll(".act_clr");
const burger = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen-menu");
const logoNormal = document.querySelector(".navbar-logo");
const logoActive = document.querySelector(".navbar-logo2");

dropdown.addEventListener("mouseenter", () => {
    // Open the dropdown menu and apply styles
    dropdownMenu.classList.add("active");
    dropdownMenu.classList.add("active");
    navbarContainer.classList.add("active");
    navbarContainer.style.backgroundColor = "#fff"; // Change background color to white
    navbarLinks.forEach((e) => {
        e.style.color = "#000"; // Change text color to black
    });

    // Change logos
    logoNormal.style.display = "none"; // Hide normal logo
    logoActive.style.display = "block"; // Show active logo
});

dropdown.addEventListener("mouseleave", () => {
    // Close the dropdown menu and revert styles
    dropdownMenu.classList.remove("active");
    navbarContainer.classList.remove("active");
    navbarContainer.style.backgroundColor = ""; // Reset background color

    navbarLinks.forEach((e) => {
        e.style.color = "#fff"; // Reset text color to white
    });

    // Change logos back
    logoNormal.style.display = "block"; // Show normal logo
    logoActive.style.display = "none"; // Hide active logo
});

dropdownMenu.addEventListener("mouseenter", () => {
    // Keep the dropdown menu and background active
    navbarContainer.classList.add("active");
    navbarContainer.style.backgroundColor = "#fff"; // Keep background white

    navbarLinks.forEach((e) => {
        e.style.color = "#000"; // Keep text color black
    });

    // Ensure logos remain active
    logoNormal.style.display = "none"; // Hide normal logo
    logoActive.style.display = "block"; // Show active logo
});

dropdownMenu.addEventListener("mouseleave", () => {
    // Revert changes when leaving the dropdown
    dropdownMenu.classList.remove("active");
    navbarContainer.classList.remove("active");
    navbarContainer.style.backgroundColor = ""; // Reset background color

    navbarLinks.forEach((e) => {
        e.style.color = "#fff"; // Reset link color to white
    });

    // Change logos back
    logoNormal.style.display = "block"; // Show normal logo
    logoActive.style.display = "none"; // Hide active logo
});

// Burger menu toggle for mobile
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    bottomHeader.classList.toggle("active");
});














