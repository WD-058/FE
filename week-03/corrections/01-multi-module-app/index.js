import { getAllProducts } from './modules/network.js';
import { renderProductCard } from './modules/ui.js';

const products = await getAllProducts();

products.forEach((product) => {
    renderProductCard(product);
});
