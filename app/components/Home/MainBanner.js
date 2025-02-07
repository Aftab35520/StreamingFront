"use client";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";

export default function HomeBanner() {
  const router = useRouter();
  const secretKey = "#Aftab35520";
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify({
      name: "Avengers: Endgame (2019)",
      link: "https://player.vidbinge.com/media/tmdb-movie-299534-avengers-endgame",
      language: "english",
      poster:
        "https://media.themoviedb.org/t/p/w94_and_h141_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      genre: "Drama, History",
      description:
        "In Avengers: Endgame, the surviving heroes embark on a mission to undo the destruction caused by Thanos. With high stakes and emotional farewells, they fight to restore balance to the universe. This epic conclusion delivers a powerful end to the Marvel Cinematic Universe's Infinity Saga.",
      releaseDate: "2018-01-25",
      imdbRating: 7.0,
    }),
    secretKey
  ).toString();
  const encodedData = encodeURIComponent(encryptedData);

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] relative">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src="https://images.hdqwalls.com/wallpapers/avengers-end-game-4k-banner-cb.jpg"
          className="w-full h-full object-cover"
          alt="Avengers Endgame Banner"
        />
      </div>

      {/* Text & Buttons */}
      <div className="absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2 text-white w-[90%] sm:max-w-md">
        <h1 className="text-2xl sm:text-4xl font-bold">Avengers: Endgame (2019)</h1>
        <p className="mt-2 text-sm sm:text-lg text-gray-300">
          The Avengers unite to reverse Thanos' destruction and save the universe in this epic conclusion to the Infinity Saga.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3 sm:gap-4">
          <button
            className="px-6 py-2 sm:px-10 sm:py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:scale-105 transition"
            onClick={() => router.push(`/movie/details?data=${encodedData}`)}
          >
            Watch Now
          </button>
          <button className="px-6 py-2 sm:px-10 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:scale-105 transition">
            WishList
          </button>
        </div>
      </div>
    </div>
  );
}
