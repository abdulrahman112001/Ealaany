import React from "react";
import GoogleIcons from "../atoms/icons/googleIcons";

const LoginForm = () => {
  return (
    <div className="relative py-3 w-[80%]">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0  shadow-lg rounded-[40px] sm:p-10">
        <div className="w-full p-10">
          <div className="flex items-center space-x-5 justify-center">
            <span className="font-PoppinsBold text-[25px]">Sign In</span>
          </div>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="login"
            >
              E-mail
            </label>
            <input
              className="border-green-50 !bg-white rounded-lg px-3 py-4  mt-1 mb-5 text-sm w-full"
              type="text"
              id="login"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-green-50 !bg-white rounded-lg px-3 py-4  mt-1 mb-5 text-sm w-full"
              type="password"
              id="password"
            />
          </div>
          <div className="text-left mb-4">
            <a
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 bg-[#00CCDC] my-4 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <a
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="#"
            >
              or sign in
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
          </div>
          <div className="!my-8 ">
            <div>
              <button className="flex w-full items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <GoogleIcons />
                <span className="ml-2">Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="w-full text-center my-5 font-extralight  text-sm">
            <span>
              Already have an account?{" "}
              <a href="#" className="text-danger ">
                Login{" "}
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
