import React from 'react';
import logoImg from '../assets/logo.png'
import { format } from "date-fns";
const Header = () => {
  return (
    <div className='flex gap-2 mt-3 justify-center flex-col items-center'>
      <img src={logoImg} alt="" />
      <p className='text-base-300 text-lg font-semibold'>Journalism Without Fear or Favour</p>
      <p className='font-semibold text-base-300 text-xl'>{format(new Date(), "EEEE , MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;