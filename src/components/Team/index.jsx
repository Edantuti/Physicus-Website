import { HackerHTag } from "../HackerTag"
import TeamCard from "./TeamCard"
import {motion} from "framer-motion"
export default ()=>{
	return	(<>

		<motion.section 
			initial={{opacity:.5, y:50}} 
			whileInView={{opacity:1, y:0, transition:{delay:0.22}}}
			viewport={{once:true}}
			className="min-h-screen max-h-full py-16 mx-auto font-inter antialiased">
			<h2 className="text-center text-white font-inter text-4xl antialiased my-10"><HackerHTag> Team</HackerHTag></h2>
			<div className="md:grid lg:grid-cols-3 grid-cols-2 w-fit mx-auto gap-4">
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			<TeamCard name="Your Name" designation={"Your Designation"}/>
			</div>
		</motion.section>

	</>)
}



