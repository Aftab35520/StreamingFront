

async function FetchMovies() {
  const response = await fetch("http://127.0.0.1:5000/movies/2", {
    method: "GET",
  });
  const data = await response.json(); // Parse JSON response
  return data;
}


async function getMovies() {
  const movies = await FetchMovies();
  return movies
}

export const Movise=getMovies()
