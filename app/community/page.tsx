"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const communityFeatures = [
  {
    title: "Discussion Forums",
    description: "Engage with fellow developers and AI enthusiasts",
    icon: MessageSquare,
    members: "5k+",
    topics: "1.2k+"
  },
  {
    title: "Study Groups",
    description: "Join or create study groups for collaborative learning",
    icon: Users,
    members: "3k+",
    groups: "200+"
  },
  {
    title: "Events",
    description: "Participate in workshops, webinars, and meetups",
    icon: Calendar,
    upcoming: "15+",
    participants: "2k+"
  }
];

export default function Community() {
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
            Join Our Community
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with like-minded individuals and grow together in our thriving community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(feature).map(([key, value]) => {
                    if (key !== "title" && key !== "description" && key !== "icon") {
                      return (
                        <div key={key} className="text-gray-400">
                          <span className="text-purple-500 font-semibold">{value}</span>
                          <span className="block text-sm capitalize">{key}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Join Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}