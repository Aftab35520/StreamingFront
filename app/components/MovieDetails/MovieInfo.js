'use client'
import CryptoJS from "crypto-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "../Home/MovieBannerLinearDesign";
const MovieDetail = ({params}) => {
  const [relatedMovie,setRelatedMovie]=useState([])
  const searchParams = useSearchParams();
  const encryptedData = searchParams.get("data");  // Get the encrypted data from the query parameter
  const secretKey = "#Aftab35520";
  let decryptedData = null;

  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(decodeURIComponent(encryptedData), secretKey);
      decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));  // Decrypt and parse the data
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  }

  useEffect(()=>{
    let MovieName=localStorage.getItem("Movie")
    async function FetchRelatedMovie() {
      await fetch(`https://streamingbackend-1.onrender.com/SimilarMovie/${MovieName}`,{
        method:"GET"
      })
      .then(async res=>await res.json())
      .then(data=>setRelatedMovie(data))
      .catch(err=>setRelatedMovie([]))
    }
    FetchRelatedMovie()
  },[])


  return (
    <div className="w-full p-0 m-0">
      
      <div className="text-center mb-8 w-full px-4">
        <h2 className="text-4xl font-bold">{decryptedData?.name}</h2>
        <p className="text-lg text-gray-600 mt-2">{decryptedData?.language}</p>
        <p className="text-lg text-gray-600 mt-2">{decryptedData?.genre}</p>
        <p className="text-sm text-gray-500 mt-2">{decryptedData?.releaseDate}</p>
        <p className="text-base mt-4">{decryptedData?.description}</p>
      </div>

      <div className="mb-8 w-full px-4">
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src={decryptedData?.link}
            title={"wawdwdad"}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

        <h3 className="text-2xl font-semibold mb-4 w-[calc(100%-100px)]">Related Movies</h3>
        <div className="w-full grid grid-cols-5 ResponsiveMovies">
             {relatedMovie.map((data) => (
               <MovieBannerLinearDesign data={data} />
             ))}
           </div>
    </div>
  );
};

export default MovieDetail;
