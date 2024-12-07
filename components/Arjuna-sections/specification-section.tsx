// SpecificationSection.tsx

'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bentogrid";
import { Cpu, HardDrive, Boxes, Cloud, MapPin, Battery } from "lucide-react";
import { cn } from "@/lib/utils";

const specifications = [
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Jetson Nano",
    description: "Powered by NVIDIA Jetson Nano, offering high performance for AI applications with low power consumption.",
    imageSrc: "/assets/jetson.jpg",
    imageAlt: "Jetson Nano hardware"
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "IMU (Inertial Measurement Unit)",
    description: "Equipped with a high-precision IMU for real-time motion and orientation tracking.",
    imageSrc: "/assets/imu.jpg",
    imageAlt: "IMU module"
  },
  {
    icon: <Battery className="w-12 h-12" />,
    title: "Proximity Sensors",
    description: "Advanced proximity sensors for detecting nearby objects and enhancing navigation capabilities.",
    imageSrc: "/assets/proximity.webp",
    imageAlt: "Proximity sensors"
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "LiDAR Representations",
    description: "LiDAR integration for accurate 3D mapping and environment scanning.",
    imageSrc: "/assets/lidar.jpg",
    imageAlt: "LiDAR representation"
  },
  {
    icon: <Boxes className="w-12 h-12" />,
    title: "Ultrasonics",
    description: "Ultrasonic sensors for precise distance measurement and obstacle detection.",
    imageSrc: "/assets/us.webp",
    imageAlt: "Ultrasonic sensors"
  },
  {
    icon: <HardDrive className="w-12 h-12" />,
    title: "Arjuna Motherboard",
    description: "Custom-built Arjuna motherboard that integrates all sensors and computing resources for optimal performance.",
    imageSrc: "/assets/mb.webp",
    imageAlt: "Arjuna Motherboard"
  }
];

export function SpecificationSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Product Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into the detailed specifications that power this advanced device.
          </p>
        </motion.div>

        {/* BentoGrid Integration */}
        <BentoGrid className="max-w-4xl mx-auto">
          {specifications.map((spec, index) => (
            <BentoGridItem
              key={index}
              title={spec.title}
              description={spec.description}
              header={spec.icon}
              className={cn(
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
              )}
              imageSrc={spec.imageSrc}
              imageAlt={spec.imageAlt}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}