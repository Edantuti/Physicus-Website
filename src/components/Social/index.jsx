import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';
import { motion } from 'framer-motion';
import { HackerHTag } from '../HackerTag';
export default () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
      viewport={{ once: true }}
      className='relative mx-auto h-[350px] overflow-hidden font-inter font-medium text-white antialiased md:h-[600px] lg:h-[1080px]'
    >
      <div className='mx-auto flex w-fit -translate-y-20 gap-2 md:gap-5'>
        <div className='translate-y-20 space-y-2 md:space-y-5'>
          <SocialImage />
          <SocialImage />
          <SocialImage />
          <SocialImage />
        </div>
        <div className='translate-y-30 space-y-2 md:space-y-5'>
          <SocialImage />
          <SocialImage />
          <SocialImage />
          <SocialImage />
        </div>
        <div className='translate-y-20 space-y-2 md:space-y-5'>
          <SocialImage />
          <SocialImage />
          <SocialImage />
          <SocialImage />
        </div>
        <div className='hidden -translate-y-20 space-y-2 md:block md:space-y-5'>
          <SocialImage />
          <SocialImage />
          <SocialImage />
          <SocialImage />
        </div>
      </div>
      <SocialCard />
    </motion.section>
  );
};

const SocialImage = () => {
  return (
    <div className='h-32 w-28 rounded bg-white md:h-48 md:w-36 lg:h-96 lg:w-60 xl:h-96 xl:w-72'></div>
  );
};

const SocialCard = () => {
  return (
    <div className='absolute left-[50%] top-[50%] w-80 -translate-x-1/2 -translate-y-1/2 space-y-6 rounded border-2 border-sky-200 bg-gray-500 bg-opacity-30 p-6 shadow-lg backdrop-blur'>
      <h2 className='text-center text-4xl'>
        <HackerHTag>#Hashtags</HackerHTag>
      </h2>
      <div className='mx-auto flex w-fit items-center gap-5'>
        <FaXTwitter className='h-8 w-8 rounded bg-white fill-black p-1.5 shadow transition-all hover:-translate-y-1 hover:shadow-xl' />
        <FaFacebook className='h-8 w-8 rounded bg-white fill-black p-1.5 shadow transition-all hover:-translate-y-1 hover:shadow-xl' />
        <IoLogoInstagram className='h-8 w-8 rounded bg-white fill-black p-1 shadow transition-all  hover:-translate-y-1 hover:shadow-xl' />
      </div>
    </div>
  );
};
