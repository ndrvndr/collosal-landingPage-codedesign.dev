import serviceIllustration1 from "../../public/service-pages/serviceIllustration1.svg";
import layout from "../../public/icon/layout.svg";
import mousePointer from "../../public/icon/mouse-pointer.svg";
import arrowRight from "../../public/icon/arrow-right.svg";
import Image from "next/image";

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
          </div>
        </div>

        <hr className="w-[1026px] mt-[74px] mb-[66px] border-10 border-white border-opacity-10" />
      </section>
    </main>
  );
}
