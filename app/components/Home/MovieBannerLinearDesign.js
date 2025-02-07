"use client";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";
export default function MovieBannerLinearDesign({ data }) {
  const router = useRouter();
  const secretKey = "#Aftab35520";
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  const encodedData = encodeURIComponent(encryptedData);
  return (
    <div
      className="  h-[450px] w-[300px] m-4 MovieLogoResp"
      onClick={() => {router.push(`/movie/details?data=${encodedData}`);localStorage.setItem("Movie",data.name);window.location.assign(`/movie/details?data=${encodedData}`)}}
    >
      <img src={data?.poster} className={`w-full h-[80%] ${data.name=='movie'?"SkeltonAnim":''}`} />

      <p>{data?.name}</p>
      <p className="font-light text-xs">{data?.language}</p>
    </div>
  );
}
