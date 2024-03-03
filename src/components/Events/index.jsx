import {motion} from "framer-motion"
import { HackerHTag } from "../HackerTag"
export default ()=>{
  return (
    <>
      <motion.section 
        initial={{opacity:.5, y:100}} 
        whileInView={{opacity:1, y:0, transition:{delay:0.22}}}
        viewport={{once:true}}
        className="max-h-full min-h-40">
        <h4 className="text-center text-4xl text-white uppercase font-bold"><HackerHTag>Events</HackerHTag></h4>
        <div className="my-40 flex flex-col gap-5 mx-auto w-fit">
           <div className="flex gap-5 md:h-64 h-48">
            <p className="hover:ring hover:ring-white bg-[#515188] xl:w-[1000px] lg:w-[600px] md:w-[600px] w-80 rounded transition-transform duration-200 hover:-translate-y-1">Event 1</p>
            <p className="bg-[#282862] w-96 rounded transition-all duration-200 hover:-translate-y-1 hidden lg:block"> </p>
            </div> 
           <div className="flex gap-5 md:h-64 h-48">
            <p className="bg-[#282862] w-96 rounded transition-transform duration-200 hover:-translate-y-1 hidden lg:block"> </p>
            <p className="hover:ring hover:ring-white bg-[#515188] xl:w-[1000px] lg:w-[600px] md:w-[600px] w-80 rounded transition-transform duration-200 hover:-translate-y-1">Event 1</p>
            </div> 
        </div>
      </motion.section>
    </>
  )
}
