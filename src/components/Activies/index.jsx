import { motion } from 'framer-motion';
import { HackerHTag } from '../HackerTag';

export default () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
      viewport={{ once: true }}
      className='space-y-10 py-20'
    >
      <h2 className='text-center font-inter text-2xl font-semibold uppercase text-white md:text-5xl'>
        <HackerHTag>What we do </HackerHTag>
      </h2>
      <div className='mx-auto w-fit items-center justify-center space-y-16 lg:flex lg:gap-10 lg:space-y-0'>
        <ActivitiesCard name={'Activity 1'} image={''} />
        <ActivitiesCard name={'Activity 2'} image={''} />
      </div>
    </motion.section>
  );
};

const ActivitiesCard = ({ name, image }) => {
  return (
    <div className='group relative flex'>
      <h3 className='absolute top-0 text-center text-4xl text-white'>{name}</h3>
      <img
        src={image}
        alt='Activiy 2'
        className='z-10 h-44 w-80 rounded bg-gray-400 transition-all group-hover:translate-y-12 md:h-60 md:w-[30rem]'
      />
    </div>
  );
};
