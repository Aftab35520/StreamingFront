import Header from "@/app/components/Header/Header";
import MovieDetail from "@/app/components/MovieDetails/MovieInfo";

export default async function page(params) {
  let data = await params.params;
  data = data.Moviedata;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[2000px]">
        <Header />
        <MovieDetail url={data} />
      </div>
    </div>
  );
}
