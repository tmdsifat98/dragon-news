import React from "react";
import Swimming from "../assets/swimming.png";
import ClassRoom from "../assets/class.png";
import Playground from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200">
      <h1 className="text-2xl my-3 ml-2 font-semibold text-base-300">Q-Zone</h1>
      <div className=" flex flex-col items-center">
        <img
          className="border-2 w-full border-gray-400 mb-4 p-6 border-dashed"
          src={Swimming}
          alt=""
        />
        <img
          className="border-2 w-full border-gray-400 mb-4 p-6 border-dashed"
          src={ClassRoom}
          alt=""
        />
        <img
          className="border-2 w-full border-gray-400 p-6 border-dashed"
          src={Playground}
          alt=""
        />
      </div>
    </div>
  );
};

export default QZone;
