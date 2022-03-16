import React from "react";
import { Link } from "gatsby";

export interface BannerProps {
  to: string;
  children: string | React.ReactNode;
}

function Banner(props: BannerProps) {
  return (
    <div className="bg-lilac-300">
      <div className="container">
        <p>
          <Link
            to={props.to}
            className="block text-center px-4 py-2 text-white font-bold"
          >
            {props.children}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Banner;
