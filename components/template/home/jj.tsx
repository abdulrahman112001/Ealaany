import React from 'react';

function CTASection() {
  return (
    
    <div className="max-w-lg bg-gray-900/75 flex flex-col justify-center p-6 rounded-lg h-full mt-auto">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-semibold text-white">
        Empowering The <span className="text-cyan-400 font-extrabold">ADVERTISING</span> Community
      </h2>

      {/* Subheading */}
      <p className="text-white mt-2">
        <span className="text-red-500 font-bold">no</span> minimum spend 
        <span className="text-red-500 font-bold"> no</span> long-term contracts 
        just results.
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition">
          GET STARTED
        </button>
        <button className="bg-white text-cyan-600 border-2 border-cyan-600 px-6 py-2 rounded-md font-medium hover:bg-cyan-100 transition">
          learn more
        </button>
      </div>
    </div>
  );
}

export default CTASection;
