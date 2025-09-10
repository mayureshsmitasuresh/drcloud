"use client";

import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { data } from "@/lib/data";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            What <span className="text-primary relative">They Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from our students and professionals who have trusted Dr Cloud
            for their career growth
          </motion.p>
        </div>

        {/* Students */}
        <div className="relative overflow-x-auto">
          <div className="flex gap-6">
          
            {data.testimonials.student.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-shrink-0 w-[300px] md:w-[360px]"
              >
                <Card className="p-6 h-full bg-card shadow-card-hover hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    <Quote size={20} className="text-accent inline mr-2" />
                    {t.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-primary text-sm">{t.placement}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professionals */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Industry <span className="text-primary">Professionals</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.professionals.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="p-6 h-full bg-card shadow-card-hover hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    <span>
                      <Quote size={20} className="text-accent" />
                    </span>
                    {t.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-foreground">
                      {t.designation}
                    </h4>
                    <p className="text-primary text-sm">{t.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
