import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Aboutus = () => {
  return (
    <div id="about" className="bg-gray-50 p-6 rounded-2xl  transition-shadow duration-300 max-w-full lg:px-56">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-2/3 space-y-6">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-relaxed">
            "VAGT Security Services: Transforming security with 25 years of expertise and innovative solutions."
          </blockquote>
          <p className="text-gray-600 text-lg leading-relaxed">
            "As a PSARA certified company, we provide integrated security services, from manned guarding to comprehensive safety audits. Our approach combines robust training, technological optimization, and a focus on quality basics to meet industry challenges."
          </p>
        </div>
        <div className="lg:w-1/3 w-full max-w-sm">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/api/placeholder/600/800"
              alt="VAGT Security Services"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
              <h3 className="font-bold text-xl mb-1">VAGT Security Services</h3>
              <p className="text-sm text-gray-200">Private Limited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;