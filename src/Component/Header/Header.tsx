import React from 'react';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className=' w-full  justify-between items-center lg:px-16 xl:px-32 2xl:px-64 py-10 hidden lg:flex'>
      <div className='flex items-center justify-center gap-8'>
        <img src={logo} alt="Logo Lemine Mahjoub" className='w-12 h-12' style={{ filter: 'drop-shadow(0 0 15px #6600F8)' }} />
        <h1 className='text-white text-2xl font-semibold'>Lemine <span className='text-[#6600F8]' style={{ textShadow: '0 0 16px #6600F8A1' }}>Mahjoub</span></h1>
      </div>
      <div className='flex items-center justify-center gap-10'>
        <button className='text-white text-lg font-light hover:text-[#6600F8] transition-all duration-300'>Home</button>
        <button className='text-white text-lg font-light hover:text-[#6600F8] transition-all duration-300'>About</button>
        <button className='text-white text-lg font-light hover:text-[#6600F8] transition-all duration-300'>Skills</button>
        <button className='text-white text-lg font-light hover:text-[#6600F8] transition-all duration-300'>Projects</button>
        <button className='text-white text-lg font-light bg-primary px-6 py-3 rounded-full hover:bg-primary/50 transition-all duration-300' style={{ filter: 'drop-shadow(0 0 6px #6600F8)' }}>Contact</button>
      </div>
    </header>
  );
};
