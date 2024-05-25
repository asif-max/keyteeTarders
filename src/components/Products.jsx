import React from "react";
import door1 from "../assets/door1.jpeg";
import door2 from "../assets/door2.jpeg";
import door3 from "../assets/door3.jpeg";
import lock1 from "../assets/lock1.jpeg";
import lock2 from "../assets/lock2.jpeg";
import lock3 from "../assets/loxk3.jpeg";
import ply from "../assets/ply.jpeg";
import sr from "../assets/sr.jpg";
import nail from "../assets/nails.jpeg";
const Products = () => {
  return (
    <div className="py-24" id="products">
      <p className="text-4xl font-bold font-jost text-white pl-36 pb-16">Our Products</p>
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll space-x-6">
          <div className="flex w-52 space-x-6">
            <img src={door1} alt="door1" className="rounded-xl" />
            <img src={door2} alt="door2" className="rounded-xl" />
            <img src={door3} alt="door3" className="rounded-xl" />
            <img src={lock1} alt="lock1" className="rounded-xl" />
            <img src={lock2} alt="lock2" className="rounded-xl" />
            <img src={lock3} alt="lock3" className="rounded-xl" />
            <img src={ply} alt="ply" className="rounded-xl" />
            <img src={sr} alt="sr" className="rounded-xl" />
          </div>
          <div className="flex w-52 space-x-6">
            <img src={door2} alt="door1" className="rounded-xl" />
            <img src={nail} alt="door2" className="rounded-xl" />
            <img src={door3} alt="door3" className="rounded-xl" />
            <img src={lock1} alt="lock1" className="rounded-xl" />
            <img src={lock2} alt="lock2" className="rounded-xl" />
            <img src={lock3} alt="lock3" className="rounded-xl" />
            <img src={ply} alt="ply" className="rounded-xl" />
            <img src={sr} alt="sr" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
