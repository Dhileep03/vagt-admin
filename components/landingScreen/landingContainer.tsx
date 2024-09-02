"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LandingHeader from "./landingHeader";
import FeatureCardCarousel from "@/components/common/featureCardCarousel";

interface Feature {
  title: string;
  description: string;
  image?: string;
}

export default function Component() {
  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const features: Feature[] = [
    {
      title: "GUARDING SERVICES",
      description:
        "We have a team of professionally trained security personnel's securing an impressive clientele which includes Diplomatic Missions, IT Industry, Multinational Companies, Hotels, Industrial Units, Airlines & Airports, Financial & Educational Institutions, Malls & Multiplexes, BPOs and many more.",
      image: "/security.png",
    },
    {
      title: "EHS Audits",
      description:
        "These services relate to a wide range of areas - from environmental sustainability and occupational safety to chemical, radiation, and biological controls - that support the Institute's accountability for excellent EHS performance, as well as for legal compliance.",
      image: "/cleaning.png",
    },
    {
      title: "BCP Management",
      description:
        "We identify which systems and processes must be sustained, and provide a detailed report of how to maintain them. We guide industries to tackle natural disasters and human error. It is vital for an organization to have a business continuity plan to preserve its health and reputation. A proper BCP decreases the chance of a costly outage.",
      image: "/BCP.png", // Replace with the path to your image
    },
    {
      title: "Trainings",
      description: `
        Physical Security Training,
        Electronic Security Training,
        ISMS,
        ERT,
        EHS,
        ISMS,
        Soft skills,
        Emergency Evacuation drills
      `,
      image: "/training.png", // Replace with the path to your image
    },
    {
      title: "Security Audits",
      description:
        "Conducting comprehensive physical inspection and evaluation of all security systems, controls, and their parameters in a particular public/private property, asset of an organization. Also providing a detailed analysis report with remedial action. Based on the audit, we propose optimization of manpower by implementing technology in place.",
      image: "/Audit.png", // Replace with the path to your image
    },
    {
      title: "PR AND LIAISON SUPPORT",
      description:
        "We provide Public relations (PR) as a distinctive management function that helps establish relationships between organizations. We also provide Liaising services to our clients.",
      image: "/support.png", // Replace with the path to your image
    },
    {
      title: "Electronics Security solution",
      description:
        "We provide service and external product offerings of CCTV cameras, access control systems, entry automation solutions, intrusion detection systems, metal detection solutions, fire detection, and public address systems. Our end-to-end services take care of everything from conducting surveys, analyzing requirements, designing solutions to implementing and installing electronic security solutions.",
      image: "/electric.png", // Replace with the path to your image
    },
    {
      title: "Other Services",
      description: `
        FM services for Residential and Commercial complexes,
        Office upkeep and maintenance,
        Electrical maintenance,
        Plumbing maintenance,
        STP & WTP maintenance services,
        Rodent & Pest control
      `,
      image: "/services.png", // Replace with the path to your image
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="fixed top-0 left-0 w-full z-10">
        <LandingHeader />
      </div>

      <main className="flex-1 overflow-y-auto">
        <section id="home" className="w-full py-10 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-900">
                VAGT Security Services Pvt Ltd,
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To work closely with our customers for providing world-class
                security services with optimized solutions.
              </p>
              <motion.p
                className="text-blue-600 font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                " Your Satisfaction is Our Priority "
              </motion.p>
            </motion.div>
            <motion.img
              src="/landingimage.png"
              width="550"
              height="310"
              alt="Product"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </section>

        <section id="whyus" className="w-full py-8 md:py-18 lg:py-28 bg-gray-50">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
              <motion.h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-6 text-blue-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Why Us
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We at VAGT Security Services Private Limited, a PSARA certified
                company.
              </motion.p>
            </div>
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Quality Service",
                  content:
                    "We at VAGT Security Services are dedicated to providing quality service to our esteemed customers.",
                },
                {
                  title: "Integrated Solutions",
                  content:
                    "We offer complete security and safety audit solutions.",
                },
                {
                  title: "Capability",
                  content:
                    "We are equipped to provide solutions for observations and non-conformity.",
                },
                {
                  title: "Industry Experience",
                  content:
                    "We optimize manpower through the implementation of technology.",
                },
                {
                  title: "Experienced Leadership",
                  content:
                    "Our directors bring 25 years of industry experience.",
                },
                {
                  title: "Rigorous Training",
                  content:
                    "We ensure quality through robust training for security staff.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-2 border-blue-200 rounded-lg h-[150px] flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <CardHeader
                      className="flex flex-col items-center text-center gap-2 relative z-10 transition-transform duration-500 group-hover:-translate-x-full"
                      style={{
                        zIndex: "1",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        className="rounded-full bg-blue-100 p-3 text-blue-600"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration:0.6 }}
                      >
                        {/* {item.icon} */}
                      </motion.div>
                      <CardTitle className="text-xl font-bold mt-2 text-blue-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <p className="text-center px-4">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-8 md:py-18 lg:py-28 bg-white"
        >
          <div className="container flex flex-col md:flex-row items-center gap-12 px-4 md:px-6">
            {/* Text Section */}
            <div className="flex flex-col items-center gap-6 w-full md:w-2/4">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Services
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Our product is packed with features that will make your life
                  easier. Check out what we have to offer.
                </p>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="flex w-full md:w-2/4 items-center justify-center">
              <FeatureCardCarousel features={features} />
            </div>
          </div>
        </section>
        <section id="whyus" className="w-full py-10 md:py-20 lg:py-30 bg-gray-50">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
              <motion.h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-6 text-blue-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Other Services
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We at VAGT Security Services Private Limited, a PSARA certified
                company.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="bg-blue-900 text-white w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Product 1
            </Link>
            <Link href="#" prefetch={false}>
              Product 2
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
