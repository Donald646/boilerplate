import React from "react";
import type { Metadata } from "next";
import { NAME } from "@/utils/config";

export const metadata: Metadata = {
  title: `Mission | ${NAME}`,
  description: `${NAME} Mission`,
};


const MissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
      <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center">Our Mission</h1>
      
      <p className="mb-4 text-lg">
        At AcademikAI, we believe that quality education should be accessible to everyone. Our mission is to revolutionize the way people learn by providing cutting-edge AI-powered study tools that are both effective and easily accessible.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Making Education Accessible</h2>
      <p className="mb-4 text-lg">
        We{"'"}re committed to breaking down barriers to education by offering:
      </p>
      <ul className="list-disc list-inside mb-4 text-lg">
        <li>Affordable and often free AI-powered study tools</li>
        <li>Personalized learning experiences tailored to individual needs</li>
        <li>Resources that cater to diverse learning styles and abilities</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Empowering Learners</h2>
      <p className="mb-4 text-lg">
        Our AI study tools are designed to:
      </p>
      <ul className="list-disc list-inside mb-4 text-lg">
        <li>Enhance comprehension and retention</li>
        <li>Provide instant feedback and guidance</li>
        <li>Adapt to each user{"'"}s pace and progress</li>
        <li>Foster a love for lifelong learning</li>
      </ul>

      <p className="mb-4 text-lg">
        We envision a world where everyone has the opportunity to reach their full potential through education. By leveraging the power of AI, we{"'"}re making this vision a reality, one learner at a time.
      </p>

      <p className="font-semibold text-lg">
        Join us in our journey to transform education and empower learners worldwide!
      </p>
    </div>
  );
};

export default MissionPage;