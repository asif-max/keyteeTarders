import React from 'react';
import reviews from './data.js';

const Reviews = () => {
  return (
    <div className="reviews-container py-12 font-jost" id='reviews'>
      <p className="text-4xl font-bold font-jost text-white pl-36 pb-16">Reviews</p>
      <div className="scroll-container flex overflow-x-hidden relative">
        <div className="scroll-content flex gap-x-5 animate-scroll">
          {reviews.concat(reviews).map((item, index) => (
            <div key={index} className="bg-white h-[320px] text-black rounded-xl w-[208px] inline-block mx-2">
              <div className="h-44 w-full flex justify-center items-center rounded-t-xl">
                <img src={item.image} alt={item.name} className="h-36 w-36 rounded-full shadow-xl" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-2">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-sm text-center px-2">{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
