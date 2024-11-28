// Task 1:

const heading = document.querySelector(".hero-content h1");

const navLinks = document.querySelectorAll(".nav-list a");

const btn = document.querySelector(".btn");

const header = document.querySelector(".header");

const heroContent = document.querySelector(".hero-content");

// changing styles of existing elements
header.style.backgroundColor = "#b5651d";

heading.style.fontSize = "3rem";

navLinks.forEach((link) => (link.style.color = "#faf0e6"));


// creating and styling a new element

const newElement = document.createElement("p");
newElement.textContent = "Open daily from 7 AM to 9 PM";
newElement.style.color = "red";
newElement.style.fontSize = "1rem";
heroContent.appendChild(newElement);