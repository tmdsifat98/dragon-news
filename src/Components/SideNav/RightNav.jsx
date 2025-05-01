import React from "react";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";
import Findus from "../Findus";

const RightNav = () => {
  return (
    <div className="flex flex-col gap-3 h-fit sticky top-2 px-3">
      <h1 className="text-xl font-semibold">Login with</h1>
      <SocialLogin />
      <Findus />
      <QZone />
    </div>
  );
};

export default RightNav;
