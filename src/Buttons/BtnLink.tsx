import React from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const BtnLink = ({ children, onClick }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={onClick}
      className="text-white duration-100 btn btn-link underline-offset-4 hover:no-underline"
    >
      {children}
    </button>
  );
};

export default BtnLink;
