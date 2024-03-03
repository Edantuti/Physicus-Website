import P from "../../assets/P.svg"
import H from "../../assets/H.svg"
import Y from "../../assets/Y.svg"
import S from "../../assets/S.svg"
import I from "../../assets/I.svg"
import C from "../../assets/C.svg"
import U from "../../assets/U.svg"
import {motion} from "framer-motion"
import { HackerTextTag } from "../HackerTag"
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.085
    }
  }
};

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const para = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren:2,
    }
  }
};
export default () =>{
  return (
    <>
      <header className="py-5 md:px-10 px-2 flex items-baseline md:gap-5 gap-2 font-inter">
        <img src="" alt="LOGO" className="bg-white w-12 h-12"/>
        <h1 className="md:text-2xl text-lg text-white font-semibold"><HackerTextTag>Phyicus Club</HackerTextTag></h1>
      </header>
      <section className="text-white flex font-inter md:pb-80 md:pt-60 min-h-[30rem] items-center justify-center">
        <div className="w-fit mx-auto md:px-10">
          <motion.div variants={container} initial="hidden" animate="visible" className="flex items-start gap-5 w-fit">
						<HeroImage image_url={P}/>
						<HeroImage image_url={H}/>
						<HeroImage image_url={Y}/>
						<HeroImage image_url={S}/>
						<HeroImage image_url={I}/>
						<HeroImage image_url={C}/>
						<HeroImage image_url={U}/>
						<HeroImage image_url={S}/>
          </motion.div>
          <motion.div variants={para} initial="hidden" animate="visible" className="font-bold flex justify-between">
            <p className="mx-3">Catchy line</p>
            <p className="uppercase md:text-2xl text-lg">Club</p>
          </motion.div>
        </div>
        <div>
        </div>
      </section>
    </>
  )
}


const HeroImage = ({image_url})=>{
  return (
		<motion.img 
			className="xl:w-40 xl:h-40 lg:w-28 lg:h-28 md:w-20 md:h-20 h-6 w-6"
			whileHover={{y: -10, transition:{duration:0.2}}} 
			drag 
			dragElastic={1} 
			dragTransition={{bounceStiffness:200,bounceDamping:20}} 
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   
			variants={item} 
			src={image_url}/>)

}


