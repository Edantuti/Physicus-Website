
import { motion } from "framer-motion"
import { HackerHTag } from "../HackerHTag"

export default ()=>{
	return (
		<motion.section
			initial={{opacity:.5, y:50}} 
			whileInView={{opacity:1, y:0, transition:{delay:0.22}}}
			viewport={{once:true}}
			className="py-20 space-y-10">
			<h2 className="text-center font-inter md:text-5xl text-2xl text-white font-semibold uppercase"><HackerHTag>What we do </HackerHTag></h2>
			<div className="md:flex md:gap-10 md:space-y-0 space-y-16 items-center justify-center">
				<ActivitiesCard name={"Activity 1"} image={""} />
				<ActivitiesCard name={"Activity 2"} image={""} />
			</div>
		</motion.section>
	)
}


const ActivitiesCard = ({name, image})=>{
	return (
			<div className="flex relative group px-5">
				<h3 className="text-4xl top-0 text-white text-center absolute">{name}</h3>
				<img src={image} alt="Activiy 2" className="bg-gray-400 rounded group-hover:translate-y-12 transition-all  md:w-[30rem] z-10  md:h-60 h-44 w-96" />
			</div>
	)
}
