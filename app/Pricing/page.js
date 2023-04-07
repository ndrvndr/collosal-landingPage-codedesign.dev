import Link from "next/link";

export default function Pricing() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <span className="text-[#16FCD2] mb-[1.25rem] text-lg">PRICING</span>
        <span className="text-center font-bold text-3xl leading-relaxed text-white">
          What do you need? Choose a <br /> service that can help you
        </span>
        <hr className="w-[1026px] mt-[103px] mb-[91px] border-10 border-white border-opacity-10" />
      </div>
      <div className="flex space-x-4">
        <div className="bg-white bg-opacity-5 w-[328px] h-[446px] rounded-xl flex flex-col items-center ">
          <div className="flex justify-center space-x-10 mt-[58px]">
            <b className="text-md text-white">UI Design</b>
            <div className="flex flex-col">
              <span className="text-white text-opacity-60 text-xs">
                Starting from
              </span>
              <b className="text-3xl text-white">1200$</b>
            </div>
          </div>
          <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
          <ul className="flex flex-col items-center mb-[40px] space-y-2 text-white">
            <li>10 design pages</li>
            <li>Well-documented</li>
            <li>4 revisions</li>
            <li>$100/additional page</li>
          </ul>
          <Link href="./Pricing">
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </Link>
        </div>
        <div className="bg-white bg-opacity-5 w-[328px] h-[446px] rounded-xl flex flex-col items-center">
          <div className="flex justify-center space-x-10 mt-[58px]">
            <b className="text-md text-white">Development</b>
            <div className="flex flex-col">
              <span className="text-white text-opacity-60 text-xs">
                Starting from
              </span>
              <b className="text-3xl text-white">5000$</b>
            </div>
          </div>
          <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
          <ul className="flex flex-col items-center mb-[40px] space-y-2 text-white">
            <li>Web & Mobile</li>
            <li>Well-documented</li>
            <li>8 revisions</li>
            <li>$1000/additional page</li>
          </ul>
          <Link href="./Pricing">
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </Link>
        </div>
        <div className="bg-white bg-opacity-5 w-[328px] h-[446px] rounded-xl flex flex-col items-center">
          <div className="flex justify-center space-x-10 mt-[58px]">
            <b className="text-md text-white">Maintenence</b>
            <div className="flex flex-col">
              <span className="text-white text-opacity-60 text-xs">
                Starting from
              </span>
              <b className="text-3xl text-white">1200$</b>
            </div>
          </div>
          <hr className="w-[234px] border-0.5 border-white border-opacity-10 my-[48px]" />
          <ul className="flex flex-col items-center mb-[40px] space-y-2 text-white">
            <li>Daily Backup</li>
            <li>3 hourses of maintenence</li>
            <li>Including fixing</li>
            <li>$50/additional hour</li>
          </ul>
          <Link href="./Pricing">
            <button className="w-[234px] h-[52px] bg-white rounded-sm text-[#3F2379] font-semibold">
              Detail
            </button>
          </Link>
        </div>
      </div>

      <section className="flex flex-col justify-center items-center mt-[125px]">
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
