import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-16" id="contact">
      <p className="text-4xl font-bold font-jost text-white pl-36 pt-6 pb-16">
        Contact Us
      </p>

      <div className="flex justify-around items-center">
        <div className="leading-relaxed text-xl">
          <div className="flex gap-x-6 items-start">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-2"
            >
              <FontAwesomeIcon icon={faMap} className="text-customGreen" />
            </motion.div>
            <p className="text-white w-48">
              KeyTee Traders, Near Christian church Mukkam,673602
            </p>
          </div>
          <div className="flex gap-x-6 items-start mt-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-2"
            >
              <FontAwesomeIcon icon={faPhone} className="text-customGreen" />
            </motion.div>
            <p className="text-white w-48 cursor-pointer">+91 8547296707</p>
          </div>
        </div>
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.13720516656!2d75.98987477537696!3d11.324680588859437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6422aa6b10d5b%3A0xcb5991180968dab9!2sKeytee%20Traders!5e0!3m2!1sen!2sin!4v1716402994306!5m2!1sen!2sin"
          width="600"
          height="370"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.iframe>
      </div>
    </div>
  );
};

export default Contact;
