import React from 'react';
import abouts from '../assets/bed1.jpeg';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Authorised from './Authorised';

const About = () => {
  const [refText, inViewText] = useInView();
  const [refImage, inViewImage] = useInView();

  const animationText = useSpring({
    opacity: inViewText ? 1 : 0,
    transform: inViewText ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const animationImage = useSpring({
    opacity: inViewImage ? 1 : 0,
    transform: inViewImage ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <div id="about" className='md:px-20 p-12 sm:flex-col-reverse h-full md:flex md:flex-row justify-around md:py-32 align-middle'>
      <animated.div ref={refText} style={animationText} className='font-jost text-white pt-10 md:w-6/12'>
        <p className='font-bold text-2xl md:text-4xl pb-10'>About Us</p>
        <p className='md:leading-loose text-xl'>
          Keytee Traders is your one-stop shop for all your building needs in Mukkam, Kerala. We offer a comprehensive selection of high-quality plywoods, multiwoods, locks, doors, and more to cater to all your construction and renovation projects. Whether you're a homeowner tackling a weekend project or a contractor working on a large-scale development, we have the materials you need to get the job done right. As authorized dealers of leading brands like BestWood and GreenPly, we guarantee superior quality and trusted performance.
        </p>
      </animated.div>
      <animated.img ref={refImage} style={animationImage} src={abouts} alt="" className='w-96 h-96 rounded-xl opacity-80 mt-10' />
    </div>
  );
};

export default About;
