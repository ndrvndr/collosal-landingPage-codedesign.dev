import Link from "next/link";

export default function Quote() {
  return (
    <main className="text-white flex flex-col items-center">
      <section className="w-[1026px] flex items-center justify-between">
        <div className="flex flex-col space-y-8">
          <span className="text-[#16FCD2] text-lg">SEND QUOTE</span>
          <span className="text-white text-3xl font-bold leading-relaxed">
            Tell us about your problem <br /> and how we can help
          </span>
          <p className="text-white text-opacity-60 text-lg leading-loose">
            We are happy to help you, tell us what is the problem with your
            <br />
            company, and we are ready to answer these problems. It usually
            <br /> takes a few minutes for us to respond.
          </p>
          <Link href="./Contact">
            <button className="w-[162px] h-[52px] bg-[#fff] bg-opacity-10 rounded-sm">
              Ask Us
            </button>
          </Link>
        </div>

        <div className="bg-white bg-opacity-5 w-[412px] h-[508px] px-[35px] pt-[52px] pb-[35px] flex flex-wrap rounded-md">
          <div className="flex flex-col mr-5 mb-4">
            <label className="text-white text-opacity-60 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white text-opacity-60 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col mr-5 mb-4">
            <label
              className="text-white text-opacity-60 mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col">
            <label
              className="text-white text-opacity-60 mb-2"
              htmlFor="companySize"
            >
              Company Size
            </label>
            <select
              id="companySize"
              className="w-[160.5px] h-[40px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md"
            ></select>
          </div>
          <div className="flex flex-col mb-6">
            <label
              className="text-white text-opacity-60 mb-2"
              htmlFor="problem"
            >
              Tell Us Your Problem
            </label>
            <input
              type="text"
              id="problem"
              className="w-[341px] h-[130px] bg-transparent border-[1px] border-white border-opacity-10 rounded-md"
            ></input>
          </div>
          <button className="w-[341px] h-[52px] bg-[#6016FC] rounded-sm">
            Send Quote
          </button>
        </div>
      </section>
    </main>
  );
}
