import { getAllMovies } from "./src/modules/network.js";
import { renderMovieCard } from "./src/modules/ui.js";

const renderApp = async () => {
  const movies = await getAllMovies();
  movies.length > 0 &&
    movies.forEach((movie) => {
      console.log(movie);
      renderMovieCard(movie);
    });
};

renderApp();
