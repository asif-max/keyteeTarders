import React from 'react';
import bestwood from '../assets/bestwood.jpg';
import green from '../assets/bestwood 2.png';
import fevicol from '../assets/fevicol.png';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Authorised = () => {
  const [refBestwood, inViewBestwood] = useInView();
  const [refGreenlam, inViewGreenlam] = useInView();
  const [refFevicol, inViewFevicol] = useInView();

  const animationBestwood = useSpring({
    opacity: inViewBestwood ? 1 : 0,
    transform: inViewBestwood ? 'translateY(0)' : 'translateY(50px)',
  });

  const animationGreenlam = useSpring({
    opacity: inViewGreenlam ? 1 : 0,
    transform: inViewGreenlam ? 'translateY(0)' : 'translateY(50px)',
  });

  const animationFevicol = useSpring({
    opacity: inViewFevicol ? 1 : 0,
    transform: inViewFevicol ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <div id='authorised' className=''>
      <div className='md:px-36 px-12 pt-16 w-screen gap-x-[5rem] flex flex-col md:gap-y-4'>
        <p className='font-bold font-jost text-2xl md:text-4xl text-white'>Authorized Dealer</p>
        <animated.div
          ref={refBestwood}
          style={animationBestwood}
          className='flex flex-col-reverse md:flex-row gap-[5px]'
        >
          <img src={bestwood} alt="" className='mt-[2.5rem] md:w-[35rem] w-full md:h-[28rem] h-auto rounded-xl md:mr-16' />
          <div className='font-jost text-white mt-4'>
            <p className='font-bold text-2xl md:text-4xl md:pt-32 pt-4'>BestWood</p>
            <p className='font-bold text-xl md:text-2xl py-4 text-customGreen'>High Density PVC Foam Board</p>
            <p className='md:w-[25rem] w-full md:leading-loose md:text-xl'>Bestwood Colour Boards includes an advanced master-batching process where a special blend of natural PVC compound is dosed on-line with</p>
          </div>
        </animated.div>
      </div>

      <div className='md:px-36 px-12 pt-24 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0'>
        <animated.div
          ref={refGreenlam}
          style={animationGreenlam}
          className='font-jost text-white'
        >
          <p className='font-bold text-2xl md:text-4xl md:pt-32'>Greenlam</p>
          <p className='font-bold text-xl md:text-2xl py-4 text-customGreen'>Plywoods and MDF Boards</p>
          <p className='md:w-[30rem] w-full leading-loose md:text-xl'>Greenlam Industries offers premium surfacing solutions: laminates, veneers, engineered wood flooring, and decorative wall panels, renowned for durability and aesthetics. As authorized partners, we provide access to their premium offerings</p>
        </animated.div>
        <animated.div ref={refGreenlam} style={animationGreenlam} className='font-bold font-jost text-4xl text-white'>
          <img src={green} alt="" className='mt-6 md:w-[35rem] w-full md:h-[29rem] h-auto rounded-xl' />
        </animated.div>
      </div>

      <div className='md:px-36 px-12 pt-16 flex flex-col md:flex-row w-screen gap-x-[5rem] gap-8 md:gap-0'>
        <animated.div ref={refFevicol} style={animationFevicol} className='font-bold font-jost text-4xl text-white'>
          <img src={fevicol} alt="" className='mt-[2.5rem] md:w-[35rem] w-full md:h-[25rem] h-auto rounded-xl' />
        </animated.div>
        <animated.div ref={refFevicol} style={animationFevicol} className='font-jost text-white mt-4 md:mt-0 md:ml-16'>
          <p className='font-bold text-2xl md:text-4xl md:pt-32'>FEVICOL</p>
          <p className='font-bold text-xl md:text-2xl py-4 text-customGreen'>All Range Of FEVICOL Products</p>
          <p className='md:w-[25rem] w-full leading-loose md:text-xl'>Here in KeyTee Traders, we offer a comprehensive range of FEVICOL, multiwoods, locks, doors, and more to cater to all your construction and renovation projects.</p>
        </animated.div>
      </div>
    </div>
  );
};

export default Authorised;
