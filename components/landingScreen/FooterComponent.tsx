import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const socialLinks = [
  {
    href: '#',
    title: 'Twitter',
    icon: '/icons/twitter.svg',
  },
  {
    href: '#',
    title: 'Facebook',
    icon: '/icons/facebook.svg',
  },
  {
    href: '#',
    title: 'Instagram',
    icon: '/icons/instagram.svg',
  },
  {
    href: '#',
    title: 'LinkedIn',
    icon: '/icons/linkedin.svg',
  },
];

const solutionsLinks = [
  { href: '#', text: 'Marketing' },
  { href: '#', text: 'Analytics' },
  { href: '#', text: 'Commerce' },
  { href: '#', text: 'Insights' },
];

const supportLinks = [
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'Documentation' },
  { href: '#', text: 'Guides' },
  { href: '#', text: 'API Status' },
];

const companyLinks = [
  { href: '#', text: 'About' },
  { href: '#', text: 'Careers' },
  { href: '#', text: 'Press' },
  { href: '#', text: 'Blog' },
];
// ... (keep existing arrays for socialLinks, solutionsLinks, and supportLinks)

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              className="w-auto h-10"
              src="/images/logo-white.svg"
              alt="Company Logo"
              width={120}
              height={40}
            />
            <p className="mt-4 text-sm leading-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ href, title, icon }) => (
                <Link key={title} href={href} className="text-gray-400 hover:text-white transition-colors">
                  <Image src={icon} alt={title} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionsLinks.map(({ href, text }) => (
                <li key={text}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
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
              <Link href="/book-service" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Book Now
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Download VAGT App</h3>
              <div className="flex flex-col space-y-5">
                <Link 
                  href="https://apps.apple.com/your-app-store-link" 
                  className="inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  <FaApple className="mr-2 text-sm" />
                  <span>Download on the App Store</span>
                </Link>
                <Link 
                  href="https://play.google.com/store/your-play-store-link" 
                  className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  <FaGooglePlay className="mr-2 text-sm" />
                  <span>Get it on Google Play</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Address</h4>
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-gray-400 flex-shrink-0" />
                <span className="text-sm">8502 Preston Rd. Ingle, Maine 98380, USA</span>
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
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 Celebration. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;