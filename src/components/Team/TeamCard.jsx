import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { HackerTextTag } from "../HackerTag";


export default ({name,designation, profile_url, twitter, facebook, instagram})=>{
	return (
			<div className="group w-fit">
			<div className="h-64 w-64 relative grid grid-cols-2 grid-rows-2 fill-white rounded overflow-hidden">

				<img src={profile_url} alt="profile" className="bg-white h-full w-full group-hover:scale-50 group-hover:-translate-x-16 group-hover:translate-y-16 transition-all absolute z-10 duration-350"/>
					<SocialIcon Icon={FaXTwitter} link={twitter} />
					<SocialIcon Icon={FaFacebook} link={facebook} />
					<div className="w-32 h-32 "></div>
					<SocialIcon Icon={IoLogoInstagram} link={instagram} />
				</div>
				<div className="group-hover:opacity-100 opacity-0 transition-all py-4">
					<h4 className="text-2xl text-white font-medium"><HackerTextTag>{name}</HackerTextTag></h4>
					<span className="text-sm text-white"><HackerTextTag>{designation}</HackerTextTag></span>
				</div>
			</div>
	)
}


const SocialIcon = ({Icon, link})=>{
	return (
					<div className="w-32 h-32 relative">
						<a href={link} target="_blank">
							<Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 p-5 fill-white rounded transition-all hover:bg-slate-800 " />
						</a>
					</div>
	)
}
