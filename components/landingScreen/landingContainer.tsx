"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GaugeIcon,
  MountainIcon,
  RocketIcon,
  SettingsIcon,
  ShieldIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LandingHeader from "./landingHeader";

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

    // Cleanup event listeners on component unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const features = [
    {
      icon: <GaugeIcon className="h-6 w-6" />,
      title: "Fast and Reliable",
      description:
        "Our fast and reliable service ensures that your needs are met in a timely and efficient manner.",
    },
    {
      icon: <SettingsIcon className="h-6 w-6" />,
      title: "Highly Customizable",
      description:
        "Customize everything to match your brand and requirements effortlessly.",
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Secure and Reliable",
      description:
        "Our security measures ensure your data is protected at all times.",
    },
    {
      icon: <RocketIcon className="h-6 w-6" />,
      title: "Scalable and Flexible",
      description:
        "Scale your operations with a flexible solution that grows with you.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-10">
        <LandingHeader />
      </div>

      <main className="flex-1 overflow-y-auto">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Introducing our latest product
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our new product is designed to revolutionize the way you work.
                With advanced features and seamless integration, it's the
                perfect solution for your business.
              </p>
            </div>
            <img
              src="/landingimage.png"
              width="550"
              height="310"
              alt="Product"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Discover our amazing features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our product is packed with features that will make your life
                  easier. Check out what we have to offer.
                </p>
              </div>
            </div>
            <div className="grid items-start gap-12 sm:max-w-4xl sm:grid-cols-2 md:gap-16 lg:max-w-5xl lg:grid-cols-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-primary rounded-lg h-[200px] flex flex-col justify-between relative overflow-hidden group"
                >
                  <CardHeader className="flex flex-col items-center text-center gap-2 relative z-10 transition-transform duration-500 group-hover:-translate-x-full">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold mt-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="absolute inset-0 flex items-center justify-center bg-primary/50 text-black transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:blur-none group-hover:backdrop-blur-md">
                    <p className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Us
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are dedicated to providing exceptional services and solutions. Our team is committed to innovation and customer satisfaction. Learn more about our mission, values, and the people behind our success.
              </p>
            </div>
            <img
              src="/aboutus.png"
              width="550"
              height="310"
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-muted p-6 md:py-12">
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
