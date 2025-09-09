"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

import { data } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">DrCloud</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {data.aboutUs.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {data.aboutUs.description2}
            </p>

            <div className="space-y-4 mb-8">
              {data.aboutUs.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cloud-primary rounded-full" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Our Story
            </Button>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {data.aboutUs.missions.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="p-6 bg-card border-0 shadow-card-hover hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center ">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold  text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
