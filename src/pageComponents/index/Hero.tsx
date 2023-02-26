import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Hero = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
