import { motion } from 'framer-motion';
import { HackerHTag } from '../HackerTag';
export default () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
        viewport={{ once: true }}
        className='max-h-full min-h-40'
      >
        <h4 className='text-center text-4xl font-bold uppercase text-white'>
          <HackerHTag>Events</HackerHTag>
        </h4>
        <div className='mx-auto my-40 flex w-fit flex-col gap-5'>
          <div className='flex h-48 gap-5 md:h-64'>
            <p className='w-80 rounded bg-[#515188] transition-transform duration-200 hover:-translate-y-1 hover:ring hover:ring-white md:w-[600px] lg:w-[600px] xl:w-[1000px]'>
              Event 1
            </p>
            <p className='hidden w-96 rounded bg-[#282862] transition-all duration-200 hover:-translate-y-1 lg:block'>
              {' '}
            </p>
          </div>
          <div className='flex h-48 gap-5 md:h-64'>
            <p className='hidden w-96 rounded bg-[#282862] transition-transform duration-200 hover:-translate-y-1 lg:block'>
              {' '}
            </p>
            <p className='w-80 rounded bg-[#515188] transition-transform duration-200 hover:-translate-y-1 hover:ring hover:ring-white md:w-[600px] lg:w-[600px] xl:w-[1000px]'>
              Event 1
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};
