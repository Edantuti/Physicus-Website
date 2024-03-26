import { HackerHTag } from '../HackerTag';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';
import Pankaj from "../../assets/pankaj.jpg"
import rikdas from "../../assets/rik das.jpg"
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
          <TeamCard name='Rik Das Gupta' designation={'President'} profile_url={rikdas} twitter={""} linkedin={"https://www.linkedin.com/in/rik-dasgupta-a66468276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} instagram={"https://www.instagram.com/rikthexav?igsh=MXZzd3M4eGpocjNpbQ=="} />
          <TeamCard name='Pankaj Kumar Das' designation={'Vice-President'} profile_url={Pankaj} twitter={"https://x.com/Pkd019?t=7nX3tuR-1NJhSXRs5vEqPw&s=09"} linkedin={"https://www.linkedin.com/in/pkd019?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} instagram={""}/>
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
          <TeamCard name='Your Name' designation={'Your Designation'} />
        </div>
      </motion.section>
    </>
  );
};
