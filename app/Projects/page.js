export default function Projects() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-[1026px] flex items-center justify-between">
        <div className="flex flex-col space-y-8">
          <span className="text-[#16FCD2] text-lg">PROJECTS</span>
          <span className="text-white text-3xl font-bold leading-relaxed">
            We have completed many <br /> amazing projects that you <br />
            will not believe
          </span>
        </div>
        <select className="w-[174px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md text-white text-opacity-40 pl-5">
          <option className="bg-transparent">Technology</option>
        </select>
      </section>
      <hr className="w-[1026px] mt-[103px] border-10 border-white border-opacity-10" />
      <div className="w-[1026px] flex mt-[83px] flex-wrap">
        <div className="mr-5 mb-[70px]">
          <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
            <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
            <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
            <div className="bg-[#212136] w-[194px] h-[256px] rounded-t-3xl"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="font-bold text-lg text-white">
              The Mobile App Landing Page
            </span>
            <span className="text-white text-opacity-60 text-md mt-4 mb-9">
              A landing page for mobile app
            </span>
            <button className="text-white border-2 rounded-full px-8 py-2">
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
            <span className="font-bold text-lg text-white">
              The Desktop App Landing Page
            </span>
            <span className="text-white text-opacity-60 text-md mt-4 mb-9">
              A landing page for desktop app
            </span>
            <button className="text-white border-2 rounded-full px-8 py-2">
              Detail
            </button>
          </div>
        </div>
        <div className="mr-5">
          <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
            <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
            <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
            <div className="bg-[#212136] w-[368px] h-[256px] rounded-t-3xl"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="font-bold text-lg text-white">
              The Desktop App Landing Page
            </span>
            <span className="text-white text-opacity-60 text-md mt-4 mb-9">
              A landing page for desktop app
            </span>
            <button className="text-white border-2 rounded-full px-8 py-2">
              Detail
            </button>
          </div>
        </div>
        <div>
          <div className="w-[502px] h-[441px] bg-[#161629] flex flex-col items-center justify-end">
            <div className="bg-[#212136] w-[154px] h-[26px] rounded-full"></div>
            <div className="bg-[#212136] w-[94px] h-[26px] rounded-full mb-[66px] mt-[14px]"></div>
            <div className="bg-[#212136] w-[194px] h-[256px] rounded-t-3xl"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="font-bold text-lg text-white">
              The Mobile App Landing Page
            </span>
            <span className="text-white text-opacity-60 text-md mt-4 mb-9">
              A landing page for mobile app
            </span>
            <button className="text-white border-2 rounded-full px-8 py-2">
              Detail
            </button>
          </div>
        </div>
      </div>
      <button className="w-[193px] h-[52px] mt-[91px] text-white bg-white bg-opacity-10 border-none rounded-sm">
        Load More
      </button>
    </main>
  );
}
