import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import close from '../../assets/close.png';

interface ModalHeaderPhoneProps {
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalHeaderPhone: React.FC<ModalHeaderPhoneProps> = ({ setIsOpen }) => {
    return (
        <motion.div
            className='w-11/12 fixed top-0 left-0 bg-gray-900 h-screen flex flex-col items-center gap-10 px-8 justify-between py-8'
            initial={{ x: '-100%'}}
            style={{ boxShadow: '2px 0 10px #6600F810' }}
            animate={{ x: 0}}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <div className='flex items-center justify-between gap-4 w-full'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} alt="Logo Lemine Mahjoub" className='w-8 h-8' />
                    <h1 className='text-white text-lg font-semibold'>Lemine <span className='text-[#6600F8]' style={{ textShadow: '0 0 16px #6600F8A1' }}>Mahjoub</span></h1>
                </div>
                <button onClick={() => setIsOpen(false)}><img src={close} alt="close" className='w-6 h-6' /></button>
            </div>
            <div className='flex flex-col items-start justify-start gap-4 w-full'>
                {['Home', 'About', 'Skills', 'Projects'].map((item, index) => ( // TODO: add ID to the page
                    <motion.button
                        key={item}
                        className='text-white text-xl font-light hover:text-[#6600F8] transition-all duration-300'
                        initial={{ opacity: 0, x: '-300%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.17, delay: index * 0.1, ease: 'easeOut' }}
                    >
                        {item}
                    </motion.button>
                ))}
            </div>
            <div className='flex w-full px-4'>
                <motion.button
                    className='text-white text-lg font-light bg-primary w-full py-3 rounded-full hover:bg-primary/50 transition-all duration-300'
                    style={{ filter: 'drop-shadow(0 0 6px #6600F8)' }}
                    initial={{ opacity: 0, y: '100px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.2, ease: 'easeOut' }}
                >
                    Contact
                </motion.button>
            </div>
        </motion.div>
    );
};

