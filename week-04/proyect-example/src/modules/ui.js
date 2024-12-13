import addToFav from "./storage.js";

const renderMovieCard = (prod) => {
  const moviesContainer = document.querySelector("#products-container");
  const card = document.createElement("div");
  card.id = prod.id;
  card.className = "card bg-base-100 shadow-xl";

  const figure = document.createElement("figure");
  figure.className = "h-1/2";

  const img = document.createElement("img");
  img.className = "w-full h-full";
  img.src = prod.image;
  img.alt = prod.title;
  figure.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.textContent = prod.title;
  cardBody.appendChild(cardTitle);

  const price = document.createElement("p");
  price.textContent = prod.price;
  cardBody.appendChild(price);

  const cardActions = document.createElement("div");
  cardActions.className = "card-actions justify-end";

  const addBtn = document.createElement("button");
  addBtn.className = "btn btnprimary";
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener("click", () => addToFav(prod));
  cardActions.appendChild(addBtn);

  card.appendChild(figure);
  card.appendChild(cardBody);
  card.appendChild(cardActions);

  moviesContainer.appendChild(card);
  
};

export { renderMovieCard };
