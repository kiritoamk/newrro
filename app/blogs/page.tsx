"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "The Future of AI in Education",
    excerpt: "Exploring how artificial intelligence is transforming the educational landscape",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Machine Learning Best Practices",
    excerpt: "A comprehensive guide to implementing machine learning in your projects",
    author: "James Wilson",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Understanding Neural Networks",
    excerpt: "Deep dive into the architecture and applications of neural networks",
    author: "Dr. Michael Lee",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1675467159364-c0d7f5700142?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Blogs() {
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
            Latest Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the latest trends and insights in AI, machine learning, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1 text-purple-500" />
                      {blog.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-purple-500" />
                      {blog.readTime}
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}