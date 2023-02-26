import React from "react";

type Props = {
  title: string;
};

const Hero = ({ title }: Props) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
