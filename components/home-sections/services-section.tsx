"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/imagemoving"; // Importing ImageMoving component


const services = [
  {
    imageSrc: "/assets/why-newrro-images/11.jpg", // Updated image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/12.jpg", // Example image source
    alt: "Other Services ",
  },
  {
    imageSrc: "/assets/why-newrro-images/13.jpg", // Example image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/14.jpg", // Example image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/15.jpg", // Example image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/16.jpg", // Example image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/17.jpg", // Example image source
    alt: "Other Services",
  },
  {
    imageSrc: "/assets/why-newrro-images/18.jpg", // Example image source
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
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We create high-quality educational kits, courses, and workshops that transform learning into hands-on experiences, empowering learners to build skills in robotics and technology.</p> */}
        </motion.div>

        {/* Infinite Moving Image Cards */}
        <div className="mb-16">
          {/* <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h3> */}
          <InfiniteMovingCards
            items={cardItems}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="mb-8"
          />
        </div>

        {/* Service Descriptions */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="outline" className="w-full">
                {service.cta}
              </Button>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
