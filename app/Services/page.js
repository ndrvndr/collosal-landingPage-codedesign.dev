"use client";
import serviceIllustration1 from "../../public/service-pages/serviceIllustration1.svg";
import serviceIllustration2 from "../../public/service-pages/serviceIllustration2.svg";
import serviceIllustration3 from "../../public/service-pages/serviceIllustration3.svg";

import layout from "../../public/icon/layout.svg";
import mousePointer from "../../public/icon/mouse-pointer.svg";
import arrowRight from "../../public/icon/arrow-right.svg";

import smartphone from "../../public/icon/smartphone.svg";
import desktop from "../../public/icon/desktop.svg";
import globe from "../../public/icon/globe.svg";

import download from "../../public/icon/download.svg";
import refresh from "../../public/icon/refresh-ccw.svg";
import arrowUp from "../../public/icon/arrow-up.svg";
import checkCircle from "../../public/icon/check-circle.svg";

import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import * as React from "react";

export default function Services() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <section data-aos='fade-up' className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-[#16FCD2] mb-7 text-lg'>SERVICES</span>
          <span className='text-3xl font-bold leading-relaxed text-center text-white'>
            We are here to help solve <br /> your company&apos;s problems
          </span>
        </div>
      </section>
      <section>
        <hr className='w-[1026px] mt-[103px] mb-[91px] border-10 border-white border-opacity-10' />
        <div className='flex items-center justify-between'>
          <Image
            data-aos='fade-up-right'
            src={serviceIllustration1}
            alt='Service Illustration'
          ></Image>
          <div data-aos='fade-up-left'>
            <div className='space-y-5'>
              <span className='text-[#16FCD2] text-lg'>UI DESIGN</span>
              <p className='text-3xl font-bold leading-relaxed text-white'>
                Don&apos;t let your idea get caught <br /> by others, design a
                prototype <br /> for your idea
              </p>
              <p className='text-lg leading-loose text-white text-opacity-60'>
                Delegate your ideas as quickly as possible, create beautiful{" "}
                <br />
                designs and vivid prototypes.
              </p>
            </div>
            <div className='flex mt-[62px]'>
              <div className='bg-white bg-opacity-10 w-[241px] h-[141px] flex flex-col items-center justify-center border-2 border-white border-opacity-10 rounded-md mr-5'>
                <div className='flex items-center w-[193.89px] mb-4'>
                  <Image src={layout} alt='Layout Icon'></Image>
                  <span className='ml-4 font-bold text-white'>
                    Beautiful Design
                  </span>
                </div>
                <span className='text-white text-opacity-60'>
                  Create a modern design for <br />
                  your idea
                </span>
              </div>
              <div className='bg-white bg-opacity-10 w-[241px] h-[141px] flex flex-col items-center justify-center border-2 border-white border-opacity-10 rounded-md'>
                <div className='flex items-center w-[193.89px] mb-4'>
                  <Image src={mousePointer} alt='Layout Icon'></Image>
                  <span className='ml-4 font-bold text-white'>Card Name</span>
                </div>
                <span className='text-white text-opacity-60'>
                  Create vivid prototypes for <br />
                  your design
                </span>
              </div>
            </div>
            <Link href='./Services/ServiceDetail'>
              <div className='mt-[37px] flex items-end justify-end'>
                <span className='text-white text-xl mr-[25px]'>
                  Service Detail
                </span>
                <Image src={arrowRight} alt='Arrow Right Icon'></Image>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className='mt-[143px] relative'>
        <div className='bg-[#240C28] w-[438.93px] h-[431.0px] rounded-full absolute right-[130px] top-[70px] -z-20 blur-3xl'></div>
        <div className='bg-[#150D39] w-[356.61px] h-[350.19px] rounded-full absolute right-[-40px] top-[-100px] -z-10 blur-3xl'></div>
        <div className='flex items-center justify-between'>
          <div data-aos='fade-up-right'>
            <div className='space-y-5'>
              <span className='text-[#16FCD2] text-lg'>DEVELOPMENT</span>
              <p className='text-3xl font-bold leading-relaxed text-white'>
                Create solutions to repetitive <br /> problems, design
                applications <br /> and access anywhere!
              </p>
              <p className='text-lg leading-loose text-white text-opacity-60'>
                Just tell us your repetitive problem or the primitive method
                used <br /> today, and we will create a digital solution.
              </p>
            </div>

            <div className='space-y-5 mt-[62px]'>
              <div className='bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center'>
                <div className='flex items-center ml-6'>
                  <Image src={smartphone} alt='Layout Icon'></Image>
                  <span className='ml-4 font-bold text-white'>
                    Mobile App Development
                  </span>
                </div>
              </div>
              <div className='bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center'>
                <div className='flex items-center ml-6'>
                  <Image src={desktop} alt='Layout Icon'></Image>
                  <span className='ml-4 font-bold text-white'>
                    Desktop App Development
                  </span>
                </div>
              </div>
              <div className='bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center'>
                <div className='flex items-center ml-6'>
                  <Image src={globe} alt='Layout Icon'></Image>
                  <span className='ml-4 font-bold text-white'>
                    Web Development
                  </span>
                </div>
              </div>
            </div>
            <Link href='./Services/ServiceDetail'>
              <div className='mt-[37px] flex items-end justify-end'>
                <span className='text-white text-xl mr-[25px]'>
                  Service Detail
                </span>
                <Image src={arrowRight} alt='Arrow Right Icon'></Image>
              </div>
            </Link>
          </div>
          <Image
            data-aos='fade-up-left'
            src={serviceIllustration2}
            alt='Service Illustration'
          ></Image>
        </div>
      </section>

      <section className='mt-[143px] mb-[43px] relative'>
        <div className='bg-[#0C2535] w-[438.93px] h-[431.0px] rounded-full absolute left-[0px] top-[20px] -z-20 blur-3xl'></div>
        <div className='bg-[#241B20] w-[356.61px] h-[350.19px] rounded-full absolute left-[280px] top-[-40px] -z-10 blur-3xl'></div>
        <div className='flex items-center justify-between'>
          <Image
            data-aos='fade-up-right'
            src={serviceIllustration3}
            alt='Service Illustration'
          ></Image>
          <div data-aos='fade-up-left'>
            <div className='space-y-5'>
              <span className='text-[#16FCD2] text-lg'>MAINTENANCE</span>
              <p className='text-3xl font-bold leading-relaxed text-white'>
                Think of your server as your <br /> own child, taking care of it
                every day
              </p>
              <p className='text-lg leading-loose text-white text-opacity-60'>
                We will back up your servers every day, clean them every week,
                <br /> upgrade them when there is an update.
              </p>
            </div>
            <div className='flex'>
              <div className='mr-[28px]'>
                <div className='mt-[28px] flex items-center'>
                  <div className='bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center'>
                    <Image src={download} alt='Download Icon'></Image>
                  </div>
                  <span className='ml-6 text-xl text-white'>
                    Back up every day
                  </span>
                </div>
                <div className='mt-[28px] flex items-center'>
                  <div className='bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center'>
                    <Image src={refresh} alt='Refresh Icon'></Image>
                  </div>
                  <span className='ml-6 text-xl text-white'>
                    Cleaning every week
                  </span>
                </div>
              </div>
              <div>
                <div className='mt-[28px] flex items-center'>
                  <div className='bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center'>
                    <Image src={arrowUp} alt='Arrow Up Icon'></Image>
                  </div>
                  <span className='ml-6 text-xl text-white'>Upgrade</span>
                </div>
                <div className='mt-[28px] flex items-center'>
                  <div className='bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center'>
                    <Image src={checkCircle} alt='Check Circle Icon'></Image>
                  </div>
                  <span className='ml-6 text-xl text-white'>Fixing error</span>
                </div>
              </div>
            </div>
            <Link href='./Services/ServiceDetail'>
              <div className='mt-[37px] flex items-end justify-end'>
                <span className='text-white text-xl mr-[25px]'>
                  Service Detail
                </span>
                <Image src={arrowRight} alt='Arrow Right Icon'></Image>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
