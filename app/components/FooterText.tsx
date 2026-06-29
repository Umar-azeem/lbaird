import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          At Cornerstone First Mortgage, LLC. we are dedicated to delivering
          high-quality customer service and offer an extensive range of home
          loan programs with competitive rates to deliver a solution that best
          fits the need of each client.
        </p>

        <p className="mt-6">
          For Licensing Information go to:
        </p>

        <p className="mt-6">
          © {currentYear} Cornerstone First Mortgage, LLC |  All Rights Reserved. NMLS ID #173855 Equal | Opportunity Lender.
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logoN.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
