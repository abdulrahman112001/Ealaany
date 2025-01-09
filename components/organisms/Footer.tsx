import Image from "next/image";
import BaseInputField from "../atoms/inputs/BaseInputField";
import { Form, Formik } from "formik";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/images/Footerbg.png')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
      className=" pattern from-gray-100 to-white  bg-top bg-no-repeat text-gray-700 py-12"
    >
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8">
          {/* Quick Links */}
          <div>
            <div className="mb-2">
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <img src="/images/HorizontalLine.png" alt="HorizontalLine" />
            </div>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-gray-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Links */}
          <div className="!text-start">
            <div className="mb-2">
            <h3 className="font-semibold text-lg mb-4">Contact Links</h3>
              <img src="/images/HorizontalLine.png" alt="HorizontalLine" />
            </div>
            <p className="my-5">+1984656567</p>
            <p className="my-3">info@ealani.com</p>
          </div>
          {/* About Section */}
          <div>
            <img
              src="/images/logo.png"
              alt="EALANI Logo"
              className="  md:mx-auto md:mx-0 mb-4  lg:w-[300px] "
            />
            <p className="text-xl font-PoppinsLight !tracking-4px text-start md:text-center">
              eaalani is a platform for starting your advertising journey
            </p>
            <p className="!my-5 w-full text-start md:text-center text-[#C6C6C6] text-[18px]">
              All of update in social
            </p>
            <div className="flex md:justify-center  space-x-5 !my-5">
              <a href="#" className="hover:text-gray-500">
                <div className="flex flex-col items-center justify-start gap-3">
                  <img src="/icons/LinkedIn.svg" alt="LinkedIn" />
                  <span>LinkedIn</span>
                </div>
              </a>
              <a href="#" className="hover:text-gray-500">
                <div className="flex flex-col items-center justify-start gap-3">
                  <img src="/icons/FaceBook.svg" alt="LinkedIn" />
                  <span>FaceBook</span>
                </div>
              </a>
              <a href="#" className="hover:text-gray-500">
                <div className="flex flex-col items-center justify-start gap-3">
                  <img src="/icons/twiter.svg" alt="twiter" />
                  <span>twiter</span>
                </div>
              </a>
              <a href="#" className="hover:text-gray-500">
                <div className="flex flex-col items-center justify-start gap-3">
                  <img src="/icons/Instgram.svg" alt="LinkedIn" />
                  <span>Instgram</span>
                </div>
              </a>
            </div>

            <div className="flex space-x-4 gap-4 flex-wrap md:justify-center !my-6">
              <a
                href="/app-store-path"
                className="inline-flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800"
              >
                <img src="/icons/AppleIcon.svg" alt="App Store" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-[#EAEAEA}">
                    Avilable on the
                  </span>
                  <span className="text-[#F7F9FA]">App Store</span>
                </div>
              </a>
              <a
                href="/app-store-path"
                className="inline-flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800"
              >
                <img src="/icons/googlePlay.svg" alt="App Store" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-[#EAEAEA}">GET IT ON</span>
                  <span className="text-[#F7F9FA]">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-8 border-[#C6C6C6]" />
        <div className="!my-8 w-full flex items-start justify-between flex-wrap">
          <div className="text-center mt-8">
            <h4 className="text-lg font-PoppinsLight mb-4">
              Secured Payment Gateways
            </h4>
            <div className="flex justify-center gap-4">
              <img
                src="/images/payment1.png"
                alt="Mastercard"
                className="w-14 h-auto"
              />
              <img
                src="/images/payment1.png"
                alt="Mastercard"
                className="w-14 h-auto"
              />
              <img
                src="/images/payment2.png"
                alt="Sadad"
                className="w-14 h-auto"
              />
              <img
                src="/images/payment3.png"
                alt="Sadad"
                className="w-14 h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-start mt-8">
            <h4 className="text-lg font-PoppinsLight mb-4">
              Join Our Newsletter & More Information
            </h4>
            <Formik>
              <Form className=" w-full">
                {/* <input
                type="email"
                placeholder="enter your email"
                className="px-4  py-2   rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 !w-full"
              /> */}
                <BaseInputField
                  placeholder="enter your email"
                  leftSection={
                    <Image
                      src="/images/RightArow.png"
                      alt="password"
                      width={20}
                      height={20}
                    />
                  }
                  name="password"
                />
              </Form>
            </Formik>
          </div>
        </div>
        {/* Bottom Grid Layout */}

        <hr className=" border-[#C6C6C6]" />
        <div className=" my-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between  md:items-center text-sm text-gray-600">
            {/* Left Side: Copyright */}
            <p className="mb-2 md:mb-0">Copyright 2025 eaalani</p>

            <div className="flex flex-wrap space-x-6 !text-left">
              <a href="#" className="hover:underline">
                Help Center
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
