import PricingSectionCards from '@/components/public/pricingSection'
import React from 'react'
import type { Metadata } from "next";
import { NAME } from '@/utils/config';

export const metadata: Metadata = {
  title: `Pricing | ${NAME}`,
  description: "Find the plan that fits your needs",
};
const blobs = [
  { top: '10%', left: '5%', size: 0.3, duration: 25 },
  { top: '12%', left: '50%', size: 0.4, duration: 25 },
  { top: '25%', left: '15%', size: 0.5, duration: 30 },
  { top: '50%', left: '80%', size: 0.55, duration: 35 },
  { top: '77%', left: '20%', size: 0.65, duration: 28 },
];
export default function Page() {
  return (
    <div className='pt-10 h-full relative'> {/* Added relative positioning */}
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
      <PricingSectionCards isTable={true}/>
    </div>
  )
}
