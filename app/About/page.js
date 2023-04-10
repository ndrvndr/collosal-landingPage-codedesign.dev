import Image from "next/image";
import rectangle1 from "../../public/Rectangle-151.svg";
import rectangle2 from "../../public/Rectangle-152.svg";

import GithubLogo from "../../public/company-logo/GithubLogo.svg";
import ForbesLogo from "../../public/company-logo/Forbes.comLogo.svg";
import GoogleLogo from "../../public/company-logo/GoogleLogo.svg";
import MicrosoftLogo from "../../public/company-logo/MicrosoftLogo.svg";
import FacebookLogo from "../../public/company-logo/FacebookLogo.svg";

import flag from "../../public/icon/flag.svg";
import user from "../../public/icon/user.svg";
import dollar from "../../public/icon/dollar-sign.svg";

import profil1 from "../../public/profile-picture/profil1.svg";
import profil2 from "../../public/profile-picture/profil2.svg";
import profil3 from "../../public/profile-picture/profil3.svg";
import profil4 from "../../public/profile-picture/profil4.svg";
import profil5 from "../../public/profile-picture/profil5.svg";
import profil6 from "../../public/profile-picture/profil6.svg";

export default function About() {
  return (
    <main>
      <section className="flex  justify-between items-center">
        <div className="relative">
          <Image
            src={rectangle1}
            alt="Image 1"
            className="absolute -bottom-3 -right-10"
          ></Image>
          ;<Image src={rectangle2} alt="Image 2"></Image>;
        </div>

        <div className="flex flex-col space-y-8">
          <span className="text-[#16FCD2] text-lg">ABOUT</span>
          <span className="text-white text-3xl font-bold leading-relaxed">
            We are creative, smart and <br /> hardworking people
          </span>
          <p className="text-white text-opacity-60 text-lg leading-loose">
            Several creative people gather in the same place - that&apos;s
            Collosal. We
            <br />
            collaborate to produce the best results, loved by clients and
            <br />
            comfortable for users. Here we maintain togetherness even though
            <br />
            with different backgrounds, all the people here are already experts
            in
            <br />
            their respective fields.
          </p>
        </div>
      </section>
      <hr className="w-[1026px]  mt-44 mb-[90px] border-10 border-white border-opacity-10" />
      <section className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-[102px]">
          <span className="text-[#16FCD2] mb-7 text-lg">STATISTICS</span>
          <span className="text-white text-center text-3xl font-bold leading-relaxed">
            In 3 years we reached 8<br />
            countries, 193 clients and earning
            <br />
            $100k USD
          </span>
        </div>

        <div className="h-[157px] bg-white bg-opacity-5 flex items-center justify-center mb-[55px]">
          <div className="flex items-center mr-12">
            <div className="bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center mr-10">
              <Image src={flag} alt="Flag Icon"></Image>
            </div>
            <div className="flex flex-col mr-11">
              <span className="text-white font-bold text-3xl mb-1">8</span>
              <span className="text-white text-opacity-60 font-bold">
                COUNTRIES
              </span>
            </div>
            <div className="border-l-2 border-white border-opacity-5 h-16"></div>
          </div>

          <div className="flex items-center mr-12">
            <div className="bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center mr-10">
              <Image src={user} alt="Flag Icon"></Image>
            </div>
            <div className="flex flex-col mr-11">
              <span className="text-white font-bold text-3xl mb-1">193</span>
              <span className="text-white text-opacity-60 font-bold">
                CLIENTS
              </span>
            </div>
            <div className="border-l-2 border-white border-opacity-5 h-16"></div>
          </div>

          <div className="flex items-center mr-12">
            <div className="bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center mr-10">
              <Image src={dollar} alt="Flag Icon"></Image>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl mb-1">$100k</span>
              <span className="text-white text-opacity-60 font-bold">
                EARNING
              </span>
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
      </section>

      <section className="flex flex-col items-center mt-[128px] mb-10">
        <div className="flex flex-col justify-center items-center mb-[100px]">
          <span className="text-[#16FCD2] mb-7 text-lg">OUR TEAM</span>
          <span className="text-white text-center text-3xl font-bold leading-relaxed">
            Meet the team! All creative
            <br />
            people are here
          </span>
        </div>

        <div className="w-[1026px] flex flex-wrap justify-between">
          <div className="bg-white bg-opacity-5 rounded-md mb-7">
            <Image src={profil1} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Albert Flores
              </span>
              <span className="text-white text-opacity-60">Founder</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-md mb-7">
            <Image src={profil2} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Devon Lane
              </span>
              <span className="text-white text-opacity-60">
                Chief Technology Officer
              </span>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-md mb-7">
            <Image src={profil3} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Darrell Steward
              </span>
              <span className="text-white text-opacity-60">UI Designer</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-md">
            <Image src={profil4} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Marvin McKinney
              </span>
              <span className="text-white text-opacity-60">
                Software Engineer
              </span>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-md">
            <Image src={profil5} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Floyd Miles
              </span>
              <span className="text-white text-opacity-60">System Analyst</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-md">
            <Image src={profil6} alt="Profil Picture"></Image>
            <div className="flex flex-col my-10 mx-10">
              <span className="text-white font-bold text-xl mb-2">
                Annette Black
              </span>
              <span className="text-white text-opacity-60">
                Project Manager
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
