"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { BackgroundGradientAnimation } from "@/components/ui/bg-gradient";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.play().catch((error) => {
          console.error("Video autoplay failed:", error);
          setIsVideoLoaded(true);
        });
      };

      video.addEventListener("loadedmetadata", () => {
        setIsVideoLoaded(true);
        playVideo();
      });

      video.addEventListener("error", (e) => {
        console.error("Video error:", e);
        setIsVideoLoaded(true);
      });

      return () => {
        video.removeEventListener("loadedmetadata", playVideo);
        video.removeEventListener("error", () => {});
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
              NEWRRO
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6"
          >
            &quot;Bring your imaginations to life with us.&quot;
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12"
          >
            Let us be your #1 stepping-stone towards the endless possibilities
            of your creations.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button
              size="lg"
              className="bg-[#df5bd3] hover:bg-[#c74ebe] text-white px-8 py-6 text-lg rounded-full group relative overflow-hidden transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/90 border-white/10">
                <DialogTitle className="sr-only">NEWRRO Demo Video</DialogTitle>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="NEWRRO Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
