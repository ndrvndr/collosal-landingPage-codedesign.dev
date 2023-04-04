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

export default function Home() {
  return (
    <main className="text-white">
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
        <hr className="border-0.5 border-white border-opacity-10" />
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
    </main>
  );
}
