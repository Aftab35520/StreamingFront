"use client";
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "./MovieBannerLinearDesign";

export default function TopPicForYou() {
  const [relatedMovie, setRelatedMovie] = useState(null);
  const [MovieName, setMovieName] = useState(null); // Store movie name in state

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMovie = localStorage.getItem("Movie");
      setMovieName(storedMovie); // Set movie name from localStorage

      let cachedData = localStorage.getItem("RelatedMovies");

      if (cachedData) {
        setRelatedMovie(JSON.parse(cachedData));
      } else if (storedMovie) {
        async function FetchRelatedMovie() {
          try {
            const res = await fetch(`https://streamingbackend-1.onrender.com/SimilarMovie/${storedMovie}`);
            const data = await res.json();
            setRelatedMovie(data);
            localStorage.setItem("RelatedMovies", JSON.stringify(data));
          } catch (err) {
            setRelatedMovie(false);
          }
        }
        FetchRelatedMovie();
      }
    }
  }, []);

  return (
    <div className="w-full p-2 flex flex-col items-center">
      {relatedMovie && <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold">For You</p>}

      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {relatedMovie && relatedMovie.slice(0, 5).map((data, index) => <MovieBannerLinearDesign key={index} data={data} />)}
      </div>

      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {!relatedMovie && MovieName &&
          [...Array(10)].map((_, index) => <MovieBannerLinearDesign key={index} data={{ name: "movie" }} />)}
      </div>
    </div>
  );
}
