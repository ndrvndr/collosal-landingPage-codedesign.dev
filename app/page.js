import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Design from "../public/design.svg";
import Develop from "../public/develop.svg";
import Ship from "../public/ship.svg";

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

export default function Home() {
  return (
    <main className="text-white flex flex-col items-center">
      <section className="flex flex-col items-center mt-[100px]">
        <div className="flex flex-col justify-center items-center mb-[40px]">
          <span className="text-[#16FCD2] mb-7">CLIENT-DEVELOPMENT DRIVEN</span>
          <span className="text-white text-center text-3xl font-bold mb-7">
            We Design. We Develop. We Ship. <br /> In The Same Day.
          </span>
          <p className="text-center text-white text-opacity-60">
            We are committed to not making clients wait. We will deliver the
            work <br />
            as quickly as possible. Even on the same day. Even so, we do not{" "}
            <br />
            reduce the quality of our work.
          </p>
        </div>
      </section>

      <div className="flex justify-center text-white">
        <button className="w-[202px] h-[52px] bg-[#6016FC] mr-[20px]">
          Send Quote
        </button>
        <button className="w-[202px] h-[52px] bg-[#fff] bg-opacity-10">
          Learn More
        </button>
      </div>

      <div className="flex space-x-4 mt-[100px] mb-[60px] text-white">
        <div className="w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5">
          <Image src={Design} alt="Design Icon"></Image>
          <div>
            <b>Design</b>
            <p className="text-white text-opacity-60 leading-loose mt-1">
              The project interface will be <br /> designed first, our favorite
              tool <br /> is Figma.
            </p>
          </div>
        </div>
        <div className="w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5">
          <Image src={Develop} alt="Design Icon"></Image>
          <div>
            <b>Develop</b>
            <p className="text-white text-opacity-60 leading-loose mt-1">
              Transform design and write <br /> business logic here. Choose
              <br />
              the technology you want.
            </p>
          </div>
        </div>
        <div className="w-[328px] h-[276px] bg-white bg-opacity-5 p-9 flex flex-col space-y-5">
          <Image src={Ship} alt="Design Icon"></Image>
          <div>
            <b>Ship</b>
            <p className="text-white text-opacity-60 leading-loose mt-1">
              After the work is complete, we <br /> will send the project and
              all its <br /> assets to you.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-7">
        <hr className="w-[1024px] border-0.5 border-white border-opacity-10" />
        <div className="flex justify-center space-x-10">
          <Image src={GithubLogo} alt="Github Logo"></Image>
          <Image src={ForbesLogo} alt="Forbes Logo"></Image>
          <Image src={GoogleLogo} alt="Google Logo"></Image>
          <Image src={MicrosoftLogo} alt="Microsoft Logo"></Image>
          <Image src={FacebookLogo} alt="Facebook Logo"></Image>
        </div>
        <hr className="border-0.5 border-white border-opacity-10" />
      </div>

      <section className="mt-[130px] flex items-center">
        <Image src={HowWeWork} alt="How We Work Illustration"></Image>
        <div className="space-y-5">
          <span className="text-[#16FCD2]">HOW WE WORK?</span>
          <p className="font-bold text-2xl leading-relaxed">
            Everything is well planned, well <br /> designed and developed
            <br />
            wholeheartedly
          </p>
          <p className="text-white text-opacity-60 leading-relaxed">
            Careful planning makes us confident, developed with best <br />
            practices so that the project can be maintained. We always test
            <br />
            projects before they are shipped.
          </p>
        </div>
      </section>

      <section className="mt-[130px] flex items-center space-x-20">
        <div className="space-y-5">
          <span className="text-[#16FCD2]">OUR TEAM</span>
          <p className="font-bold text-2xl leading-relaxed">
            We&apos;re a team of designers, <br /> engineers and analysts
          </p>
          <p className="text-white text-opacity-60 leading-relaxed">
            Our team consists of many creative people. We are <br /> committed
            to maintaining quality work as well as <br /> speed. These creative
            people work together to create <br /> maximum work results.
          </p>
          <button className="bg-white bg-opacity-10 w-[196px] h-[52px]">
            See Our Teams
          </button>
        </div>
        <Image src={TeamIllustration} alt="How We Work Illustration"></Image>
      </section>

      <hr className="w-[1024px] border-0.5 border-white border-opacity-10 my-[120px]" />

      <section>
        <div className="flex flex-col items-center">
          <span className="text-[#16FCD2] mb-[1.25rem]">PROJECTS</span>
          <span className="text-center font-bold text-xl leading-relaxed">
            We have completed many <br /> amazing projects that you will <br />
            not believe
          </span>
        </div>

        <div className="flex mt-[83px] space-x-4">
          <div>
            <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
              <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
              <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
              <div className="bg-[#212136] w-[194px] h-[256px] rounded-t-3xl"></div>
            </div>
            <div className="flex flex-col items-center mt-12">
              <span className="font-bold">The Mobile App Landing Page</span>
              <span className="text-white text-opacity-60 text-sm mt-4 mb-9">
                A landing page for mobile app
              </span>
              <button className="border-2 rounded-full px-8 py-2">
                Detail
              </button>
            </div>
          </div>
          <div>
            <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
              <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
              <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
              <div className="bg-[#212136] w-[368px] h-[256px] rounded-t-3xl"></div>
            </div>
            <div className="flex flex-col items-center mt-12">
              <span className="font-bold">The Desktop App Landing Page</span>
              <span className="text-white text-opacity-60 text-sm mt-4 mb-9">
                A landing page for desktop app
              </span>
              <button className="border-2 rounded-full px-8 py-2">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[110px] mb-[110px] bg-[#221048] flex flex-col items-center px-36 pt-24 pb-36 rounded-3xl">
        <div className="flex flex-col items-center">
          <span className="text-[#16FCD2] mb-[1.25rem]">GET STARTED</span>
          <span className="text-center font-bold text-xl leading-relaxed">
            What do you need? Choose a <br /> service that can help you
          </span>
        </div>
        <div className="flex mt-[90px] space-x-4">
          <div className="bg-[#233679] w-[328px] h-[446px] rounded-xl flex flex-col items-center ">
            <div className="flex justify-center space-x-10 mt-[58px]">
              <b>UI Design</b>
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 text-xs">
                  Starting from
                </span>
                <b className="text-3xl">1200$</b>
              </div>
            </div>
            <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
            <ul className="flex flex-col items-center mb-[62px]">
              <li>10 design pages</li>
              <li>Well-documented</li>
              <li>4 revisions</li>
              <li>$100/additional page</li>
            </ul>
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </div>
          <div className="bg-[#233679] w-[328px] h-[446px] rounded-xl flex flex-col items-center">
            <div className="flex justify-center space-x-10 mt-[58px]">
              <b>Development</b>
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 text-xs">
                  Starting from
                </span>
                <b className="text-3xl">5000$</b>
              </div>
            </div>
            <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
            <ul className="flex flex-col items-center mb-[62px]">
              <li>Web & Mobile</li>
              <li>Well-documented</li>
              <li>8 revisions</li>
              <li>$1000/additional page</li>
            </ul>
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </div>
          <div className="bg-[#792366] w-[328px] h-[446px] rounded-xl flex flex-col items-center">
            <div className="flex justify-center space-x-10 mt-[58px]">
              <b>Maintenence</b>
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 text-xs">
                  Starting from
                </span>
                <b className="text-3xl">1200$</b>
              </div>
            </div>
            <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
            <ul className="flex flex-col items-center mb-[62px]">
              <li>Daily Backup</li>
              <li>3 hourses of maintenence</li>
              <li>Including fixing</li>
              <li>$50/additional hour</li>
            </ul>
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-[148px]">
          <span className="text-[#16FCD2] mb-[1.25rem]">TESTIMONIAL</span>
          <span className="text-center font-bold text-xl leading-relaxed">
            What do our clients says that we <br /> never let down?
          </span>
        </div>

        <div className="flex space-x-5 mb-[75px]">
          <div className="bg-[#16172C] w-[415px] h-[447px] flex flex-col items-center">
            <div className="relative w-fit mt-[61px]">
              <Image src={Avatar1} alt="Avatar 1"></Image>
              <div className="w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl">
                &quot;
              </div>
            </div>
            <span className="font-bold mt-5 mb-1">Courtney Henry</span>
            <span className="text-white text-opacity-60 mb-8">
              Biffco Enterprise Ltd.
            </span>
            <p className="text-white text-opacity-60 text-center mb-[61px]">
              &quot;Very easy to use. I made back the <br />
              purchase price in just 48 hours! It&apos;s great.
              <br /> It&apos;s is both attractive and highly <br />
              adaptable.&quot;
            </p>
          </div>

          <div className="bg-[#16172C] w-[415px] h-[447px] flex flex-col items-center relative top-[-42px]">
            <div className="relative w-fit mt-[61px]">
              <Image src={Avatar2} alt="Avatar 2"></Image>
              <div className="w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl">
                &quot;
              </div>
            </div>
            <span className="font-bold mt-5 mb-1">Esther Howard</span>
            <span className="text-white text-opacity-60 mb-8">
              Abstergo Ltd.
            </span>
            <p className="text-white text-center mb-[61px]">
              &quot;Your company is truly upstanding and is <br />
              behind its product 100%. It&apos;s the perfect
              <br /> solution for our business. It has really <br />
              helped our business.&quot;
            </p>
          </div>

          <div className="bg-[#16172C] w-[415px] h-[447px] flex flex-col items-center">
            <div className="relative w-fit mt-[61px]">
              <Image src={Avatar3} alt="Avatar 3"></Image>
              <div className="w-[28px] h-[28px] bg-[#6016FC] rounded-full absolute right-0 bottom-[0px] text-center font-bold text-2xl">
                &quot;
              </div>
            </div>
            <span className="font-bold mt-5 mb-1">Ronald Richards</span>
            <span className="text-white text-opacity-60 mb-8">Barone LLC.</span>
            <p className="text-white text-opacity-60 text-center mb-[61px]">
              &quot;I am really satisfied with it. I&apos;m good to <br />
              go. It really saves me time and effort. It&apos;s
              <br /> is exactly what our business has been <br />
              lacking.&quot;
            </p>
          </div>
        </div>

        <div className="flex space-x-2 mb-[110px]">
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-[#3C3C4E] rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-[#3C3C4E] rounded-full"></div>
        </div>
      </section>

      <div className="space-y-7">
        <hr className="w-[1024px] border-0.5 border-white border-opacity-10" />
        <div className="flex justify-between">
          <span className="font-bold text-3xl">
            We&apos;ve prepared everything, it&apos;s time <br /> for you to
            tell the problem
          </span>
          <div>
            <button className="w-[202px] h-[52px] bg-[#6016FC] mr-[10px]">
              Send Quote
            </button>
            <button className="w-[162px] h-[52px] bg-[#fff] bg-opacity-10">
              Ask Us
            </button>
          </div>
        </div>
        <hr className="border-0.5 border-white border-opacity-10" />
      </div>
    </main>
  );
}
