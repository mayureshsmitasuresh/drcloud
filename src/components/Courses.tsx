"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { motion } from "motion/react"; // Motion One
import { useState } from "react";
import CourseForm from "./ui/courseForm";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  return (
    <section id="courses" className="pt-16 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.2, // stagger
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative inline-block text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Our <span className="text-primary relative">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.3, // stagger
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive cloud and DevOps training designed to accelerate your
            career
          </motion.p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.courses.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // stagger
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-8 min-h-[550px] relative bg-gradient-card border-0 shadow-card-hover hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                {service.icon && (
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center ">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                )}
                {/* Title */}
                <h3 className="text-2xl font-bold  text-foreground">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-muted-foreground  ">
                  {service.description}
                </p>
                {/* Key Points */}
                <ul className="space-y-2 mb-6 ">
                  {service.keyPoints.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <Button
                  onClick={() => setSelectedCourse(service.title)}
                  variant="cloud"
                  className="w-[80%] absolute bottom-5 mx-auto left-0 right-0"
                >
                  Know More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCourse && (
        <CourseForm
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
};

export default Courses;
