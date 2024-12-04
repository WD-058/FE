const addToCart = (prod) => {
    const currCart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log(currCart);
    currCart.push(prod);
    localStorage.setItem('cart', JSON.stringify(currCart));
};

export default addToCart;
