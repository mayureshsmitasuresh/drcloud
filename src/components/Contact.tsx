"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin,} from "lucide-react";
import { data } from "@/lib/data";
import { motion, Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // valid easing
  },
};
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      value: (
        <a href={`mailto:${data.contactInfo.email}`}>
          {data.contactInfo.email}
        </a>
      ),
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      value: (
        <a href={`tel:${data.contactInfo.phone}`}>{data.contactInfo.phone}</a>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Visit Us",
      value: (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            data.contactInfo.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.contactInfo.address}
        </a>
      ),
    },
  ];
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your <span className="text-primary">Cloud Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career? Get in touch with our experts and
            discover the perfect learning path for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="p-8 bg-gradient-card border-0 shadow-card-hover">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get Started Today
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested Course
                  </label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                    <option>AWS Cloud Training</option>
                    <option>DevOps Bootcamp</option>
                    <option>Infrastructure as Code</option>
                    <option>All Courses</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your goals and experience level..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you every step of the way. Whether you
                are just starting or looking to advance your existing skills, we
                will create a personalized learning path for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="p-6 bg-gradient-hero text-white border-0">
                <h4 className="text-xl font-bold mb-3">Free Consultation</h4>
                <p className="mb-4 text-white/90">
                  Book a free 30-minute consultation with our cloud experts to
                  discuss your goals and get a personalized learning roadmap.
                </p>
                <Button variant="outline-white" size="sm">
                  Schedule Call
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
