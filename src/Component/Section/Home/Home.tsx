import React from 'react';
import Profilepicture from '../../../assets/pfp.jpg';
import download from '../../../assets/download.png';
export const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center lg:px-16 xl:px-32 2xl:px-64 pt-24 pb-64'>
        <div className='flex w-full flex-col-reverse xl:flex-row justify-between gap-20'>
            <div className='flex flex-col gap-16 pt-16 w-[40%]'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-primary text-2xl font-medium tracking-widest' style={{ textShadow: '0px 0px 10px #a855f740'}}>Lemine Mahjoub &gt;</h2>
                    <h1 className='text-4xl text-white tracking-wider'><span style={{ textShadow: '0px 0px 10px #ffffff90'}}>Front-End Developer</span><span className='text-[#6600F8] font-semibold' style={{ textShadow: '0px 0px 10px #a855f720'}}> & <br />Software Developer.</span></h1>
                    <p className='text-gray-400 font-light text-sm' style={{ textShadow: '0px 0px 10px #ffffff20'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia excepturi fuga dolorem provident, dicta non sed laboriosam assumenda dolore ex, explicabo sit velit facilis magnam a debitis, quaerat quidem.
                    </p>
                </div>
                <div className='flex gap-8'>
                    <button className='bg-primary px-10 py-3 rounded-full text-gray-300 flex justify-center items-center gap-x-2 outline-none font-medium' style={{ boxShadow: '0px 0px 10px #6600F8', textShadow: '0px 0px 10px #ffffff20'}}>
                        <img src={download} alt="Download Icon" className=' h-4 w-4'/>
                        Download CV
                    </button>
                    <button className='bg-primary px-10 py-3 rounded-full text-gray-300 outline-none font-medium' style={{ boxShadow: '0px 0px 10px #6600F8', textShadow: '0px 0px 10px #ffffff20'}}>
                        Contact Me
                    </button>
                </div>
            </div>
            <div className='w-[32.5%] h-auto '>
                <img src={Profilepicture} alt="Lemine Mahjoub Profile Picture"
                className='h-auto w-full aspect-square rounded-full border-[2px] border-gray-800'
                style={{boxShadow: '0 0 100px #6600F810'}} />
            </div>
        </div>
    </div>
  );
};
