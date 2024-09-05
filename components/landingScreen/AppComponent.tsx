import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function AppPromoSection() {
  return (
    <section id="careers" className="bg-white py-16 sm:py-24 lg:px-52">
      <div className="w-full px-4 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            What are you waiting for, get the app now!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Clarity gives you the blocks & components you need to create a truly professional website, landing page, or panel for your SaaS and gives the blocks.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="https://apps.apple.com/your-app-store-link" className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <FaApple className="mr-2 w-5 h-5" />
              Download on the App Store
            </Link>
            <Link href="https://play.google.com/store/your-play-store-link" className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <FaGooglePlay className="mr-2 w-5 h-5" />
              Get it on Google Play
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
