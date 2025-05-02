import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueTag = () => {
  const [usr, setUsr] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((d) => d.others.is_today_pick == true);
        setUsr(filtered);
      });
  }, []);
  return (
    <Marquee
      className="text-xl font-semibold text-base-300 gap-4 px-3"
      pauseOnHover={true}
      speed={40}
    >
      {usr.map((u) => (
        <div className="ml-5 cursor-pointer py-3">{u.title}</div>
      ))}
    </Marquee>
  );
};

export default MarqueTag;
