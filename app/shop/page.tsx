"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    title: "AI Development Kit",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500",
    description: "Complete toolkit for AI development and testing"
  },
  {
    title: "Neural Network Bundle",
    price: 199.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=500",
    description: "Pre-trained models and development resources"
  },
  {
    title: "Data Science Package",
    price: 249.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1675467159364-c0d7f5700142?auto=format&fit=crop&q=80&w=500",
    description: "Comprehensive data analysis and visualization tools"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Shop
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our collection of AI development tools and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}