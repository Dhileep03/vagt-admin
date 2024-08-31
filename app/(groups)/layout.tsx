"use client";
import { useState, useEffect } from "react";
import SideBar from "../../components/common/SideBar";
import TopBar from "@/components/common/TopBar";

export default function Component({ children }: any) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  // Monitor screen width for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* Conditionally render SideBar only if not in mobile view */}
      {!isMobile && (
        <SideBar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      )}

      <main
        className={`flex flex-col sm:gap-4 sm:py-4 transition-all duration-300 ${
          isMobile ? "pl-0" : isSidebarExpanded ? "pl-60" : "pl-14"
        } w-full`}
      >
        <TopBar />
        <div className="flex-1 p-4 sm:px-6 sm:py-0">{children}</div>
      </main>
    </div>
  );
}


