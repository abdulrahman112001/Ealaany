import React from "react";

function PlateFormBanner() {
  return (
    <div
      className="w-full patternY h-[250px] bg-cover bg-bottom flex item-center justify-center"
      style={{ backgroundImage: "url('/images/banners.png')" }}
    >
      <div className="m-auto text-center">
        <h2 className="text-3xl  md:text-[50px] text-secondary">
          Join Our PLATFORM!
        </h2>
        <p className="mt-3  md:text-2xl text-gray ">
          Sign up now to start your advertising journey with us.
        </p>
      </div>
    </div>
  );
}

export default PlateFormBanner;
