import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="bg-[#151f32] w-full py-8 flex justify-center">
      <h1
        className="flex flex-wrap items-center space-x-4 text-5xl font-bold font-sans"
        aria-label="Transform Your Business With SAP Solutions"
      >
        <span className="text-orange-500">Transform</span>
        <span className="text-white">Your</span>
        <span className="text-white">Business</span>
        <span className="text-white">With</span>
        <span className="text-orange-500">SAP</span>
        <span className="text-orange-500">Solutions</span>
      </h1>
    </div>
  );
};

export default HeroTitle; 