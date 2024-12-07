"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/imagemoving";
import Image from "next/image"; // Import Next.js Image component

const services = [
  {
    imageSrc: "/assets/why-newrro-images/11.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/12.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/13.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/14.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/15.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/16.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/17.jpg",
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/18.jpg",
    alt: "Other Services",
  },
];

export function ServicesSection() {
  const cardItems = services.map(service => ({
    imageSrc: service.imageSrc,
    alt: service.alt,
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            A Different Approach: Where Education Meets Innovation!
          </h2>
        </motion.div>

        {/* Infinite Moving Image Cards */}
        <div className="mb-16">
          <div className="flex space-x-2 overflow-x-auto">
            {cardItems.map((item, index) => (
              <div key={index} className="relative w-32 h-32">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
