import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

interface FeatureCardCarouselProps {
  features: Feature[];
}

const FeatureCardCarousel: React.FC<FeatureCardCarouselProps> = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(goToNext, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  useEffect(() => {
    stopAutoSlide();
    startAutoSlide();
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto py-10 overflow-hidden h-[50vh]">
      <Carousel className="relative w-full flex">
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="flex-none w-full flex items-center justify-center px-4"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <Card className="border border-gray-300 rounded-lg h-full max-w-4xl flex flex-row bg-white shadow-xl border-collapse overflow-hidden">
                <div className="w-1/3 h-full">
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <CardContent className="w-2/3 flex flex-col justify-center p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-20 shadow-lg"
          onClick={goToNext}
        />
      </Carousel>
    </div>
  );
};

export default FeatureCardCarousel;
