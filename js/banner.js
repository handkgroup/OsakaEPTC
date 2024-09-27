"use strict";

const notification = document.querySelector("banner-wrapper-right");
const closeBtn = document.querySelector("close-btn");

// Function to show the notification
function showNotification() {
    notification.style.display = "block"; // Show the notification
}

// Function to hide the notification
function hideNotification() {
    notification.style.display = "none"; // Hide the notification
}

// Close button click event
closeBtn.addEventListener("click", hideNotification);

// Show the notification after 2 seconds (2000 milliseconds)
setTimeout(showNotification, 2000);

// Reappear notification every 5 seconds (5000 milliseconds)
setInterval(() => {
    if (notification.style.display === "none") {
        showNotification();
    }
}, 5000);