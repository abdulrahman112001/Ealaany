import LoginForm from "@/components/molecules/LoginForm";
import React from "react";

function index() {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-white lg:min-h-screen">
        <div className="lg:grid  lg:grid-cols-12">
          <div className="relative block w-full lg:order-last lg:col-span-4">
            <img
              alt="loginbanenr"
              src="/images/loginbanenr.png"
              className="  h-full w-full "
            />
          </div>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-8 lg:px-16 lg:py-12 ">
            <LoginForm />
          </main>
        </div>
      </section>
    </div>
  );
}

export default index;
