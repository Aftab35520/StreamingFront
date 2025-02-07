"use client";
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "./MovieBannerLinearDesign";

// ✅ Global variable (persists across renders)
let cachedMovies = null;

export default function NewRelesed() {
  const [relatedMovie, setRelatedMovie] = useState(null);

  useEffect(() => {
    if (!cachedMovies) {
      async function FetchRelatedMovie() {
        try {
          const res = await fetch(`https://streamingbackend-1.onrender.com/movies/1`);
          const data = await res.json();
          setRelatedMovie(data);
          cachedMovies = data; // ✅ Store data globally
        } catch (err) {
          setRelatedMovie(false);
        }
      }
      FetchRelatedMovie();
    } else {
      setRelatedMovie(cachedMovies); // ✅ Use cached data
    }
  }, []);

  return (
    <div className="w-full p-2 flex flex-col items-center">
      {relatedMovie && <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold">New Released</p>}

      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {relatedMovie &&
          relatedMovie.slice(0, 15).map((data, index) => <MovieBannerLinearDesign key={index} data={data} />)}
      </div>
    </div>
  );
}
