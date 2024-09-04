import Image from 'next/image';
import Link from 'next/link';

export default function AppPromoSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:px-52">
      <div className="w-full px-4 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            What are you waiting for, get the app now!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Clarity gives you the blocks & components you need to create a truly professional website, landing page, or panel for your SaaS and gives the blocks.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="#" className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Image
                src="/apple-logo.png"  // Replace with your actual Apple logo path
                alt="Apple logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Download on the App Store
            </Link>
            <Link href="#" className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Image
                src="/google-play-logo.png"  // Replace with your actual Google Play logo path
                alt="Google Play logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Get it on Google Play
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
