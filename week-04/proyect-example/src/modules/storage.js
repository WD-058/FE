const addToFav = (prod) => {
  const currFav = JSON.parse(localStorage.getItem("favorites")) || [];
  // console.log(currCart);
  currFav.push(prod);
  localStorage.setItem("favorites", JSON.stringify(currFav));
};

export default addToFav;
