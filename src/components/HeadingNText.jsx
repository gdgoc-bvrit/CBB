import React from "react";

const HeadingNText = ({ title, children }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl p-2 sm:p-4 m-6 sm:m-10 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal">
        {title}
      </h2>
      <p className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default HeadingNText;
