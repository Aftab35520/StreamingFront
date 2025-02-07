'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../image/logo.png";
export default function Header() {
  const pathname = usePathname();  
  const [Head,setHead]=useState(false)
  return (
    <header className="w-full max-w-[calc(100%-100px)] flex justify-between mt-4 items-center header">
        <div className="flex items-center ">
            <Image src={Logo} alt="Logo" width={50} height={50} className="w-[70px] h-[30px]" />
            <Link href={"/"} className={` p-3 transition-all duration-300 ease-in-out  ${pathname=="/"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} NotMobHead`}>Home</Link>
            <Link href={"/movie"} className={`p-3 transition-all duration-300 ease-in-out ${pathname=="/movie"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} NotMobHead`}>Movies</Link>
            <Link href={"/series"} className={`p-3 ${pathname=="/series"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} pointer-events-none NotMobHead` }>Series</Link>
            <Link href={"/wishlist"} className={`p-3 ${pathname=="/wishlist"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} pointer-events-none NotMobHead`}>WishList</Link>
        </div>
        <Link href={"/movie/search"}><img src="https://th.bing.com/th/id/OIP.Bso6si4xtedIzIDLgXk2UQHaHa?rs=1&pid=ImgDetMain" className="w-[25px] h-[25px] cursor-pointer NotMobHead"/></Link>
        
          <div className="relative hidden MobileHeader z-20">
            <div className="flex flex-col absolute bg-black right-0 p-9 rounded-xl">
            <p className="text-end cursor-pointer" onClick={()=>setHead(!Head)}>☰</p>
            {
              Head==true?<div className="flex flex-col"><Link href={"/"} className={`p-3 transition-all duration-300 ease-in-out  ${pathname=="/"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''}`}>Home</Link>
              <Link href={"/movie"} className={`p-3 transition-all duration-300 ease-in-out ${pathname=="/movie"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''}`}>Movies</Link>
              <Link href={"/series"} className={`p-3 ${pathname=="/series"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} pointer-events-none`}>Series</Link>
              <Link href={"/wishlist"} className={`p-3 ${pathname=="/wishlist"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} pointer-events-none`}>WishList</Link>
              <Link href={"/movie/search"} className={`p-3 ${pathname=="/wishlist"?"bg-gradient-to-r from-red-500 to-red-700 rounded-md ":''} `}>Search Movie</Link></div>:<div></div>
            }
            </div>
          </div>
       
    </header>
  )
}
