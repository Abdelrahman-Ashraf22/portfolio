import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Card({ text, index, desc, icons }) {
  return (
    <motion.div
      className="card w-[40vw] h-[22vh] flex items-start justify-center flex-col border-[1px] border-solid border-[#ccc] rounded-[8px] pt-0 px-[10px] pb-[10px] my-[20px] mx-[0] shadow-1xl bg-[#131b28]  [@media(max-width:1199px)]:w-[45vw]  [@media(max-width:992px)]:w-[100%]  [@media(max-width:992px)]:h-[auto]  [@media(max-width:576px)]:p-[10px] [@media(max-width:576px)]:text-center"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <p className="card-text text-[28px] text-[#fff] flex items-center p-[2px]  [@media(max-width:768px)]:text-[24px]  [@media(max-width:576px)]:text-[20px] [@media(max-width:576px)]:my-[2px] [@media(max-width:576px)]:mx-[auto]">
        <span className="p-[5px] text-[#3462cd] my-0 mr-[10px] ml-0">
          {icons}
        </span>
        {text}
      </p>
      <p className="card-desc bold text-[14px] m-[2px] p-[5px]  [@media(max-width:768px)]:text-[12px]  [@media(max-width:576px)]:text-[10px] ">
        {desc}
      </p>
    </motion.div>
  );
}

export default Card;
