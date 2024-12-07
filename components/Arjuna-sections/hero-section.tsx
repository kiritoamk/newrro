'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";
import { ContainerScroll, Card } from "@/components/ui/container-scroll";

export function HeroSection() {
  const rotateValue: MotionValue<number> = useMotionValue(0);
  const scaleValue: MotionValue<number> = useMotionValue(1);
  const translateValue: MotionValue<number> = useMotionValue(0);

  // Responsive Scale Logic
  const [responsiveScale, setResponsiveScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setResponsiveScale(0.8); // Scale down for smaller devices
      } else {
        setResponsiveScale(1); // Normal scale for larger devices
      }
    };

    handleResize(); // Set initial scale
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {/* Main Content */}
      <div className="relative z-20 px-2 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              heading={
                <h1 className="text-black font-bold mb-12 md:mb-10">
                  <span className="text-6xl md:text-base">Introducing</span>{" "}
                  <span className="text-8xl md:text-4xl">ARJUNA</span>
                </h1>
              }
            >
              {/* Card Component */}
              <Card
                rotate={rotateValue}
                scale={scaleValue}
                translate={translateValue}
                videoSrc="v1.mp4"
                responsiveScale={responsiveScale}
              />
            </ContainerScroll>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
