"use client";
import "./globals.css";
import Image from "next/image";
import Collosal from "../public/collosalLogo.svg";
import CollosalFooter from "../public/collosalFooter.svg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import * as React from "react";

export default function RootLayout({ children }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang='en'>
      <body className='flex flex-col bg-[#0B0B22] items-center overflow-y-scroll'>
        <div className='bg-[#241B20] w-[885px] h-[870px] rounded-full absolute left-[-150px] top-[80px] -z-10 blur-3xl'></div>
        <div className='bg-[#0C2535] w-[885px] h-[870px] rounded-full absolute left-[450px] top-[-50px] -z-20 blur-3xl'></div>
        <div className='bg-[#240C28] w-[885px] h-[870px] rounded-full absolute left-[980px] top-[-200px] -z-10 blur-3xl'></div>
        <nav className='w-[1026px] flex justify-between items-center mt-14 mb-[100px] text-white'>
          <Link href='./'>
            <div className='flex items-center'>
              <Image
                src={Collosal}
                alt='Collosal Logo'
                className='mr-5'
              ></Image>
              <b className='text-xl'>Collosal.</b>
            </div>
          </Link>
          <ul className='flex w-[424px] justify-between text-white text-opacity-80'>
            <Link href='./Services'>
              <li>Services</li>
            </Link>
            <Link href='./HowWeWork'>
              <li>How We Work</li>
            </Link>
            <Link href='./Projects'>
              <li>Projects</li>
            </Link>
            <Link href='./About'>
              <li>About</li>
            </Link>
          </ul>
          <Link href='./Contact'>
            <button className='w-[112px] h-[39px] bg-white bg-opacity-10 border-none rounded-sm'>
              Contact
            </button>
          </Link>
        </nav>

        {children}

        <div data-aos='fade-right' className='text-white space-y-12 mt-[110px]'>
          <hr className='w-[1024px] border-0.5 border-white border-opacity-10' />
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold leading-relaxed'>
              We&apos;ve prepared everything, it&apos;s time <br /> for you to
              tell the problem
            </span>
            <div>
              <Link href='./Quote'>
                <button className='w-[202px] h-[52px] bg-[#6016FC] mr-[10px] rounded-sm'>
                  Send Quote
                </button>
              </Link>
              <Link href='./Contact'>
                <button className='w-[162px] h-[52px] bg-[#fff] bg-opacity-10 rounded-sm'>
                  Ask Us
                </button>
              </Link>
            </div>
          </div>
          <hr className='border-0.5 border-white border-opacity-10' />
        </div>

        <footer className='h-[440px] text-white flex items-center'>
          <div className='w-[901px] flex justify-between'>
            <div>
              <div className='flex mb-7'>
                <Image
                  src={CollosalFooter}
                  alt='Collosal Logo'
                  className='mr-5'
                ></Image>
                <b className='text-xl'>Collosal.</b>
              </div>
              <div className='flex flex-col text-white text-opacity-60'>
                <span className='mb-1'>Copyright &copy; 2021</span>
                <a href='https://www.figma.com/@mhd'>
                  <span>Design By Nauval on Figma</span>
                </a>
              </div>
            </div>
            <div>
              <span>SERVICES</span>
              <ul className='mt-5 space-y-3 text-white text-opacity-60'>
                <li className='mb-1'>Web Development</li>
                <li className='mb-1'>App Developement</li>
                <li className='mb-1'>UI Design</li>
                <li className='mb-1'>Consultation</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <span>COMPANY</span>
              <ul className='mt-5 space-y-3 text-white text-opacity-60'>
                <li className='mb-1'>About</li>
                <li className='mb-1'>Contact</li>
                <li className='mb-1'>Send Quote</li>
                <li className='mb-1'>Privacy Policy</li>
                <li className='mb-1'>Term of Service</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <span>RESOURCES</span>
              <ul className='mt-5 space-y-3 text-white text-opacity-60'>
                <li className='mb-1'>Support</li>
                <li className='mb-1'>Documentation</li>
                <li className='mb-1'>License</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
