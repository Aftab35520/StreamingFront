import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
       <div className="w-full max-w-[2000px]">
       <Header />
       <Home/>
       </div>
    </div>
  );
}
