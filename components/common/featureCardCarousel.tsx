import React from 'react';
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
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 overflow-hidden">
      <Carousel className="relative w-full">
        <CarouselContent className="space-x-6">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="flex justify-center items-center p-4">
              <Card className="border-2 border-gray-300 rounded-lg h-68 w-full max-w-3xl flex flex-row bg-white shadow-lg overflow-hidden">
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
        <CarouselPrevious className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-20 shadow-lg" />
        <CarouselNext className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-20 shadow-lg" />
      </Carousel>
    </div>
  );
};

export default FeatureCardCarousel;