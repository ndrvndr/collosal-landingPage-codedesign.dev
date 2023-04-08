import serviceIllustration2 from "../../../public/service-pages/serviceIllustration2.svg";

import figma from "../../../public/icon/figma.svg";
import clock from "../../../public/icon/clock.svg";
import code from "../../../public/icon/code.svg";
import trendingUp from "../../../public/icon/trending-up.svg";
import layout1 from "../../../public/icon/layout-1.svg";
import zap from "../../../public/icon/zap.svg";

import Image from "next/image";
import Link from "next/link";

export default function ServiceDetail() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center">
        <span className="text-[#16FCD2] mb-7 text-lg">DEVELOPMENT</span>
        <span className="text-white text-center text-3xl font-bold leading-relaxed">
          Solve your company&apos;s <br /> repetitive problems by <br />{" "}
          designing apps
        </span>
      </section>
      <section>
        <hr className="w-[1026px] mt-[103px] mb-[91px] border-10 border-white border-opacity-10" />
        <div className="flex justify-between items-center">
          <Image src={serviceIllustration2} alt="Service Illustration"></Image>
          <div>
            <p className="text-white text-opacity-60 leading-loose text-lg">
              Just tell us your repetitive problem or the primitive method used{" "}
              <br />
              today, and we will create a digital solution. <br />
              <br /> We can build you a website, a mobile app and a desktop app.
              All <br /> types of applications have a good security system, are
              easy to <br /> maintain, and are high speed.
            </p>
            <ul className="text-white list-disc mt-[44px] ml-4 space-y-3 text-lg">
              <li>Avoid potential bugs with unit testing</li>
              <li>Removing unused code will speed up the application</li>
              <li>The modern design pleases the users</li>
              <li>A good UX will not disappoint users</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-[124px] relative">
        <div className="bg-[#150D39] w-[532.11px] h-[522.54px] rounded-full absolute right-[130px] top-[240px] -z-20 blur-3xl"></div>
        <div className="bg-[#240C28] w-[432.31px] h-[424.53px] rounded-full absolute left-[70px] top-[350px] -z-10 blur-3xl"></div>
        <span className="text-[#16FCD2] mb-7 text-lg">FEATURES</span>
        <span className="text-white text-center text-3xl font-bold leading-relaxed mb-[90px]">
          Here&apos;s what you will get when <br /> purchasing this service
        </span>
        <div className="w-[1026px] flex flex-wrap justify-between">
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4 mb-5">
            <Image src={figma} alt="Figma Icon"></Image>
            <div className="text-white font-bold text-xl">Design Files</div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              Projects are well designed <br />
              using Figma. You will get <br /> the design file.
            </div>
          </div>
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4">
            <Image src={clock} alt="Clock Icon"></Image>
            <div className="text-white font-bold text-xl">Same Day</div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              We don&apos;t want you to wait <br /> long. Everything will be{" "}
              <br />
              finished on the same day.
            </div>
          </div>
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4">
            <Image src={code} alt="Code Icon"></Image>
            <div className="text-white font-bold text-xl">Quality Code</div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              Code written according to <br />
              good practice is highly <br />
              maintainable.
            </div>
          </div>
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4">
            <Image src={trendingUp} alt="Trending Up Icon"></Image>
            <div className="text-white font-bold text-xl">SEO</div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              The website will appear on <br /> the first page of the search{" "}
              <br />
              engine.
            </div>
          </div>
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4">
            <Image src={layout1} alt="Layout Icon"></Image>
            <div className="text-white font-bold text-xl">
              Responsive Design
            </div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              Access the website on any <br /> device, don&apos;t limit your
              <br />
              visitors.
            </div>
          </div>
          <div className="w-[328px] h-[278px] bg-white bg-opacity-5 py-[44px] pl-[50px] space-y-4">
            <Image src={zap} alt="Zap Icon"></Image>
            <div className="text-white font-bold text-xl">Blazing Fast</div>
            <div className="text-white text-opacity-60 leading-relaxed text-lg">
              A high speed website will
              <br />
              not disappoint prospective
              <br />
              customers.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[132px]">
        <span className="text-[#16FCD2] mb-7 text-lg">FAQ</span>
        <span className="text-white text-center text-3xl font-bold leading-relaxed mb-[90px]">
          Frequently asked questions,
          <br />
          maybe the same as yours
        </span>

        <div className="w-[1026px] flex flex-wrap justify-between">
          <div className="flex flex-col w-[495px] mb-16">
            <span className="text-white font-bold text-xl mb-7">
              How is the payment system?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </span>
          </div>

          <div className="flex flex-col w-[495px]">
            <span className="text-white font-bold text-xl mb-7">
              Can I consult first?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              Of course you can consult us first. We are very happy to help your
              problems and provide our best solutions. You can contact us via
              the contact page.
            </span>
          </div>

          <div className="flex flex-col w-[495px] mb-16">
            <span className="text-white font-bold text-xl mb-7">
              What if the project stops halfway?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              We promise to always finish the project on time, if a problem
              occurs (because of our mistake), all payments will be refunded.
              And the project will be terminated.
            </span>
          </div>

          <div className="flex flex-col w-[495px]">
            <span className="text-white font-bold text-xl mb-7">
              Does it include servers and domains?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              You don&apos;t need to think about anything else, we have
              everything prepared. You just need to check your progress and make
              sure the features you want are the right one.
            </span>
          </div>

          <div className="flex flex-col w-[495px]">
            <span className="text-white font-bold text-xl mb-7">
              Will I get the source code?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              When the project is 100% complete, all the resources, such as
              design files, analysis diagrams, source code, etc. will be
              provided to you. You don&apos;t need to worry about this.
            </span>
          </div>

          <div className="flex flex-col w-[495px]">
            <span className="text-white font-bold text-xl mb-7">
              Is there a warranty?
            </span>
            <span className="text-white text-opacity-60 leading-loose text-lg">
              1 year warranty for our errors or mistakes. If you want to add a
              feature that is not included in the warranty, there is another fee
              per feature, and the price depends on the difficulty.
            </span>
          </div>
        </div>
        <div className="flex mt-24">
          <span className="text-white font-bold mr-2">
            Didn&apos;t find an answer?
          </span>
          <Link href="../Contact">
            <span className="text-[#6016FC] font-bold  underline underline-offset-8">
              Do not hesitate to ask!
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
