import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
export default ()=>{
	return (
		<section className="text-white relative font-inter antialiased font-medium overflow-hidden h-[1080px]">
			<div className="mx-auto flex gap-5 -translate-y-20 w-fit">
				<div className="space-y-5 translate-y-20">
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
				</div>
				<div className="space-y-5 -translate-y-20">
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
				</div>
				<div className="space-y-5 translate-y-20">
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
				</div>
				<div className="space-y-5 -translate-y-20">
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
					<div className="h-96 w-72 bg-white rounded"></div>
				</div>
			</div>
			<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-30 rounded shadow-lg w-80 p-6 space-y-6 backdrop-blur border-sky-200 border-2">
				<h2 className="text-center text-4xl">#Hashtags</h2>
				<div className="flex mx-auto gap-5 items-center w-fit">
					<FaXTwitter className="fill-black bg-white p-1.5 w-8 h-8 hover:-translate-y-1 rounded shadow transition-all hover:shadow-xl"/>
					<FaFacebook className="fill-black bg-white p-1.5 w-8 h-8 hover:-translate-y-1 rounded shadow transition-all hover:shadow-xl"/>
					<IoLogoInstagram className="fill-black bg-white p-1 w-8 h-8 hover:-translate-y-1 rounded shadow  transition-all hover:shadow-xl"/>
				</div>
			</div>	
		</section>
	)
}
