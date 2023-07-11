"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Design from "../public/icon/design.svg";
import Develop from "../public/icon/develop.svg";
import Ship from "../public/icon/ship.svg";

import GithubLogo from "../public/company-logo/GithubLogo.svg";
import ForbesLogo from "../public/company-logo/Forbes.comLogo.svg";
import GoogleLogo from "../public/company-logo/GoogleLogo.svg";
import MicrosoftLogo from "../public/company-logo/MicrosoftLogo.svg";
import FacebookLogo from "../public/company-logo/FacebookLogo.svg";

import HowWeWork from "../public/howWeWorkIllustration.svg";
import TeamIllustration from "../public/teamIllustration.svg";

import Avatar1 from "../public/avatar/Avatar1.svg";
import Avatar2 from "../public/avatar/Avatar2.svg";
import Avatar3 from "../public/avatar/Avatar3.svg";

import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import * as React from "react";

export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className='flex flex-col items-center text-white'>
      <section data-aos='fade-up' className='flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center mb-[40px]'>
          <span className='text-[#16FCD2] mb-7 text-lg'>
            CLIENT-DEVELOPMENT DRIVEN
          </span>
          <span className='text-3xl font-bold leading-relaxed text-center text-white mb-7'>
            We Design. We Develop. We Ship. <br /> In The Same Day.
          </span>
          <p className='text-lg leading-loose text-center text-white text-opacity-60'>
            We are committed to not making clients wait. We will deliver the
            work <br />
            as quickly as possible. Even on the same day. Even so, we do not{" "}
            <br />
            reduce the quality of our work.
          </p>
        </div>
      </section>

      <div data-aos='fade-up' className='flex justify-center text-white'>
        <Link href='./Quote'>
          <button className='w-[202px] h-[52px] bg-[#6016FC] mr-[20px]'>
            Send Quote
          </button>
        </Link>
        <Link href='./HowWeWork'>
          <button className='w-[202px] h-[52px] bg-[#fff] bg-opacity-10'>
            Learn More
          </button>
        </Link>
      </div>

      <div
        data-aos='fade-up'
        className='flex space-x-4 mt-[100px] mb-[60px] text-white'
      >
        <div className='w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5'>
          <Image src={Design} alt='Design Icon'></Image>
          <div>
            <b className='text-lg'>Design</b>
            <p className='mt-1 leading-loose text-white text-opacity-60'>
              The project interface will be <br /> designed first, our favorite
              tool <br /> is Figma.
            </p>
          </div>
        </div>
        <div className='w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5'>
          <Image src={Develop} alt='Design Icon'></Image>
          <div>
            <b className='text-lg'>Develop</b>
            <p className='mt-1 leading-loose text-white text-opacity-60'>
              Transform design and write <br /> business logic here. Choose
              <br />
              the technology you want.
            </p>
          </div>
        </div>
        <div className='w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5'>
          <Image src={Ship} alt='Design Icon'></Image>
          <div>
            <b className='text-lg'>Ship</b>
            <p className='mt-1 leading-loose text-white text-opacity-60'>
              After the work is complete, we <br /> will send the project and
              all its <br /> assets to you.
            </p>
          </div>
        </div>
      </div>

      <div data-aos='fade-left' className='space-y-7'>
        <hr className='w-[1024px] border-0.5 border-white border-opacity-10' />
        <div className='flex justify-center space-x-10'>
          <Image src={GithubLogo} alt='Github Logo'></Image>
          <Image src={ForbesLogo} alt='Forbes Logo'></Image>
          <Image src={GoogleLogo} alt='Google Logo'></Image>
          <Image src={MicrosoftLogo} alt='Microsoft Logo'></Image>
          <Image src={FacebookLogo} alt='Facebook Logo'></Image>
        </div>
        <hr className='border-0.5 border-white border-opacity-10' />
      </div>

      <section className='mt-[130px] flex items-center relative'>
        <div className='bg-[#241B20] w-[438.93px] h-[431.0px] rounded-full absolute left-[-30px] top-[80px] -z-20 blur-3xl'></div>
        <div className='bg-[#0C2535] w-[356.61px] h-[350.19px] rounded-full absolute left-[280px] top-[-50px] -z-10 blur-3xl'></div>

        <Image
          data-aos='fade-right'
          src={HowWeWork}
          alt='How We Work Illustration'
        ></Image>
        <div className='space-y-5' data-aos='fade-left'>
          <span className='text-[#16FCD2] text-lg'>HOW WE WORK?</span>
          <p className='text-3xl font-bold leading-relaxed'>
            Everything is well planned, well <br /> designed and developed
            <br />
            wholeheartedly
          </p>
          <p className='text-lg leading-loose text-white text-opacity-60'>
            Careful planning makes us confident, developed with best <br />
            practices so that the project can be maintained. We always test
            <br />
            projects before they are shipped.
          </p>
        </div>
      </section>

      <section
        data-aos='fade-right'
        className='mt-[130px] flex items-center space-x-20 relative'
      >
        <div className='bg-[#240C28] w-[438.93px] h-[431.0px] rounded-full absolute right-[130px] top-[70px] -z-20 blur-3xl'></div>
        <div className='bg-[#150D39] w-[356.61px] h-[350.19px] rounded-full absolute right-[-40px] top-[-100px] -z-10 blur-3xl'></div>
        <div className='space-y-5'>
          <span className='text-[#16FCD2] text-lg'>OUR TEAM</span>
          <p className='text-3xl font-bold leading-relaxed'>
            We&apos;re a team of designers, <br /> engineers and analysts
          </p>
          <p className='text-lg leading-loose text-white text-opacity-60'>
            Our team consists of many creative people. We are <br /> committed
            to maintaining quality work as well as <br /> speed. These creative
            people work together to create <br /> maximum work results.
          </p>
          <button className='bg-white bg-opacity-10 w-[196px] h-[52px]'>
            See Our Teams
          </button>
        </div>
        <Image
          data-aos='fade-left'
          src={TeamIllustration}
          alt='How We Work Illustration'
        ></Image>
      </section>

      <hr className='w-[1024px] border-0.5 border-white border-opacity-10 my-[120px]' />

      <section>
        <div data-aos='fade-up' className='flex flex-col items-center'>
          <span className='text-[#16FCD2] mb-[1.25rem] text-lg'>PROJECTS</span>
          <span className='text-3xl font-bold leading-relaxed text-center'>
            We have completed many <br /> amazing projects that you will <br />
            not believe
          </span>
        </div>

        <div className='flex mt-[83px] space-x-4'>
          <div data-aos='flip-left'>
            <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
              <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
              <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
              <div className='bg-[#212136] w-[194px] h-[256px] rounded-t-3xl'></div>
            </div>
            <div className='flex flex-col items-center mt-12'>
              <span className='text-lg font-bold'>
                The Mobile App Landing Page
              </span>
              <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
                A landing page for mobile app
              </span>
              <Link href='./Projects/ProjectsDetail'>
                <button className='px-8 py-2 border-2 rounded-full'>
                  Detail
                </button>
              </Link>
            </div>
          </div>
          <div data-aos='flip-right'>
            <div className='w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end'>
              <div className='bg-[#212136] w-[154px] h-[26px] rounded-full'></div>
              <div className='bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]'></div>
              <div className='bg-[#212136] w-[368px] h-[256px] rounded-t-3xl'></div>
            </div>
            <div className='flex flex-col items-center mt-12'>
              <span className='text-lg font-bold'>
                The Desktop App Landing Page
              </span>
              <span className='mt-4 text-white text-opacity-60 text-md mb-9'>
                A landing page for desktop app
              </span>
              <Link href='./Projects/ProjectDetail'>
                <button className='px-8 py-2 border-2 rounded-full'>
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-[110px] mb-[110px] bg-[#221048] flex flex-col items-center px-36 pt-24 pb-36 rounded-3xl'>
        <div data-aos='fade-up' className='flex flex-col items-center'>
          <span className='text-[#16FCD2] mb-[1.25rem] text-lg'>
            GET STARTED
          </span>
          <span className='text-3xl font-bold leading-relaxed text-center'>
            What do you need? Choose a <br /> service that can help you
          </span>
        </div>
        <div className='flex mt-[90px] space-x-4'>
          <div
            data-aos='fade-right'
            className='bg-[#233679] w-[328px] h-[446px] rounded-xl flex flex-col items-center '
          >
            <div className='flex justify-center space-x-10 mt-[58px]'>
              <b className='text-md'>UI Design</b>
              <div className='flex flex-col'>
                <span className='text-xs text-white text-opacity-60'>
                  Starting from
                </span>
                <b className='text-3xl'>1200$</b>
              </div>
            </div>
            <hr className='w-[234px] border-0.5 border-white border-opacity-10 my-[48px]' />
            <ul className='flex flex-col items-center mb-[40px] space-y-2'>
              <li>10 design pages</li>
              <li>Well-documented</li>
              <li>4 revisions</li>
              <li>$100/additional page</li>
            </ul>
            <Link href='./Pricing'>
              <button className='w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold'>
                Detail
              </button>
            </Link>
          </div>
          <div
            data-aos='fade-up'
            className='bg-[#233679] w-[328px] h-[446px] rounded-xl flex flex-col items-center'
          >
            <div className='flex justify-center space-x-10 mt-[58px]'>
              <b className='text-md'>Development</b>
              <div className='flex flex-col'>
                <span className='text-xs text-white text-opacity-60'>
                  Starting from
                </span>
                <b className='text-3xl'>5000$</b>
              </div>
            </div>
            <hr className='w-[234px] border-0.5 border-white border-opacity-10 my-[48px]' />
            <ul className='flex flex-col items-center mb-[40px] space-y-2'>
              <li>Web & Mobile</li>
              <li>Well-documented</li>
              <li>8 revisions</li>
              <li>$1000/additional page</li>
            </ul>
            <Link href='./Pricing'>
              <button className='w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold'>
                Detail
              </button>
            </Link>
          </div>
          <div
            data-aos='fade-left'
            className='bg-[#792366] w-[328px] h-[446px] rounded-xl flex flex-col items-center'
          >
            <div className='flex justify-center space-x-10 mt-[58px]'>
              <b className='text-md'>Maintenence</b>
              <div className='flex flex-col'>
                <span className='text-xs text-white text-opacity-60'>
                  Starting from
                </span>
                <b className='text-3xl'>1200$</b>
              </div>
            </div>
            <hr className='w-[234px] border-0.5 border-white border-opacity-10 my-[48px]' />
            <ul className='flex flex-col items-center mb-[40px] space-y-2'>
              <li>Daily Backup</li>
              <li>3 hourses of maintenence</li>
              <li>Including fixing</li>
              <li>$50/additional hour</li>
            </ul>
            <Link href='./Pricing'>
              <button className='w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold'>
                Detail
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className='relative flex flex-col items-center'>
        <div className='bg-[#0C2535] w-[438.93px] h-[431.0px] rounded-full absolute right-[100px] top-[320px] -z-10 blur-3xl'></div>
        <div className='bg-[#150D39] w-[356.61px] h-[350.19px] rounded-full absolute left-[75px] top-[280px] -z-10 blur-3xl'></div>
        <div
          data-aos='fade-up'
          className='flex flex-col items-center mb-[148px]'
        >
          <span className='text-[#16FCD2] mb-[1.25rem] text-lg'>
            TESTIMONIAL
          </span>
          <span className='text-3xl font-bold leading-relaxed text-center'>
            What do our clients says that we <br /> never let down?
          </span>
        </div>

        <div data-aos='fade-up' className='flex space-x-5 mb-[75px]'>
          <div className='bg-white bg-opacity-5 w-[415px] h-[447px] flex flex-col items-center'>
            <div className='relative w-fit mt-[61px]'>
              <Image src={Avatar1} alt='Avatar 1'></Image>
              <div className='w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl'>
                &quot;
              </div>
            </div>
            <span className='mt-5 mb-1 text-lg font-bold'>Courtney Henry</span>
            <span className='mb-8 text-white text-opacity-60 text-md'>
              Biffco Enterprise Ltd.
            </span>
            <p className='text-white text-opacity-60 text-center mb-[61px] text-lg leading-relaxed'>
              &quot;Very easy to use. I made back the <br />
              purchase price in just 48 hours! It&apos;s great.
              <br /> It&apos;s is both attractive and highly <br />
              adaptable.&quot;
            </p>
          </div>

          <div className='bg-white bg-opacity-5 w-[415px] h-[447px] flex flex-col items-center relative top-[-42px]'>
            <div className='relative w-fit mt-[61px]'>
              <Image src={Avatar2} alt='Avatar 2'></Image>
              <div className='w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl'>
                &quot;
              </div>
            </div>
            <span className='mt-5 mb-1 text-lg font-bold'>Esther Howard</span>
            <span className='mb-8 text-white text-opacity-60 text-md'>
              Abstergo Ltd.
            </span>
            <p className='text-white text-center mb-[61px] text-lg leading-relaxed'>
              &quot;Your company is truly upstanding and is <br />
              behind its product 100%. It&apos;s the perfect
              <br /> solution for our business. It has really <br />
              helped our business.&quot;
            </p>
          </div>

          <div className='bg-white bg-opacity-5 w-[415px] h-[447px] flex flex-col items-center'>
            <div className='relative w-fit mt-[61px]'>
              <Image src={Avatar3} alt='Avatar 3'></Image>
              <div className='w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl'>
                &quot;
              </div>
            </div>
            <span className='mt-5 mb-1 text-lg font-bold'>Ronald Richards</span>
            <span className='mb-8 text-white text-opacity-60 text-md'>
              Barone LLC.
            </span>
            <p className='text-white text-opacity-60 text-center mb-[61px] text-lg leading-relaxed'>
              &quot;I am really satisfied with it. I&apos;m good to <br />
              go. It really saves me time and effort. It&apos;s
              <br /> is exactly what our business has been <br />
              lacking.&quot;
            </p>
          </div>
        </div>

        <div className='flex space-x-2'>
          <div className='w-[10px] h-[10px] bg-white rounded-full'></div>
          <div className='w-[10px] h-[10px] bg-[#3C3C4E] rounded-full'></div>
          <div className='w-[10px] h-[10px] bg-[#3C3C4E] rounded-full'></div>
        </div>
      </section>
    </main>
  );
}
