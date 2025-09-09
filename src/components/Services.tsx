"use client";

import { data } from "@/lib/data";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 my-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Our <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive cloud and DevOps training designed to accelerate your
          career
        </p>
      </div>

      {/* Benefits Grid */}
      <div className={`grid grid-cols-3 gap-8 justify-center items-center `}>
        {data.benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center p-6 rounded-xl shadow-card-hover hover:shadow-float transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <benefit.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
