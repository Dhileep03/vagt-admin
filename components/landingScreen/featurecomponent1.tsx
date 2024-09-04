"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Shield, Users, Building, Briefcase, Lock, Camera, Headphones, Book } from "lucide-react";
import { ServiceCard } from "@/components/common/commonCards";
import { useInView } from "react-intersection-observer";

const AnimatedServiceCard = motion(ServiceCard);

export default function ServiceSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: (direction: "left" | "right") => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const services = [
    {
      Icon: Shield,
      title: "Guarding Services",
      description: "We provide trained security personnel for a diverse clientele, including Diplomatic Missions, IT, Multinationals, Hotels, and more.",
    },
    {
      Icon: Users,
      title: "EHS Audits",
      description:"These services ensure EHS excellence and compliance in environmental sustainability and occupational safety"
    },
    {
      Icon: Building,
      title: "BCP Management",
      description: "We ensure business continuity by maintaining critical systems and guiding industries in disaster and error management.",
    },
    {
      Icon: Briefcase,
      title: "Training",
      description: "Physical Security Training, Electronic Training, ISMS, ERT, EHS, ISMS, Soft skills, Emergency Evacuation drills",
    },
    {
      Icon: Lock,
      title: "Security Audits",
      description: "We inspect security systems, provide analysis, and recommend optimizing manpower with technology",
    },
    {
      Icon: Camera,
      title: "PR and LIAISON Support",
      description: "We offer PR to build organizational relationships and provide liaising services to clients.",
    },
    {
      Icon: Headphones,
      title: "Electronics Security solution",
      description: "We provide and install CCTV, access control, automation, intrusion, and other security systems",
    },
    {
      Icon: Book,
      title: "Other Services",
      description: "FM services for Residential and Commercial complexes,Office upkeep and maintenance, Electrical maintenance",
    },
  ];

  return (
    <div className="container px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="flex flex-col items-center justify-center text-center px-4 py-12">
        <motion.h2
          className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-6 text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              custom={index % 4 < 2 ? "right" : "left"}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: index * 0.1 }}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}






