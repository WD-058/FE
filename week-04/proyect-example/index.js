import { getAllMovies } from "./src/modules/network.js";
import { renderMovieCard } from "./src/modules/ui.js";

const renderApp = async () => {
  const movies = await getAllMovies();
  console.log(movies);
  movies.length > 0 &&
    movies.forEach((movie) => {
      renderMovieCard(movie);
    });
};

renderApp();
