import React from 'react';
import { useSpring, animated } from 'react-spring';
import head from '../assets/headimg.jpeg';
import Navbar from './Navbar';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  const imageFadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.4 },
    config: { duration: 2000 }
  });

  return (
    <div className="relative w-screen" id='home'>
      <Navbar />
      <div className="relative">
        <animated.img src={head} alt="Header" style={imageFadeIn} className="w-screen h-screen" />
        <div className="absolute inset-0 flex items-center justify-center">
          <animated.p style={fadeIn} className="text-7xl font-bold font-inria text-white w-1/2 text-center">
            We Do Makeup For Your House
          </animated.p>
        </div>
      </div>
    </div>
  );
}

export default Home;

