import React from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';

const Works = () => {
  return (
    <div id='works' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest works</h2>
      <p className='flex justify-center items-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Explore my latest works and projects in this section!
        <a 
          href='https://github.com/an1604' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='flex items-center gap-2 ml-2'
        >
          <span>Click the Icon</span>
          <Image 
            src={assets.github} 
            alt='GitHub' 
            width={40} 
            height={40} 
            className='cursor-pointer hover:opacity-80' 
          />
        </a>
      </p>

        <div>
            {workData.map((prject, index)=>(
                <div key={index} style={{backgroundImage: `url(${prject.bgImage})`}}>
                    
                </div>
            ))}
        </div>

    </div>
  );
};

export default Works;
