
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
import { Items } from "../../config/const";

function SideBar({ isExpanded, toggleSidebar }: { isExpanded: boolean; toggleSidebar: () => void }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <div className="flex flex-col items-start gap-6 px-3 py-6 relative">
        <button
          onClick={toggleSidebar}
          className="group absolute top-24 -right-3 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:bg-primary/90 transition-colors"
        >
          {isExpanded ? (
            <ChevronLeftIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </button>
        
        <Link
          href="#"
          className="group flex items-center h-10 w-full justify-start rounded-lg bg-primary/10 text-lg font-semibold text-primary hover:bg-primary/20 transition-colors"
          prefetch={false}
        >
          <div
            className={`flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground flex-shrink-0`}
          >
            <MountainIcon className="h-5 w-5 transition-all group-hover:scale-110" />
          </div>
          <span
            className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            VAGT
          </span>
        </Link>
        
        <nav className="flex flex-col items-start gap-2 w-full">
          {Items
            .filter((item) => !item.isBottom)
            .map(({ href, icon: Icon, label, isActive }) => (
              <TooltipProvider key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className={`flex items-center h-10 w-full px-3 rounded-lg ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      } transition-colors`}
                      prefetch={false}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span
                        className={`ml-3 text-sm whitespace-nowrap transition-opacity duration-300 ${
                          isExpanded ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  </TooltipTrigger>
                  {!isExpanded && (
                    <TooltipContent side="right">
                      {label}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
        </nav>
      </div>
      
      <nav className="mt-auto flex flex-col items-start gap-2 px-3 py-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex items-center h-10 w-full px-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                prefetch={false}
              >
                <SettingsIcon className="h-5 w-5 flex-shrink-0" />
                <span
                  className={`ml-3 text-sm whitespace-nowrap transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Settings
                </span>
              </Link>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right">
                Settings
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}

export default SideBar;

