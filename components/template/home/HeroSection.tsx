import BtnHeroInfo from "@/components/molecules/btnHeroInfo";
import CTASection from "./CTA";

function HeroSection() {
  const heroButtons = [
    "advertiser",
    "investor",
    "municipality",
    "freelancer",
    "influencer",
    "beneficiary",
    "engineering office",
  ]
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
      <div className="flex flex-wrap gap-3 justify-start items-center">

      <div className="flex flex-wrap gap-3">
          {heroButtons.map((title) => (
            <BtnHeroInfo key={title} title={title} />
          ))}
        </div>
  
      </div>
     <CTASection/>
     </div>
    </section>
  );
}

export default HeroSection;
