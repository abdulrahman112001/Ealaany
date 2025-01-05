const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "url('/images/pattern.png'), linear-gradient(to right, #AEE7EB , #f4f0e7 20%, #C24342)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" from-gray-100 to-white  bg-top bg-no-repeat text-gray-700 py-12"
    >
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
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
            <h3 className="font-semibold text-lg mb-4">Contact Links</h3>
            <p className="my-5">+1984656567</p>
            <p className="my-3">info@ealani.com</p>
          </div>
          {/* About Section */}
          <div>
            <img
              src="/images/logo.png"
              alt="EALANI Logo"
              className="mx-auto md:mx-0 mb-4 w-[300px] "
            />

            <p className="text-xl font-PoppinsLight !tracking-4px text-center">
              eaalani is a platform for starting your advertising journey
            </p>
            <p className="!my-5 w-full text-center  text-[#C6C6C6] text-[18px]">
              All of update in social
            </p>
            <div className="flex justify-center  space-x-5 !my-5">
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

            <div className="flex space-x-4 justify-center !my-6">
              <a
                href="/app-store-path" // Replace with your App Store link
                className="inline-flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800"
              >
                <img
                  src="/icons/AppleIcon.svg" // Replace with your App Store logo path
                  alt="App Store"
                />
                <div className="flex flex-col items-start">
                  {" "}
                  <span className="text-[10px] text-[#EAEAEA}">
                    Avilable on the
                  </span>
                  <span className="text-[#F7F9FA]">App Store</span>
                </div>
              </a>
              <a
                href="/app-store-path" // Replace with your App Store link
                className="inline-flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800"
              >
                <img
                  src="/icons/googlePlay.svg" // Replace with your App Store logo path
                  alt="App Store"
                />
                <div className="flex flex-col items-start">
                  {" "}
                  <span className="text-[10px] text-[#EAEAEA}">GET IT ON</span>
                  <span className="text-[#F7F9FA]">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-8 border-[#C6C6C6]" />
        <div className="!my-8 w-full flex items-start justify-between ">
          <div className="text-center mt-8">
            <h4 className="text-lg font-PoppinsLight mb-4">
              Secured Payment Gateways
            </h4>
            <div className="flex justify-center gap-4">
              <img
                src="/images/payment-methods.png"
                alt="Mastercard"
                className="w-14 h-auto"
              />
              <img
                src="/images/payment-methods.png"
                alt="Mastercard"
                className="w-14 h-auto"
              />
              <img
                src="/images/paymentSdad.png"
                alt="Sadad"
                className="w-14 h-auto"
              />
              <img src="/images/Visa.png" alt="Sadad" className="w-14 h-auto" />
            </div>
          </div>
          <div className="flex flex-col items-start mt-8">
            <h4 className="text-lg font-PoppinsLight mb-4">
              Join Our Newsletter & More Information
            </h4>
            <form className="flex justify-center items-center gap-2 w-full">
              <input
                type="email"
                placeholder="enter your email"
                className="px-4  py-2   rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 !w-full"
              />
            </form>
          </div>
        </div>
        {/* Bottom Grid Layout */}

        <hr className=" border-[#C6C6C6]" />
        <div className=" my-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            {/* Left Side: Copyright */}
            <p className="mb-2 md:mb-0">&copy;Copyright 2025 eaalani</p>

            {/* Right Side: Links */}
            <div className="flex space-x-6">
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
  )
}

export default Footer
