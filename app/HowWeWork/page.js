import Image from "next/image";
import Link from "next/link";

import Illustration1 from "../../public/work-page/DiscussIllustration.svg";
import Illustration2 from "../../public/work-page/DevelopmentIllustration.svg";
import Illustration3 from "../../public/work-page/Group56.svg";

export default function Work() {
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#16FCD2] mb-7 text-lg">HOW WE WORK</span>
          <span className="text-white text-center text-3xl font-bold leading-relaxed">
            We have a workflow that
            <br />
            allows the job to be
            <br />
            delivered well
          </span>
        </div>
      </section>

      <section>
        <hr className="w-[1026px] mt-[103px] mb-[91px] border-10 border-white border-opacity-10" />
        <div className="flex justify-between items-center">
          <Image src={Illustration1} alt="Disscuss Illustration"></Image>
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">STEP 01</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                Let&apos;s talk about your
                <br />
                company&apos;s problems first
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                After submitting the quote form, we will review the data, then
                we
                <br />
                will contact you. You can discuss with our team regarding your
                <br />
                problem and find a solution to that problem.
                <br />
                <br />
                In this step, you will discuss what application to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[143px] relative">
        <div className="bg-[#240C28] w-[438.93px] h-[431.0px] rounded-full absolute -right-24 top-0 -z-20 blur-3xl"></div>
        <div className="bg-[#150D39] w-[356.61px] h-[350.19px] rounded-full absolute right-44 top-[-100px] -z-10 blur-3xl"></div>
        <div className="flex justify-between items-center">
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">STEP 02</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                Doing planning, design and
                <br />
                development until everything
                <br />
                is finished
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                When everything is agreed upon, our team will make plans
                <br />
                related to the application that will be created. Starting from
                <br />
                analysis, design, to development.
                <br />
                In this step, the application is 100% complete.
              </p>
            </div>
          </div>
          <Image src={Illustration2} alt="Development Illustration"></Image>
        </div>
      </section>

      <section className="mt-[143px] mb-[43px] relative">
        <div className="bg-[#0C2535] w-[438.93px] h-[431.0px] rounded-full absolute left-[0px] top-[20px] -z-20 blur-3xl"></div>
        <div className="bg-[#241B20] w-[356.61px] h-[350.19px] rounded-full absolute left-56 top-[-40px] -z-10 blur-3xl"></div>
        <div className="flex justify-between items-center">
          <Image src={Illustration3} alt="Service Illustration"></Image>
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">STEP 03</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                The project is complete and we
                <br />
                ship all the project assets, and
                <br />
                access to the server
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                We will be responsible for delivering all the project assets to
                you,
                <br />
                don&apos;t worry. These assets include, design files, source
                code,
                <br />
                server access, and so on.
                <br />
                In this step, everything is done and the contract ends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
