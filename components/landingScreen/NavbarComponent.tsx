"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import LoginDialog from '@/components/login/loginDialogue';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleLoginClick = () => {
    setShowLoginDialog(true);
  };

  const handleCloseDialog = () => {
    setShowLoginDialog(false);
  };

  return (
    <>
      <header className="py-4 bg-white sm:py-5 lg:px-28">
        <div className="lg:mx-20 max-w-full sm:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="#" title="Home" className="flex">
                <Image
                  src="/logoVagt.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
              <Link href="#about" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                About
              </Link>
              <Link href="#feature" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                Features
              </Link>
              <Link href="#careers" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                Career
              </Link>
            </div>

            {/* Join Email List & Login Button for Desktop */}
            <div className="hidden md:block">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Book Our Service
              </Link>
              <button
                onClick={handleLoginClick}
                className="inline-flex items-center justify-center  lg:ml-2 px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Login
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {expanded && (
            <nav>
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  <Link href="#" className="text-base font-medium text-gray-900 transition-all duration-200">
                    Features
                  </Link>
                  <Link href="#" className="text-base font-medium text-gray-900 transition-all duration-200">
                    Pricing
                  </Link>
                  <Link href="#" className="text-base font-medium text-gray-900 transition-all duration-200">
                    Support
                  </Link>
                  <button
                    onClick={handleLoginClick}
                    className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Login
                  </button>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Join Email List
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Login Dialog */}
      <LoginDialog isOpen={showLoginDialog} onClose={handleCloseDialog} />
    </>
  );
};

export default Navbar;
