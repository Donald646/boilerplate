import CTA from "./cta";
import Features from "./features";
import Lander from "./lander";
import Footer from "./footer";
import FAQ from "./faq";
import Hero from "./hero";
import TextRevealByWord from "../ui/text-reveal";

export default function LandingPage() {
  const blobs = [
    { top: '7%', left: '5%', size: 0.6, duration: 25 },
    { top: '6%', left: '85%', size: 0.5, duration: 25 },
    { top: '25%', left: '15%', size: 0.5, duration: 30 },
    { top: '50%', left: '80%', size: 0.55, duration: 35 },
    { top: '77%', left: '20%', size: 0.65, duration: 28 },
    { top: '40%', left: '40%', size: 0.7, duration: 32 },
    { top: '65%', left: '10%', size: 0.6, duration: 27 },
    { top: '15%', left: '75%', size: 0.55, duration: 33 },
    { top: '90%', left: '30%', size: 0.5, duration: 29 },
    { top: '35%', left: '60%', size: 0.7, duration: 31 },
    { top: '80%', left: '85%', size: 0.6, duration: 26 },
    { top: '10%', left: '40%', size: 0.55, duration: 34 },
    { top: '60%', left: '25%', size: 0.65, duration: 28 },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-4 overflow-hidden text-black relative">
      {/* Absolute position blurry blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {blobs.map((blob, index) => (
          <div
            key={index}
            className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-primary/15 via-primary/25 to-primary-dark/15 rounded-full blur-[100px] animate-pulse"
            style={{
              top: blob.top,
              left: blob.left,
              transform: `translate(-50%, -50%) scale(${blob.size})`,
              animationDuration: `${blob.duration}s`,
            }}
          ></div>
        ))}
      </div>
      
      <main className="flex-1 w-full space-y-24 md:space-y-36 pb-12 md:pb-24 relative z-10">
        
        <Lander/>
        <Features/>
        <Hero/>
        <FAQ/>
        <CTA/>
      </main>
    </div>
  );
}