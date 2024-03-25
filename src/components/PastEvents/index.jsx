import { motion } from 'framer-motion';
import { HackerHTag } from '../HackerTag';

export default () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
      viewport={{ once: true }}
      className='mb-40 mt-20 py-20 font-inter text-white antialiased'
    >
      <h2 className='text-center text-4xl font-medium'>
        <HackerHTag>Past Events</HackerHTag>
      </h2>
      <div className='relative mx-auto my-10 h-56 w-80 overflow-hidden rounded bg-white md:h-96 md:w-[600px] lg:w-[800px]'>
        <div
          className={` absolute grid h-full w-full grid-cols-2 grid-rows-2 bg-gray-200 p-5 text-black opacity-0 backdrop-blur transition-opacity hover:opacity-100`}
        >
          <h3 className='text-xl font-semibold md:text-3xl'>JamShack</h3>
          <div className='text-right'>
            <p className='text-lg md:text-4xl'>500+ Participants</p>
            <a href='https://jamshack.in' target='_blank'>
              Link Here
            </a>
          </div>
          <p className='col-span-2 text-sm md:text-xl'>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
