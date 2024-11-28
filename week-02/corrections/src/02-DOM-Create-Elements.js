const body = document.querySelector("body");

// HEADER SECTION
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const links = ["Home", "About", "Contact"];
links.forEach((link) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = link;
  a.style.color = "purple";
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);
body.appendChild(header);

// HERO SECTION
const hero = document.createElement("section"); //<section></section>
hero.classList.add("hero"); //<section class="hero"></section>

const heroContent = document.createElement("div"); //<div></div>

const h1 = document.createElement("h1"); //<h1></h1>
h1.textContent = "Welcome to Our Coffee Shop";

const p = document.createElement("p"); //<p></p>
p.textContent = "Enjoy the best coffee in town.";

const btn = document.createElement("a"); //<button></button>
btn.textContent = "Explore Our Menu";
btn.href = "#";
btn.classList.add("btn");

heroContent.appendChild(h1);
heroContent.appendChild(p);
heroContent.appendChild(btn);
hero.appendChild(heroContent);

body.appendChild(hero);

