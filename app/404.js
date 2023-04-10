import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center mb-[14px]">
        <span className="text-[#FC165B] mb-7 text-lg">ERROR</span>
        <span className="text-white text-center text-3xl font-bold leading-relaxed">
          The page you are looking
          <br />
          for is not on this website
          <br />
          please check again
        </span>
        <p className="text-white text-opacity-60 text-lg leading-loose text-center my-10">
          The system cannot find the page you are looking for, maybe you
          <br />
          have the wrong path or the page has been deleted.
        </p>
        <Link href="./">
          <button className="w-[219px] h-[52px] bg-white bg-opacity-10 rounded-sm text-white font-medium">
            Back to Home
          </button>
        </Link>
      </section>
    </main>
  );
}
