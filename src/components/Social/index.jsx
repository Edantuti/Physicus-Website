import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import { HackerHTag } from "../HackerTag";
export default ()=>{
	return (
		
		<motion.section
			initial={{opacity:.5, y:100}} 
			whileInView={{opacity:1, y:0, transition:{delay:0.22}}}
			viewport={{once:true}}
			className="text-white relative font-inter antialiased font-medium overflow-hidden md:h-[1080px] h-[400px] mx-auto">
			<div className="mx-auto flex md:gap-5 gap-2 -translate-y-20 w-fit">
				<div className="md:space-y-5 space-y-2 translate-y-20">
					<SocialImage />
					<SocialImage />
					<SocialImage />
					<SocialImage />
				</div>
				<div className="md:space-y-5 space-y-2 translate-y-30">
					<SocialImage />
					<SocialImage />
					<SocialImage />
					<SocialImage />
				</div>
				<div className="md:space-y-5 space-y-2 translate-y-20">
					<SocialImage />
					<SocialImage />
					<SocialImage />
					<SocialImage />
				</div>
				<div className="md:space-y-5 space-y-2 -translate-y-20 md:block hidden">
					<SocialImage />
					<SocialImage />
					<SocialImage />
					<SocialImage />
				</div>
			</div>
				<SocialCard />
		</motion.section>
	)
}

const SocialImage = ()=>{
	return (
		<div className="md:h-96 md:w-72 h-32 w-28 bg-white rounded"></div>
	)
}

const SocialCard = ()=>{
	return (
					<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-30 rounded shadow-lg w-80 p-6 space-y-6 backdrop-blur border-sky-200 border-2">
				<h2 className="text-center text-4xl"><HackerHTag>#Hashtags</HackerHTag></h2>
				<div className="flex mx-auto gap-5 items-center w-fit">
					<FaXTwitter className="fill-black bg-white p-1.5 w-8 h-8 hover:-translate-y-1 rounded shadow transition-all hover:shadow-xl"/>
					<FaFacebook className="fill-black bg-white p-1.5 w-8 h-8 hover:-translate-y-1 rounded shadow transition-all hover:shadow-xl"/>
					<IoLogoInstagram className="fill-black bg-white p-1 w-8 h-8 hover:-translate-y-1 rounded shadow  transition-all hover:shadow-xl"/>
				</div>
			</div>	
	)
}
