import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from 'react-icons/io';
import { HackerTextTag } from '../HackerTag';

export default ({
  name,
  designation,
  profile_url,
  twitter,
  linkedin,
  instagram,
}) => {
  return (
    <div className='group w-fit'>
      <div className='relative grid h-64 w-64 grid-cols-2 grid-rows-2 overflow-hidden rounded fill-white'>
        <img
          src={profile_url}
          alt='profile'
          className='duration-350 object-cover absolute z-10 h-full w-full bg-white transition-all group-hover:-translate-x-16 group-hover:translate-y-16 group-hover:scale-50'
        />
        <SocialIcon Icon={FaXTwitter} link={twitter} />
        <SocialIcon Icon={FaLinkedin} link={linkedin} />
        <div className='h-32 w-32 '></div>
        <SocialIcon Icon={IoLogoInstagram} link={instagram} />
      </div>
      <div className='py-4 opacity-0 transition-all group-hover:opacity-100'>
        <h4 className='text-2xl font-medium text-white'>
          <HackerTextTag>{name}</HackerTextTag>
        </h4>
        <span className='text-sm text-white'>
          <HackerTextTag>{designation}</HackerTextTag>
        </span>
      </div>
    </div>
  );
};

const SocialIcon = ({ Icon, link }) => {
  return (
    <div className='relative h-32 w-32'>
      <a href={link} target='_blank'>
        <Icon className='absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded fill-white p-5 transition-all hover:bg-slate-800 ' />
      </a>
    </div>
  );
};
