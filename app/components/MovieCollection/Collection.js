"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MovieBannerLinearDesign from "../Home/MovieBannerLinearDesign";
export default function MovieCollection() {
  const [Movise,setMovise]=useState([])
  const [sortingOption, setSortingOption] = useState("Trending");
  const pathname = usePathname();
  const [Movie, setMovie] = useState(Movise);
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const [page,setpage]=useState(40)

  const FetchPageMovie=async(button)=>{
    if(button=='prev'){
      if(page>1){
        await fetch(`https://streamingbackend-1.onrender.com/movies/${page-1}`, {
          method: "GET",
        })
        .then(async res=>await res.json())
        .then((data) => {
          if (data.message && data.message === "No movies found") {
            return;
          }
          setMovie(data);
          setMovise(data);
          setpage(page - 1);
        })
        .catch(err=>{setMovie([])
          setMovise([])
          setpage(0)})
      }
    }
    else {
      await fetch(`https://streamingbackend-1.onrender.com/movies/${page+1}`, {
        method: "GET",
      })
      .then(async res=>await res.json())
      .then((data) => {
        if (data.message && data.message === "No movies found") {
  
          return;
        }
        setMovie(data);
        setMovise(data);
        setpage(page + 1);
      })
      .catch(err=>{setMovie([])
        setMovise([])
        setpage(0)})
    }
  }


  useEffect(()=>{
    async function Fetch() {
      await fetch("https://streamingbackend-1.onrender.com/movies/1", {
        method: "GET",
      })
      .then(async res=>await res.json())
      .then(data=>{
        setMovie(data)
        setMovise(data)
      })
    }
    Fetch()
  },[])

 
  const [searchMovieName, setSearchMovie] = useState("");
  const HandleMovieType = (language) => {
    const filteredMovie = Movise.filter(
      (data, idx) => data.language === language
    );
    setMovie(filteredMovie);
  };
  const [Head, setHead] = useState(false);
  const SearchHandle = async(e) => {
    e.preventDefault();
    await fetch(`https://streamingbackend-1.onrender.com/search/${searchMovieName}`)
  .then(response => response.json())
  .then(data => setMovie(data))
  .catch(error => console.error("Error:", error));

  };
  return (
    <div className="w-full py-12 bg-black">
      <div className="flex justify-start items-center ml-10 mb-8 gap-8">
        <select
          value={sortingOption}
          onChange={handleSortingChange}
          className="p-1 border border-gray-300 bg-black rounded-lg text-white NotMobileFilter"
        >
          <option value="Trending">Trending</option>
          <option value="New">New</option>
          <option value="Popular">Popular</option>
        </select>
        <p
          onClick={() => setMovie(Movise)}
          className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer NotMobileFilter"
        >
          All
        </p>
        <p
          onClick={() => HandleMovieType("hindi")}
          className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer NotMobileFilter"
        >
          Bollywood
        </p>
        <p
          onClick={() => HandleMovieType("en")}
          className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer NotMobileFilter"
        >
          Hollywood
        </p>

        <div className="relative  hidden MobileFilter ">
          <div className="flex flex-col  absolute top-0 mt-[-15px] bg-black pr-6 pl-6 pb-4 rounded-lg">
            <button
              className="border-white border p-1 rounded-lg"
              onClick={() => setHead(!Head)}
            >
              Filter_Movie
            </button>
            {Head == true ? (
              <div>
                {" "}
                <p
                  onClick={() => setMovie(Movise)}
                  className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer p-1"
                >
                  All
                </p>
                <p
                  onClick={() => HandleMovieType("hindi")}
                  className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer p-1"
                >
                  Bollywood
                </p>
                <p
                  onClick={() => HandleMovieType("en")}
                  className="font-semibold text-white hover:text-gray-300 transition duration-300 cursor-pointer p-1"
                >
                  Hollywood
                </p>
                <select
                  value={sortingOption}
                  onChange={handleSortingChange}
                  className="p-1 border border-gray-300 bg-black rounded-lg text-white"
                >
                  <option value="Trending">Trending</option>
                  <option value="New">New</option>
                  <option value="Popular">Popular</option>
                </select>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {pathname == "/movie/search" ? (
          <form
            onSubmit={SearchHandle}
            className="ml-auto w-1/2 sm:w-auto sm:pr-6"
          >
            <input
              onChange={(e) => setSearchMovie(e.target.value)}
              type="text"
              className="ml-auto p-1 border border-gray-300 bg-black rounded-lg text-white mr-4"
              placeholder="Search Movie"
            />
          </form>
        ) : (
          <></>
        )}
      </div>
      <div
        className={`w-full grid grid-cols-5 ${
          Movie.length !== 0 ? "hidden" : ""
        }`}
      >
        <p className=" text-center ">No Movie Found</p>
      </div>
      <div className="w-full grid grid-cols-5 ResponsiveMovies">
        {Movie.map((data, idx) => (
          <MovieBannerLinearDesign key={idx} data={data} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="border-2 p-2 rounded-lg m-2" onClick={()=>{FetchPageMovie('prev')}}>Prev</button>
        <button className="border-2 p-2 rounded-lg m-2"onClick={()=>{FetchPageMovie('next')}}>Next</button>
      </div>
    </div>
  );
}
