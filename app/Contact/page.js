"use client";
import PhoneIcon from "../../public/icon/phone.svg";
import MailIcon from "../../public/icon/mail.svg";
import Image from "next/image";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import AOS from "aos";
import "aos/dist/aos.css";

import * as React from "react";

export default function Contact() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className='flex flex-col items-center text-white'>
      <section className='w-[1026px] flex items-center justify-between'>
        <div data-aos='fade-up-right' className='flex flex-col space-y-8'>
          <span className='text-[#16FCD2] text-lg'>CONTACT</span>
          <span className='text-3xl font-bold leading-relaxed text-white'>
            We Love receiving messages <br /> from you, we are waiting <br />{" "}
            for it.
          </span>
          <div>
            <div className='flex items-center mb-[30px]'>
              <div className='bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center mr-7'>
                <Image src={PhoneIcon} alt='Phone Icon'></Image>
              </div>
              <div className='flex flex-col'>
                <span className='text-white text-opacity-60'>Phone</span>
                <span className='text-xl font-bold text-white'>
                  +62 1234 8921
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center mr-7'>
                <Image src={PhoneIcon} alt='Phone Icon'></Image>
              </div>
              <div className='flex flex-col'>
                <span className='text-white text-opacity-60'>Phone</span>
                <span className='text-xl font-bold text-white'>
                  +62 1234 8921
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos='fade-down-left'
          className='bg-white bg-opacity-5 w-[412px] h-[508px] px-[35px] pt-[52px] pb-[35px] flex flex-wrap rounded-md'
        >
          <div className='flex flex-col mb-4 mr-5'>
            <label className='mb-2 text-white text-opacity-60' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md'
            ></input>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-white text-opacity-60' htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md'
            ></input>
          </div>
          <div className='flex flex-col mb-4 mr-5'>
            <label
              className='mb-2 text-white text-opacity-60'
              htmlFor='company'
            >
              Subject
            </label>
            <input
              type='text'
              id='company'
              className='w-[338.89px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md'
            ></input>
          </div>

          <div className='flex flex-col mb-6'>
            <label
              className='mb-2 text-white text-opacity-60'
              htmlFor='problem'
            >
              Message
            </label>
            <input
              type='text'
              id='problem'
              className='w-[341px] h-[130px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md'
            ></input>
          </div>
          <button className='w-[341px] h-[52px] bg-[#6016FC] rounded-sm'>
            Send Message
          </button>
        </div>
      </section>
    </main>
  );
}
