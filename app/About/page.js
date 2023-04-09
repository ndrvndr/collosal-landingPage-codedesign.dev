import Image from "next/image";
import rectangle1 from "../../public/Rectangle-151.svg";
import rectangle2 from "../../public/Rectangle-152.svg";

import GithubLogo from "../../public/company-logo/GithubLogo.svg";
import ForbesLogo from "../../public/company-logo/Forbes.comLogo.svg";
import GoogleLogo from "../../public/company-logo/GoogleLogo.svg";
import MicrosoftLogo from "../../public/company-logo/MicrosoftLogo.svg";
import FacebookLogo from "../../public/company-logo/FacebookLogo.svg";

import flag from "../../public/icon/flag.svg";

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
        <div className="flex flex-col justify-center items-center mb-[40px]">
          <span className="text-[#16FCD2] mb-7 text-lg">STATISTICS</span>
          <span className="text-white text-center text-3xl font-bold mb-7 leading-relaxed">
            In 3 years we reached 8<br />
            countries, 193 clients and earning
            <br />
            $100k USD
          </span>
        </div>
      </section>
      <div className="space-y-7">
        <hr className="w-[1024px] border-0.5 border-white border-opacity-10" />
        <div className="h-[157px] bg-white bg-opacity-5">
          <div className="bg-white bg-opacity-5 w-[70px] h-[70px] flex items-center justify-center">
            <Image src={flag} alt="Flag Icon"></Image>
          </div>
        </div>
        <div className="flex justify-center space-x-10">
          <Image src={GithubLogo} alt="Github Logo"></Image>
          <Image src={ForbesLogo} alt="Forbes Logo"></Image>
          <Image src={GoogleLogo} alt="Google Logo"></Image>
          <Image src={MicrosoftLogo} alt="Microsoft Logo"></Image>
          <Image src={FacebookLogo} alt="Facebook Logo"></Image>
        </div>
        <hr className="border-0.5 border-white border-opacity-10" />
      </div>
    </main>
  );
}
