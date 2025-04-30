import React from "react";
import Marquee from "react-fast-marquee";

const MarqueTag = () => {
  return (
    <Marquee
      className="text-xl font-semibold text-base-300 gap-4"
      pauseOnHover={true}
      speed={40}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        amet ut expedita beatae, deleniti nostrum ab animi incidunt iste
        repellendus?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        amet ut expedita beatae, deleniti nostrum ab animi incidunt iste
        repellendus?
      </div>
    </Marquee>
  );
};

export default MarqueTag;
