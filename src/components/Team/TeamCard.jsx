
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
/*export default ({name, designation, twitter, facebook, instagram})=>{
	const [hidden,setHidden] = useState(true);

return(			<div className={` w-64 h-80 space-y-5 flex flex-col items-center justify-center rounded duration-200 ${!hidden && "bg-gray-800 py-8 px-12"}`} onMouseEnter={()=>setHidden(false)} onMouseLeave={()=>setHidden(true)}>
				<img src="" alt="" className="bg-white w-20 h-20 rounded-full" />
				<h3 className="text-lg text-white">{name}</h3>
				<p className="text-md text-white">{designation}</p>
				{!hidden && <div className="flex gap-5">
					<FaXTwitter className="fill-black bg-white p-1.5 w-8 h-8 rounded shadow transition-all hover:shadow-xl"/>
					<FaFacebook className="fill-black bg-white p-1.5 w-8 h-8 rounded shadow transition-all hover:shadow-xl"/>
					<IoLogoInstagram className="fill-black bg-white p-1 w-8 h-8 rounded shadow  transition-all hover:shadow-xl"/>
				</div>}
			</div>	
	)
} */


export default ({name,designation, profile_url, twitter, facebook, instagram})=>{
	return (
		<div className="flex flex-col items-center group font-inter font-medium antialiased w-40 space-y-5">

				<img src="" alt="" className="bg-white w-20 h-20 rounded-full" />
			<div className={`w-full bg-slate-800 text-white text-center p-2 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100`}>
				
				<h3 className="text-xl">{name}</h3>
				<p className="text-sm">{designation}</p>
			</div>
		<div className={`p-1 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex gap-5`}>

					<FaXTwitter className="shadow-yellow-400 shadow-md hover:-translate-y-1 fill-black bg-white p-1.5 w-8 h-8 rounded transition-all"/>
					<FaFacebook className="shadow-yellow-400 shadow-md hover:-translate-y-1 fill-black bg-white p-1.5 w-8 h-8 rounded transition-all"/>
					<IoLogoInstagram className="shadow-yellow-400 shadow-md hover:-translate-y-1 fill-black bg-white p-1 w-8 h-8 rounded transition-all"/>
			</div>	
		</div>
	)
}
