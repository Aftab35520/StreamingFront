'use client'
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "./MovieBannerLinearDesign";
export default function TopPicForYou() {
    const [relatedMovie,setRelatedMovie]=useState(false)
  useEffect(()=>{
      let MovieName=localStorage.getItem("Movie")
      if(MovieName){
        async function FetchRelatedMovie() {
          await fetch(`https://streamingbackend-1.onrender.com/SimilarMovie/${MovieName}`,{
            method:"GET"
          })
          .then(async res=>await res.json())
          .then(data=>setRelatedMovie(data))
          .catch(err=>setRelatedMovie(false))
        }
        FetchRelatedMovie()
      }
    },[])
  
  return (
    <div className="w-full p-2 flex flex-col items-center">
            {
              relatedMovie&&(
                <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold">For You</p>
              )
            }
            <div className="w-full grid grid-cols-5 ResponsiveMovies">
                {
                    relatedMovie &&(
                      relatedMovie.slice(0,4).map((data)=><MovieBannerLinearDesign data={data}/>)
                    )
                }
    
            </div>
        </div>
  )
}
