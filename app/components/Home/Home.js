import FooterSubscribe from "./Footersubs";
import MainBanner from "./MainBanner";
import NewRelesed from "./NewRelesed";
import TopPicForYou from "./TopPicForYou";

export default function Home() {
  return (
    <div className="w-full">
      <MainBanner/>
      <NewRelesed/>
      <TopPicForYou/>
      {/* <Featured/> */}
      
      <FooterSubscribe/>
    </div>
  )
}
