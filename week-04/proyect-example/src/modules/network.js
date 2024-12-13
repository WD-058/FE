export const getAllMovies = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI1YTViZDA1NjE1ZGVkN2MxNmUyMDg3YmIyNDYxOSIsIm5iZiI6MTcwNzU3ODY1Ny43NTYsInN1YiI6IjY1Yzc5NTIxYWFkOWMyMDE2NGI2MTdmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hHyflhUMkH1uHFL0VXJFHzJuYccSr4rUPsF2Bo3vfXg",
      },
    };
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie",
      options
    );
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
