import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { ModalHeaderPhone } from './ModalHeaderPhone';
import { AnimatePresence } from 'framer-motion';
import menu from '../../assets/menu.png';

export const HeaderPhone: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-full flex py-10 lg:hidden px-16'>
      <div className='flex items-center justify-between gap-8 w-full'>
        <img src={logo} alt="Logo Lemine Mahjoub" className='w-12 h-12'  style={{ filter: 'drop-shadow(0 0 6px #6600F8)' }}/>
        <button className='w-fit h-fit drop-shadow-lg' style={{ filter: 'drop-shadow(0 0 6px #FFFFFF)' }} onClick={() => setIsOpen(true)}>
            <img src={menu} alt="Menu" className='h-10 w-auto' />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <ModalHeaderPhone setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header>
  );
};
