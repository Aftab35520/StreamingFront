"use client";
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "./MovieBannerLinearDesign";

export default function TopPicForYou() {
  const [relatedMovie, setRelatedMovie] = useState(null);
  let MovieName = localStorage.getItem("Movie");
  useEffect(() => {
    let cachedData = localStorage.getItem("RelatedMovies");

    if (cachedData) {
      // ✅ Use cached data if it exists
      setRelatedMovie(JSON.parse(cachedData));
    } else if (MovieName) {
      // ✅ Fetch only if no cached data
      async function FetchRelatedMovie() {
        try {
          const res = await fetch(`https://streamingbackend-1.onrender.com/SimilarMovie/${MovieName}`);
          const data = await res.json();
          setRelatedMovie(data);
          localStorage.setItem("RelatedMovies", JSON.stringify(data)); // ✅ Save data to localStorage
        } catch (err) {
          setRelatedMovie(false);
        }
      }
      FetchRelatedMovie();
    }
  }, []);


  return (
    <div className="w-full p-2 flex flex-col items-center">
      {relatedMovie && <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold">For You</p>}

      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {relatedMovie && relatedMovie.slice(0, 5).map((data, index) => <MovieBannerLinearDesign key={index} data={data} />)}
      </div>

      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {!relatedMovie && MovieName!=null &&
          [...Array(10)].map((_, index) => <MovieBannerLinearDesign key={index} data={{ name: "movie" }} />)}
      </div>
    </div>
  );
}
