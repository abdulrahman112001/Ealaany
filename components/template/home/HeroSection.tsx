import CTASection from "./jj";

function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[url('/images/sechero.svg')] bg-cover bg-center bg-no-repeat min-h-[82vh]"

    >
     <div className="grid-cols-6 h-full">
        <div className="h-full w-full flex items-end justify-start ">
        <img src="/images/heroman.svg"   />
            
        </div>
        
     </div>
     <div className="grid-cols-6 h-full">
     <CTASection/>
     </div>
    </section>
  );
}

export default HeroSection;
