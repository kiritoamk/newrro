"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// Main scroll container component
export const ContainerScroll = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: React.ReactNode; // Optional heading prop
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 0.9, 1], [0, -10, -20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [responsiveScale, setResponsiveScale] = useState(1);

  // Dynamically scale the card component based on window size
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const newScale = Math.max(windowWidth / 1920, 0.5); // Clamp scaling between 0.5 and 1 based on the screen width
    setResponsiveScale(newScale);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-[70rem] sm:h-[70rem] md:h-[70rem] flex items-center justify-center relative p-20 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Render heading if provided */}
        {
  heading && (
    <div className="text-center mb-10 sm:mb-20 md:mb-20">
    <h1 className="text-black font-bold">
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Introducing
      </span>
      <br />
      <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        ARJUNA
      </span>
    </h1>
  </div>  
  )
}
        {/* Pass responsiveScale dynamically */}
        <Card
          rotate={rotate}
          scale={scale}
          translate={translate}
          videoSrc="v1.mp4"
          responsiveScale={responsiveScale}
        />
      </div>
    </div>
  );
};

// Video card with forward-only rotation logic
export const Card = ({
  rotate,
  scale,
  translate,
  videoSrc,
  responsiveScale,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  videoSrc?: string;
  responsiveScale: number;
}) => {
  if (!videoSrc) return null;

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale: scale * responsiveScale, // Apply dynamic scaling
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="v1.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
};
