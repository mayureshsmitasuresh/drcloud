"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { data } from "@/lib/data";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const socials = [
    {
      name: "linkedin",
      url: data.socials.linkedin,
      icon: BsLinkedin,
    },

    {
      name: "instagram",
      url: data.socials.instagram,
      icon: BsInstagram,
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start  gap-12">
          {/* Brand + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-44 h-44 rounded-lg overflow-hidden">
                <Image
                  loading="lazy"
                  src="/assets/logo.jpg"
                  alt="CloudEdu Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-white/80 mb-6 max-w-md">
              {data.aboutUs.tagline}
            </p>

            <div className="flex gap-3 flex-wrap">
              {socials.map(
                (social, idx) =>
                  social.url && (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-8 h-8 text-white cursor-pointer" />
                    </motion.a>
                  )
              )}
            </div>
          </motion.div>

          {/* Courses Info */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <div className="space-y-3 text-white/80">
              {data.courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <h3 className="hover:text-white transition-colors ">
                    {course.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3 cursor-pointer">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${data.contactInfo.email}`}
                  className="hover:text-white transition-colors "
                >
                  {data.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${data.contactInfo.phone}`}
                  className="hover:text-white transition-colors "
                >
                  {data.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    data.contactInfo.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors "
                >
                  {data.contactInfo.address}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DrCloud | All rights reserved 2025
          </p>
          {/* <div className="flex gap-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
