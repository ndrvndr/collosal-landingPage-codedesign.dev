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

export default function Services() {
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#16FCD2] mb-7 text-lg">SERVICES</span>
          <span className="text-white text-center text-3xl font-bold leading-relaxed">
            We are here to help solve <br /> your company&apos;s problems
          </span>
        </div>
      </section>
      <section>
        <hr className="w-[1026px] mt-[103px] mb-[91px] border-10 border-white border-opacity-10" />
        <div className="flex justify-between items-center">
          <Image src={serviceIllustration1} alt="Service Illustration"></Image>
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">UI DESIGN</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                Don&apos;t let your idea get caught <br /> by others, design a
                prototype <br /> for your idea
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                Delegate your ideas as quickly as possible, create beautiful{" "}
                <br />
                designs and vivid prototypes.
              </p>
            </div>
            <div className="flex mt-[62px]">
              <div className="bg-white bg-opacity-10 w-[241px] h-[141px] flex flex-col items-center justify-center border-2 border-white border-opacity-10 rounded-md mr-5">
                <div className="flex items-center w-[193.89px] mb-4">
                  <Image src={layout} alt="Layout Icon"></Image>
                  <span className="text-white font-bold ml-4">
                    Beautiful Design
                  </span>
                </div>
                <span className="text-white text-opacity-60">
                  Create a modern design for <br />
                  your idea
                </span>
              </div>
              <div className="bg-white bg-opacity-10 w-[241px] h-[141px] flex flex-col items-center justify-center border-2 border-white border-opacity-10 rounded-md">
                <div className="flex items-center w-[193.89px] mb-4">
                  <Image src={mousePointer} alt="Layout Icon"></Image>
                  <span className="text-white font-bold ml-4">Card Name</span>
                </div>
                <span className="text-white text-opacity-60">
                  Create vivid prototypes for <br />
                  your design
                </span>
              </div>
            </div>
            <Link href="./Service/ServiceDetail">
              <div className="mt-[37px] flex items-end justify-end">
                <span className="text-white text-xl mr-[25px]">
                  Service Detail
                </span>
                <Image src={arrowRight} alt="Arrow Right Icon"></Image>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-[143px]">
        <div className="flex justify-between items-center">
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">DEVELOPMENT</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                Create solutions to repetitive <br /> problems, design
                applications <br /> and access anywhere!
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                Just tell us your repetitive problem or the primitive method
                used <br /> today, and we will create a digital solution.
              </p>
            </div>

            <div className="space-y-5 mt-[62px]">
              <div className="bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center">
                <div className="flex items-center ml-6">
                  <Image src={smartphone} alt="Layout Icon"></Image>
                  <span className="text-white font-bold ml-4">
                    Mobile App Development
                  </span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center">
                <div className="flex items-center ml-6">
                  <Image src={desktop} alt="Layout Icon"></Image>
                  <span className="text-white font-bold ml-4">
                    Desktop App Development
                  </span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 w-full h-[60px] border-2 border-white border-opacity-10 rounded-md flex items-center">
                <div className="flex items-center ml-6">
                  <Image src={globe} alt="Layout Icon"></Image>
                  <span className="text-white font-bold ml-4">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
            <Link href="./Service/ServiceDetail">
              <div className="mt-[37px] flex items-end justify-end">
                <span className="text-white text-xl mr-[25px]">
                  Service Detail
                </span>
                <Image src={arrowRight} alt="Arrow Right Icon"></Image>
              </div>
            </Link>
          </div>
          <Image src={serviceIllustration2} alt="Service Illustration"></Image>
        </div>
      </section>

      <section className="mt-[143px] mb-[43px]">
        <div className="flex justify-between items-center">
          <Image src={serviceIllustration3} alt="Service Illustration"></Image>
          <div>
            <div className="space-y-5">
              <span className="text-[#16FCD2] text-lg">MAINTENANCE</span>
              <p className="font-bold text-3xl leading-relaxed text-white">
                Think of your server as your <br /> own child, taking care of it
                every day
              </p>
              <p className="text-white text-opacity-60 leading-loose text-lg">
                We will back up your servers every day, clean them every week,
                <br /> upgrade them when there is an update.
              </p>
            </div>
            <div className="flex">
              <div className="mr-[28px]">
                <div className="mt-[28px] flex items-center">
                  <div className="bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center">
                    <Image src={download} alt="Download Icon"></Image>
                  </div>
                  <span className="text-white text-xl ml-6">
                    Back up every day
                  </span>
                </div>
                <div className="mt-[28px] flex items-center">
                  <div className="bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center">
                    <Image src={refresh} alt="Refresh Icon"></Image>
                  </div>
                  <span className="text-white text-xl ml-6">
                    Cleaning every week
                  </span>
                </div>
              </div>
              <div>
                <div className="mt-[28px] flex items-center">
                  <div className="bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center">
                    <Image src={arrowUp} alt="Arrow Up Icon"></Image>
                  </div>
                  <span className="text-white text-xl ml-6">Upgrade</span>
                </div>
                <div className="mt-[28px] flex items-center">
                  <div className="bg-white bg-opacity-10 w-[50px] h-[50px]  rounded-sm flex items-center justify-center">
                    <Image src={checkCircle} alt="Check Circle Icon"></Image>
                  </div>
                  <span className="text-white text-xl ml-6">Fixing error</span>
                </div>
              </div>
            </div>
            <Link href="./Service/ServiceDetail">
              <div className="mt-[37px] flex items-end justify-end">
                <span className="text-white text-xl mr-[25px]">
                  Service Detail
                </span>
                <Image src={arrowRight} alt="Arrow Right Icon"></Image>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
