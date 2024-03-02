import P from "../../assets/P.svg"
import H from "../../assets/H.svg"
import Y from "../../assets/Y.svg"
import S from "../../assets/S.svg"
import I from "../../assets/I.svg"
import C from "../../assets/C.svg"
import U from "../../assets/U.svg"
import { motion} from "framer-motion"
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

const item_reverse= {
  hidden: { y: -50, opacity: 0 },
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
      <header className="bg-background py-5 px-10 flex items-baseline gap-5 font-inter">
        <img src="" alt="LOGO" className="bg-white" width={50} height={50} />
        <h1 className="text-2xl text-white">Physicus Club</h1>
      </header>
      <section className="text-white flex font-inter pb-80 pt-60 items-center justify-center">
        <div className="w-fit mx-auto">
          <motion.div variants={container} initial="hidden" animate="visible" className="flex items-start gap-5 w-fit">
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}} drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item} src={P}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item_reverse} src={H}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item}  src={Y}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item_reverse}  src={S}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item}  src={I}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item_reverse}  src={C}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item}  src={U}/>
            <motion.img whileHover={{y:-10, transition:{duration:0.2}}}  drag dragElastic={1} dragTransition={{bounceStiffness:200,bounceDamping:20}} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}   variants={item_reverse}  src={S}/>
          </motion.div>
          <motion.div variants={para} initial="hidden" animate="visible" className="font-bold flex justify-between">
            <p className="mx-3">Catchy line</p>
            <p className="uppercase text-2xl">Club</p>
          </motion.div>
        </div>
        <div>
        </div>
      </section>
    </>
  )
}
