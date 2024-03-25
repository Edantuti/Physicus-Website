import { motion } from 'framer-motion';
import { HackerHTag } from '../HackerTag';

export default () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.22 } }}
      viewport={{ once: true }}
      className='mx-4 max-h-full min-h-screen space-y-10 py-56 text-white md:mx-32 md:space-y-20'
    >
      <h2 className='text-center text-4xl md:text-6xl'>
        <HackerHTag>The Club</HackerHTag>
      </h2>
      <p className='text-md text-center md:text-xl'>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
    </motion.section>
  );
};
