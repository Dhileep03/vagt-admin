// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MountainIcon, SettingsIcon } from "lucide-react";
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
// import { menuItems } from "../../config/const";

// function SideBar({ isExpanded, toggleSidebar }: { isExpanded: boolean; toggleSidebar: () => void }) {
//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background transition-all duration-300 ${
//         isExpanded ? "w-48" : "w-14"
//       }`}
//     >
//       <div className="flex flex-col items-start gap-4 px-2 py-5 relative">
//         <Link
//           href="#"
//           onClick={toggleSidebar}
//           className="group flex items-center h-9 w-full justify-start rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
//           prefetch={false}
//         >
//           <div
//             className={`flex items-center justify-center h-9 w-9 rounded-full bg-primary text-primary-foreground flex-shrink-0 ${
//               isExpanded ? "w-9" : "w-9"
//             }`}
//           >
//             <MountainIcon className="h-4 w-4 transition-all group-hover:scale-110" />
//           </div>
//           {isExpanded && (
//             <span className="ml-4 whitespace-nowrap text-black">
//               VAGT
//             </span>
//           )}
//         </Link>

//         <nav className="flex flex-col items-start gap-4 mt-5">
//           {menuItems
//             .filter((item) => !item.isBottom)
//             .map(({ href, icon: Icon, label, isActive }) => (
//               <TooltipProvider key={label}>
//                 {isExpanded ? (
//                   <Link
//                     href={href}
//                     className={`relative flex items-center h-9 w-full ${
//                       isActive
//                     }`}
//                     prefetch={false}
//                   >
//                     <Icon className="h-5 w-5" />
//                     <span className="ml-3 whitespace-nowrap">
//                       {label}
//                     </span>
//                   </Link>
//                 ) : (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Link
//                         href={href}
//                         className={`relative flex items-center h-9 w-9 ${
//                           isActive
//                         }`}
//                         prefetch={false}
//                       >
//                         <Icon className="h-5 w-5" />
//                       </Link>
//                     </TooltipTrigger>
//                     <TooltipContent side="right">
//                       <span>{label}</span>
//                     </TooltipContent>
//                   </Tooltip>
//                 )}
//               </TooltipProvider>
//             ))}
//         </nav>
//       </div>

//       <nav className="mt-auto flex flex-col items-start gap-4 px-2 py-5">
//         <TooltipProvider>
//           {isExpanded ? (
//             <Link
//               href="#"
//               className="relative flex items-center h-9 w-full justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               prefetch={false}
//             >
//               <SettingsIcon className="h-5 w-5" />
//               <span className="ml-3 whitespace-nowrap">Settings</span>
//             </Link>
//           ) : (
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Link
//                   href="#"
//                   className="relative flex items-center h-9 w-9 justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                   prefetch={false}
//                 >
//                   <SettingsIcon className="h-5 w-5" />
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent side="right">
//                 <span>Settings</span>
//               </TooltipContent>
//             </Tooltip>
//           )}
//         </TooltipProvider>
//       </nav>
//     </aside>
//   );
// }

// export default SideBar;
"use client";
import { useState } from "react";
import Link from "next/link";
import { MountainIcon, SettingsIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { menuItems } from "../../config/const";

function SideBar({ isExpanded, toggleSidebar }: { isExpanded: boolean; toggleSidebar: () => void }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background transition-all duration-300 ${
        isExpanded ? "w-48" : "w-14"
      }`}
    >
      <div className="flex flex-col items-start gap-4 px-2 py-5 relative">
        <button
          onClick={toggleSidebar}
          className="group absolute top-1/2 -right-3 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:bg-primary-dark transition-colors"
        >
          {isExpanded ? (
            <ChevronLeftIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </button>

        <Link
          href="#"
          className="group flex items-center h-9 w-full justify-start rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          prefetch={false}
        >
          <div
            className={`flex items-center justify-center h-9 w-9 rounded-full bg-primary text-primary-foreground flex-shrink-0 ${
              isExpanded ? "w-9" : "w-9"
            }`}
          >
            <MountainIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          </div>
          <span
            className={`ml-4 whitespace-nowrap text-black transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            VAGT
          </span>
        </Link>

        <nav className="flex flex-col items-start gap-4 mt-5">
          {menuItems
            .filter((item) => !item.isBottom)
            .map(({ href, icon: Icon, label, isActive }) => (
              <TooltipProvider key={label}>
                <Link
                  href={href}
                  className={`relative flex items-center h-9 w-full ${
                    isActive
                  }`}
                  prefetch={false}
                >
                  <Icon className="h-5 w-5" />
                  <span
                    className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </TooltipProvider>
            ))}
        </nav>
      </div>

      <nav className="mt-auto flex flex-col items-start gap-4 px-2 py-5">
        <TooltipProvider>
          <Link
            href="#"
            className="relative flex items-center h-9 w-full justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            prefetch={false}
          >
            <SettingsIcon className="h-5 w-5 text-black" />
            <span
              className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              Settings
            </span>
          </Link>
        </TooltipProvider>
      </nav>
    </aside>
  );
}

export default SideBar;

