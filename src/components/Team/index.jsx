import { HackerHTag } from '../HackerTag';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';
export default () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
        viewport={{ once: true }}
        className='mx-auto max-h-full min-h-screen py-16 font-inter antialiased'
      >
        <h2 className='my-10 text-center font-inter text-4xl text-white antialiased'>
          <HackerHTag> Team</HackerHTag>
        </h2>
        <div className='mx-auto w-fit grid-cols-2 gap-4 md:grid lg:grid-cols-3'>
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
        </div>
      </motion.section>
    </>
  );
};
