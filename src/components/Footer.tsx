'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-32">
      <div className="px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <div className="lg:w-[8rem] w-[5rem]">
              <Image src="/Logo/1.svg" alt="logo" width={900} height={900} />
            </div>
          </Link>

          {/* <div className="flex mt-4 gap-x-10 sm:flex-row sm:items-center sm:justify-center">
            <Link href="" className="">
              <FaFacebook className="hover:text-primary/90 text-3xl text-white" />
            </Link>
            <Link href="" className="">
              <FaInstagram className="hover:text-primary/90 text-3xl text-white" />
            </Link>
          </div> */}
        </div>

        <hr className="my-10 border-white" />

        <div className="text-center">
          <p className="text-sm text-gray-100">
            © Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
