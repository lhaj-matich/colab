"use client";

import { testimonials } from "@/lib/constants";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  content: string;
  image: StaticImageData;
  name: string;
  username: string;
}

const TestmonialsCard = ({ content, image, name, username }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 min-w-[350px] border-[1px] border-[#f1f1f1] rounded-2xl p-4 m-4 shadow-[0_7px_14px_#EAEAEA]">
      <div className="flex flex-row gap-2 mt-4">
        <Image height={40} src={image} alt={`${name} photo`} />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm">{username}</span>
        </div>
      </div>
      <p className="text-[15px] text-black/60 tracking-tight">{content}</p>
    </div>
  );
};

const TestmonialList = () => {
  return (
    <motion.div
      className="flex gap-4 pr-4"
      animate={{ translateX: "-50%" }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        duration: 20,
      }}
    >
      {Array(2)
        .fill(0)
        .map((_, i) => (
          <React.Fragment key={i}>
            {testimonials.map((comment, i) => (
              <TestmonialsCard
                key={i}
                name={comment.name}
                content={comment.text}
                username={comment.username}
                image={comment.imageSrc}
              />
            ))}
          </React.Fragment>
        ))}
    </motion.div>
  );
};

export default TestmonialList;
