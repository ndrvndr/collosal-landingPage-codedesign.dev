import "./globals.css";
import Image from "next/image";
import Collosal from "../public/collosalLogo.svg";
import CollosalFooter from "../public/collosalFooter.svg";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-[#0B0B22] items-center">
        <nav className="w-[1026px] flex justify-between items-center mt-14 text-white">
          <div className="flex items-center">
            <Image src={Collosal} alt="Collosal Logo" className="mr-5"></Image>
            <b className="text-xl">Collosal.</b>
          </div>
          <ul className="flex w-[424px] justify-between text-white text-opacity-80">
            <li>Services</li>
            <li>How We Work</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
          <button className="w-[112px] h-[39px] bg-white bg-opacity-10 border-none">
            Contact
          </button>
        </nav>
        {children}
        <footer className="h-[440px] text-white flex items-center">
          <div className="w-[901px] flex justify-between">
            <div>
              <div className="flex mb-7">
                <Image
                  src={CollosalFooter}
                  alt="Collosal Logo"
                  className="mr-5"
                ></Image>
                <b className="text-xl">Collosal.</b>
              </div>
              <div className="flex flex-col text-white text-opacity-60">
                <span className="mb-1">Copyright &copy; 2021</span>
                <span>Design By Collosal LLC</span>
              </div>
            </div>
            <div>
              <span>SERVICES</span>
              <ul className="text-white text-opacity-60 mt-5 space-y-3">
                <li className="mb-1">Web Development</li>
                <li className="mb-1">App Developement</li>
                <li className="mb-1">UI Design</li>
                <li className="mb-1">Consultation</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <span>COMPANY</span>
              <ul className="text-white text-opacity-60 mt-5 space-y-3">
                <li className="mb-1">About</li>
                <li className="mb-1">Contact</li>
                <li className="mb-1">Send Quote</li>
                <li className="mb-1">Privacy Policy</li>
                <li className="mb-1">Term of Service</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <span>RESOURCES</span>
              <ul className="text-white text-opacity-60 mt-5 space-y-3">
                <li className="mb-1">Support</li>
                <li className="mb-1">Documentation</li>
                <li className="mb-1">License</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
