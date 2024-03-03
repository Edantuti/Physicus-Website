import { motion } from "framer-motion"
import { HackerHTag } from "../HackerTag"

export default ()=>{
		
	return (
		<motion.section 
			initial={{opacity:0.5, y:100}} 
			whileInView={{opacity:1, y:0, transition:{delay:0.22}}} 
			viewport={{once:true}}
			className="mb-40 mt-20 py-20 text-white antialiased font-inter">

			<h2 className="text-4xl text-center font-medium"><HackerHTag>Past Events</HackerHTag></h2>
			<div className="bg-white md:h-96 h-56 lg:w-[800px] md:w-[600px] w-80 rounded mx-auto my-10 relative overflow-hidden">
				<div className={` text-black absolute grid grid-cols-2 grid-rows-2 p-5 w-full h-full bg-gray-200 backdrop-blur transition-opacity hover:opacity-100 opacity-0`}>
					<h3 className="md:text-3xl text-xl font-semibold">JamShack</h3>
					<div className="text-right">
						<p className="md:text-4xl text-lg">500+ Participants</p>
						<a href="https://jamshack.in" target="_blank">Link Here</a>
					</div>
					<p className="md:text-xl text-sm col-span-2">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
					</p>
				</div>
			</div>	
		</motion.section>
	)
}
