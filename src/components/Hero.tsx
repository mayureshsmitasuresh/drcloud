"use client";

import { Button } from "@/components/ui/button";
import { Cloud, Server, Code, Award } from "lucide-react";
import { data } from "@/lib/data";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: "url('/assets/hero-cloud-devops.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Cloud className="absolute top-20 left-20 w-8 h-8 text-white/30 animate-float" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Server className="absolute top-40 right-32 w-6 h-6 text-white/40 animate-float" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Code className="absolute bottom-40 left-32 w-7 h-7 text-white/35 animate-float" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Award className="absolute bottom-20 right-20 w-6 h-6 text-white/30 animate-float" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Master <span className="text-cloud-accent">Cloud</span> &{" "}
          <span className="text-cloud-accent">DevOps</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
        >
          {data.heroData.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="accent" size="lg" className="text-lg px-8 py-4">
            {data.heroData.buttonText1}
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            className="text-lg px-8 py-4"
          >
            {data.heroData.buttonText2}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cloud-accent">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
