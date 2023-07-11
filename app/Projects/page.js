"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import * as React from "react";

export default function Projects() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className='flex flex-col items-center'>
      <section className='w-[1026px] flex items-center justify-between'>
        <div data-aos='fade-right' className='flex flex-col space-y-8'>
          <span className='text-[#16FCD2] text-lg'>PROJECTS</span>
          <span className='text-3xl font-bold leading-relaxed text-white'>
            We have completed many <br /> amazing projects that you <br />
            will not believe
          </span>
        </div>
        <select
          data-aos='fade-left'
          className='w-[174px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md text-white text-opacity-40 pl-5'
        >
          <option className='bg-transparent'>Technology</option>
        </select>
      </section>
      <hr className='w-[1026px] mt-[103px] border-10 border-white border-opacity-10' />
      <div className='w-[1026px] flex mt-[83px] flex-wrap'>
        <div data-aos='zoom-in' className='mr-5 mb-[70px]'>
          <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
            <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
            <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
            <div className='bg-[#212136] w-[194px] h-[256px] rounded-t-3xl'></div>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <span className='text-lg font-bold text-white'>
              The Mobile App Landing Page
            </span>
            <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
              A landing page for mobile app
            </span>
            <Link href='./Projects/ProjectDetail'>
              <button className='px-8 py-2 text-white border-2 rounded-full'>
                Detail
              </button>
            </Link>
          </div>
        </div>
        <div data-aos='zoom-in'>
          <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
            <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
            <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
            <div className='bg-[#212136] w-[368px] h-[256px] rounded-t-3xl'></div>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <span className='text-lg font-bold text-white'>
              The Desktop App Landing Page
            </span>
            <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
              A landing page for desktop app
            </span>
            <Link href='./Projects/ProjectDetail'>
              <button className='px-8 py-2 text-white border-2 rounded-full'>
                Detail
              </button>
            </Link>
          </div>
        </div>
        <div data-aos='zoom-in' className='mr-5'>
          <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
            <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
            <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
            <div className='bg-[#212136] w-[368px] h-[256px] rounded-t-3xl'></div>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <span className='text-lg font-bold text-white'>
              The Desktop App Landing Page
            </span>
            <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
              A landing page for desktop app
            </span>
            <Link href='./Projects/ProjectDetail'>
              <button className='px-8 py-2 text-white border-2 rounded-full'>
                Detail
              </button>
            </Link>
          </div>
        </div>
        <div data-aos='zoom-in'>
          <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
            <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
            <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
            <div className='bg-[#212136] w-[194px] h-[256px] rounded-t-3xl'></div>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <span className='text-lg font-bold text-white'>
              The Mobile App Landing Page
            </span>
            <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
              A landing page for mobile app
            </span>
            <Link href='./Projects/ProjectDetail'>
              <button className='px-8 py-2 text-white border-2 rounded-full'>
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button className='w-[193px] h-[52px] mt-[91px] text-white bg-white bg-opacity-10 border-none rounded-sm'>
        Load More
      </button>
    </main>
  );
}
