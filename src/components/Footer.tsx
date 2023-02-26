import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 footer footer-center text-base-content">
      <div>
        <p>
          Source code licensed{" "}
          <Link className="underline hover:no-underline" href="">
            MIT.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
