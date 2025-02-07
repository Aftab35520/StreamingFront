import Header from "@/app/components/Header/Header";
import MovieCollection from "@/app/components/MovieCollection/Collection";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
       <div className="w-full max-w-[2000px]">
       <Header/>
       <MovieCollection/>
       </div>
    </div>
  );
}
