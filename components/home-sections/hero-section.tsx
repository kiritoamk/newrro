"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Ensure the video plays continuously
      const playVideo = () => {
        video.play().catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      };

      playVideo();
      video.addEventListener("ended", playVideo);

      return () => {
        video.removeEventListener("ended", playVideo);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
            className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-6 relative z-10"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            &quot;Bring your imaginations to life with us.&quot;
          </motion.p>

<motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto mb-12 relative z-10"
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
>
  Let us be your #1 stepping-stone towards the endless possibilities of your creations.
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
