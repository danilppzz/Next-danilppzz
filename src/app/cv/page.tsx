import React from "react";

export default function Cv() {
  return (
    <div className="bg-dark-10 w-full mt-[60px] h-[1020px]">
      <iframe
      className="w-full h-full  sm:w-[640px] md:w-[1024px] lg:w-[1280px]"
      src="/sample.pdf#zoom=90"
      allowFullScreen={true}
    ></iframe>
    </div>
    
  );
}
