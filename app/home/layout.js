"use client"
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import 'animate.css';
import { useRouter } from "next/navigation";
import { MdOutlineMarkEmailRead } from "react-icons/md";



export default function RootLayout({ children }) {
    const [menuItems, setMenuItems] = useState(false);
    const router = useRouter();
    const location = router.pathname
  const NavArr = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Project",
      to: "/project",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];
  return (
    <div>
        <div className="w-[100%] h-full bg-gray-300 z-40 relative flex flex-row justify-between px-3 py-3">
      <div className="text-xl font-semibold items-center text-purple-500 w-[20] md:w-[20%] flex flex-row">
        PortFolio
      </div>

      <div className="flex flex-row px-3  justify-between px-25 hidden md:flex w-[40%] items-center ">
        {NavArr.map((item, id) => (
          <div key={id} className="flex flex-row px-3 py-1 cursor-pointer text-black font-semibold">
            <h2>{item.title}</h2>
          </div>
        ))}
        </div>
<div  className="flex flex-row flex md:hidden">
<div className="flex flex-row flex md:hidden pr-2" onClick={()=>{
    setMenuItems((p) => (!p));
}}>
    <IoMenu className="text-3xl"/>
</div>

</div>
        <div className="w-[20%] hidden md:flex justify-end flex flex-row ">
          <button className="bg-gray-100  px-3 py-2 text-black">
            LETS TALK!
          </button>
        </div>
        
    </div>
    {menuItems == true ? <div className="flex flex-col -mt-2 rounded-xl pb-3 pr-2 absolute bg-gray-300 w-full items-end z-10 animate__animated animate__slideInDown transition-all">
{NavArr.map((item, id) => (
          <div key={id} className="flex flex-row px-3 py-1 cursor-pointer  font-semibold" sx={{color: location == item.to ? "#99ddff" : "#fff",}}>
            <h2>{item.title}</h2>
          </div>
        ))}
</div> :<div></div>}
    {children}
    <div className="flex flex-row bg-black w-full justify-center h-24 content-end items-end py-10 px-3 ">
<div className="flex flex-row gap-1">
<div>
    <MdOutlineMarkEmailRead className="text-white"/>
</div>
<div className="flex flex-row text-white text-xs items-end content-end"> ragul1442@gmail.com
</div>

</div>
    </div>
    </div>
  );
}
