"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const courses = [
  {
    title: "AI Fundamentals",
    description: "Learn the basics of artificial intelligence and machine learning",
    duration: "8 weeks",
    students: "1.2k+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Advanced Machine Learning",
    description: "Deep dive into neural networks and deep learning concepts",
    duration: "12 weeks",
    students: "800+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Data Science Mastery",
    description: "Master data analysis and visualization techniques",
    duration: "10 weeks",
    students: "950+",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1675467159364-c0d7f5700142?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Courses() {
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
            Our Courses
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expand your knowledge with our expert-led courses in AI and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-purple-500" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-purple-500" />
                      {course.students}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Star className="w-4 h-4 mr-2 text-purple-500" />
                      {course.rating}
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Enroll Now
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