"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LandingHeader from "./landingHeader";
import FeatureCardCarousel from "@/components/common/featureCardCarousel";
import { features } from "@/config/const";
import ServiceSection from "./serviceSection";
import useSectionAnimations from "./useSectionAnimation";
import useSmoothScroll from "./useSmoothScroll";

export default function Component() {
  useSmoothScroll();
  useSectionAnimations();

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

        <section id="whyus" className="w-full py-4 md:py-8 lg:py-12 bg-gray-50">
          <div className="container px-2 md:px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center text-center px-2 py-6">
              <motion.h2
                className="text-2xl font-bold tracking-tighter md:text-3xl text-center mb-4 text-blue-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Why Us
              </motion.h2>
              <motion.p
                className="max-w-[500px] text-muted-foreground md:text-lg lg:text-base xl:text-lg mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We at VAGT Security Services Private Limited, a PSARA certified
                company.
              </motion.p>
            </div>
            <motion.div
              className="grid gap-4 lg:grid-cols-3"
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
                  <Card className="border border-blue-200 rounded-lg h-[120px] flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <CardHeader
                      className="flex flex-col items-center text-center gap-1 relative z-10 transition-transform duration-500 group-hover:-translate-x-full"
                      style={{
                        zIndex: "1",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        className="rounded-full bg-blue-100 p-2 text-blue-600"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      ></motion.div>
                      <CardTitle className="text-lg font-bold mt-1 text-blue-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <p className="text-center px-2 text-sm">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-10 md:py-20 lg:py-30 bg-gray-50"
        >
          <ServiceSection />
        </section>
        <section
          id="About Us"
          className="w-full py-8 md:py-18 lg:py-28 bg-white"
        >
          <div className="container flex flex-col md:flex-row items-center gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 w-full md:w-2/4">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  About Us
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Our product is packed with features that will make your life
                  easier. Check out what we have to offer.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-2/4 items-center justify-center">
              <FeatureCardCarousel features={features} />
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
