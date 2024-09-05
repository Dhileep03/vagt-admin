"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://x.com/wix',
    title: 'Twitter',
    icon: FaTwitter,
  },
  {
    href: 'https://www.facebook.com/wix',
    title: 'Facebook',
    icon: FaFacebook,
  },
  {
    href: 'https://www.instagram.com/wix/',
    title: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://www.linkedin.com/company/wix-com/',
    title: 'LinkedIn',
    icon: FaLinkedin,
  },
];

const companyLinks = [
  { href: '#about', text: 'About' },
  { href: '#feature', text: 'Feature' },
  { href: '#careers', text: 'Careers' },
  { href: '#contact', text: 'Contact' },
];

const supportLinks = [
  { href: '#feature', text: 'Guarding Services' },
  { href: '#feature', text: 'EHS Audits' },
  { href: '#feature', text: 'BCP Management' },
  { href: '#feature', text: 'Electronic Security Solution' },
  { href: '#feature', text: 'Trainings' },
  { href: '#feature', text: 'PR and LIAISON Support' },
  { href: '#feature', text: 'BCP Management' },
  { href: '#feature', text: 'Other Services' },
];


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
           <Image
                  className="bg-white"
                  src="/logoVagt.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
            <p className="mt-4 text-sm leading-6">
            VAGT Security Services - work closely with our customers for providing world-class
            security services with optimized solutions.
            </p>
            <div className="flex space-x-4 mt-6">

            {socialLinks.map(({ href, title, icon: Icon }) => (
        <Link href={href} passHref
        title={title}
        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
      >
      <Icon className="w-4 h-4" />
    </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(({ href, text }) => (
                <li key={text}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Security Services</h3>
            <ul className="space-y-2">
              {supportLinks.map(({ href, text }) => (
                <li key={text}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Book Our Service</h3>
              <Link 
      href="https://play.google.com/store/your-play-store-link" 
      className="inline-flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
    >
      <span className="text-xs">Book now</span>
    </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Address</h4>
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-gray-400 flex-shrink-0" />
                <span className="text-sm">86/2 Seegehalli Village, Kadugodi Bangalore 560067</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-gray-400 flex-shrink-0" />
                <span className="text-sm">+91-8217-210-589</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-gray-400 flex-shrink-0" />
                <span className="text-sm">+91-9845-372-783</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Email</h4>
              <div className="flex items-center space-x-3">
                <FiMail className="text-gray-400 flex-shrink-0" />
                <Link href="mailto:ratanlaljha@vagtsecurityservices.com" className="text-sm hover:text-white transition-colors">
                  ratanlaljha@vagtsecurityservices.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-gray-400 flex-shrink-0" />
                <Link href="mailto:m.bidappa@vagtsecurityservices.com" className="text-sm hover:text-white transition-colors">
                  m.bidappa@vagtsecurityservices.com
                </Link>
              </div>
            </div>
            <div>
  <h4 className="text-xs font-semibold text-white mb-2">Download VAGT App</h4>
  <div className="flex flex-col space-y-2">
    <Link 
      href="https://apps.apple.com/your-app-store-link" 
      className="inline-flex items-center justify-center bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
    >
      <FaApple className="mr-1.5 text-xs" />
      <span className="text-xs">Download on the App Store</span>
    </Link>
    <Link 
      href="https://play.google.com/store/your-play-store-link" 
      className="inline-flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
    >
      <FaGooglePlay className="mr-1.5 text-xs" />
      <span className="text-xs">Get it on Google Play</span>
    </Link>
  </div>
</div>



          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 VAGT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://compass.vetnet.social/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link href="https://compass.vetnet.social/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="https://compass.vetnet.social/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;