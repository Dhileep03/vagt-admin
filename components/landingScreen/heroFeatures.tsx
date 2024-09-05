
// "use client"
// import React from 'react';
// import { FaChalkboardTeacher, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';

// const carouselItems = [
//   {
//     id: 1,
//     icon: <FaShieldAlt className="text-blue-600 w-12 h-12" />,
//     title: "Guarding Services",
//     content: "We have a team of professionally trained security personnel securing an impressive clientele which includes Diplomatic Missions, IT Industry, Multinational Companies, Hotels, Industrial Units, Airlines & Airports, Financial & Educational Institutions, Malls & Multiplexes, BPOs and many more.",
//   },
//   {
//     id: 2,
//     icon: <FaChalkboardTeacher className="text-green-600 w-12 h-12" />,
//     title: "Trainings",
//     content: "We are a certified guarding company instrumental in following training: Physical Security Training, Electronic Security Training, ISMS, ERT, EHS, Soft skills, Emergency Evacuation drills.",
//   },
//   {
//     id: 3,
//     icon: <FaClipboardCheck className="text-yellow-600 w-12 h-12" />,
//     title: "EHS Audits",
//     content: "These services relate to a wide range of areas - from environmental sustainability and occupational safety to chemical, radiation, and biological controls - that support the Institute's accountability for excellent EHS performance, as well as for legal compliance.",
//   },
//   {
//     id: 4,
//     icon: <FaClipboardCheck className="text-yellow-600 w-12 h-12" />,
//     title: "EHS Audits",
//     content: "These services relate to a wide range of areas - from environmental sustainability and occupational safety to chemical, radiation, and biological controls - that support the Institute's accountability for excellent EHS performance, as well as for legal compliance.",
//   },
// ]
// const Carousel = () => {
//   return (
//     <div className="flex justify-center overflow-x-auto lg:ml-8 pb-8 sm:mt-16">
//       <div className="flex gap-6 snap-x">
//         {carouselItems.map(item => (
//           <div key={item.id} className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
//             <div className="overflow-hidden w-[300px] lg:w-[300px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
//               <div className="px-4 py-5 sm:p-5">
//                 <div className="flex items-start lg:items-center">
//                   <div className="shrink-0">
//                   <div className="mr-4">
//             {item.icon}
//           </div>
//                   </div>

//                   <div className="flex-1 ml-4 lg:ml-6">
//                     <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
//                     {item.title}
//                     </p>
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;





"use client"
import React from 'react';
import { FaChalkboardTeacher, FaClipboardCheck, FaConnectdevelop, FaShieldAlt} from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    icon: <FaShieldAlt className="text-blue-600 w-12 h-12" />,
    title: "Guarding Services",
    content: "We have a team of professionally trained security personnel securing an impressive clientele which includes Diplomatic Missions, IT Industry, Multinational Companies, Hotels, Industrial Units, Airlines & Airports, Financial & Educational Institutions, Malls & Multiplexes, BPOs and many more.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-green-600 w-12 h-12" />,
    title: "Trainings",
    content: "We are a certified guarding company instrumental in following training: Physical Security Training, Electronic Security Training, ISMS, ERT, EHS, Soft skills, Emergency Evacuation drills.",
  },
  {
    id: 3,
    icon: <FaClipboardCheck className="text-yellow-600 w-12 h-12" />,
    title: "EHS Audits",
    content: "These services relate to a wide range of areas - from environmental sustainability and occupational safety to chemical, radiation, and biological controls - that support the Institute's accountability for excellent EHS performance, as well as for legal compliance.",
  },
  {
    id: 4,
    icon: <FaConnectdevelop className="text-red-600 w-12 h-12" />,
    title: "E-Security Solution",
    content: "We provide services and external product offerings including CCTV cameras, access control systems, entry automation solutions, intrusion detection systems, metal detection solutions, fire detection, and public address systems. Our end-to-end services take care of everything from conducting surveys, analyzing requirements, and designing solutions to implementing and installing electronic security solutions.",
  }
];

const Carousel = () => {
  return (
    <div className="flex justify-center overflow-x-auto lg:ml-14 pb-8 sm:mt-16">
      <div className="flex gap-6 snap-x">
        {carouselItems.map(item => (
          <div key={item.id} className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-[280px] sm:w-[300px] lg:w-[320px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <div className="shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      {item.title}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
