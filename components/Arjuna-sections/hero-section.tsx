'use client';

import { useEffect } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";
import { ContainerScroll, Card } from "@/components/ui/container-scroll";

export function HeroSection() {
  const rotateValue: MotionValue<number> = useMotionValue(0); // Define MotionValue for rotation
  const scaleValue: MotionValue<number> = useMotionValue(1); // Define MotionValue for scaling
  const translateValue: MotionValue<number> = useMotionValue(0); // Define MotionValue for translation

  return (
    <section>
      {/* Main Content */}
      <div className="relative z-20 px-4 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-black dark:text-black">
                    Introducing
                    <br />
                    <span className="text-8xl">ARJUNA</span>
                  </h1>
                </>
              }
            >
              {/* Pass all required props to Card */}
              <Card
                rotate={rotateValue}
                scale={scaleValue}
                translate={translateValue} // Pass translate MotionValue
                videoSrc="/assets/1.mp4"
              >
                {/* Children content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold">Card Title</h3>
                  <p className="text-sm text-gray-600">Some descriptive text here.</p>
                </div>
              </Card>
            </ContainerScroll>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
