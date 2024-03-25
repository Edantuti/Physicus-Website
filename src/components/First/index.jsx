import P from '../../assets/P.svg';
import H from '../../assets/H.svg';
import Y from '../../assets/Y.svg';
import S from '../../assets/S.svg';
import I from '../../assets/I.svg';
import C from '../../assets/C.svg';
import U from '../../assets/U.svg';
import { motion } from 'framer-motion';
import { HackerTextTag } from '../HackerTag';
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.085,
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const para = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 2,
    },
  },
};
export default () => {
  return (
    <>
      <header className='flex items-baseline gap-2 px-2 py-5 font-inter md:gap-5 md:px-10'>
        <img src='' alt='LOGO' className='h-12 w-12 bg-white' />
        <h1 className='text-lg font-semibold text-white md:text-2xl'>
          <HackerTextTag>Phyicus Club</HackerTextTag>
        </h1>
      </header>
      <section className='flex min-h-[30rem] items-center justify-center font-inter text-white md:pb-80 md:pt-60'>
        <div className='mx-auto w-fit md:px-10'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='flex w-fit items-start gap-5'
          >
            <HeroImage image_url={P} />
            <HeroImage image_url={H} />
            <HeroImage image_url={Y} />
            <HeroImage image_url={S} />
            <HeroImage image_url={I} />
            <HeroImage image_url={C} />
            <HeroImage image_url={U} />
            <HeroImage image_url={S} />
          </motion.div>
          <motion.div
            variants={para}
            initial='hidden'
            animate='visible'
            className='flex justify-between font-bold'
          >
            <p className='mx-3'>Catchy line</p>
            <p className='text-lg uppercase md:text-2xl'>Club</p>
          </motion.div>
        </div>
        <div></div>
      </section>
    </>
  );
};

const HeroImage = ({ image_url }) => {
  return (
    <motion.img
      className='h-6 w-6 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-40 xl:w-40'
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      drag
      dragElastic={1}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      variants={item}
      src={image_url}
    />
  );
};
