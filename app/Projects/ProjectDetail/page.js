import Link from "next/link";

export default function ProjectDetail() {
  return (
    <main>
      <section className="flex flex-col items-center space-y-8">
        <span className="text-[#16FCD2] text-lg">PROJECT DETAIL</span>
        <span className="text-white text-center text-3xl font-bold leading-relaxed">
          The Desktop App Landing <br /> Page
        </span>
      </section>
      <section>
        <hr className="w-[1026px] mt-[74px] mb-[66px] border-10 border-white border-opacity-10" />
        <div className="flex justify-between items-center">
          <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
            <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
            <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
            <div className="bg-[#212136] w-[368px] h-[256px] rounded-t-3xl"></div>
          </div>
          <div className="w-[502px] space-y-14">
            <p className="text-white text-opacity-60 leading-loose">
              Something has always existed. According to physics, there can
              never be true physical nothingness—though there can be times when
              existence resembles nothing.
            </p>
            <div className="space-y-9">
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 mb-1">
                  CATEGORY
                </span>
                <span className="font-bold text-white">Development</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 mb-1">CLIENT</span>
                <span className="font-bold text-white">Acme, Inc</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-opacity-60 mb-1">
                  TECHNOLOGY
                </span>
                <span className="font-bold text-white">
                  Javascript, HTML, CSS
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[1026px] mt-[135px] mb-[120px] border-10 border-white border-opacity-10" />
      </section>

      <section>
        <div className="flex flex-col items-center">
          <span className="text-[#16FCD2] mb-[1.25rem] text-lg">PROJECTS</span>
          <span className="text-white text-center font-bold text-3xl leading-relaxed">
            Other Amazing Projects
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
              <span className="text-white font-bold text-lg">
                The Mobile App Landing Page
              </span>
              <span className="text-white text-opacity-60 text-md mt-4 mb-9">
                A landing page for mobile app
              </span>
              <Link href="./Projects/ProjectDetail">
                <button className="text-white border-2 rounded-full px-8 py-2">
                  Detail
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
              <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
              <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
              <div className="bg-[#212136] w-[368px] h-[256px] rounded-t-3xl"></div>
            </div>
            <div className="flex flex-col items-center mt-12">
              <span className="text-white font-bold text-lg">
                The Desktop App Landing Page
              </span>
              <span className="text-white text-opacity-60 text-md mt-4 mb-9">
                A landing page for desktop app
              </span>
              <Link href="./Projects/ProjectDetail">
                <button className="text-white border-2 rounded-full px-8 py-2">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
