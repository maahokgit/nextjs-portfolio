"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "@/components/TypeWriter/TypeWriter";
import Style from "./page.module.scss";

const HomePage: React.FC = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const delayName = setTimeout(() => {
      setShowName(true);
    }, 1500);

    return () => {
      clearTimeout(delayName);
    };
  }, []);

  const ShowName = showName ? (
    <svg className={Style.svg} textAnchor="middle">
      <text x="50%" y="50%" dy=".35em" className={Style.Text}>
        Edward Ma
      </text>
    </svg>
  ) : (
    <svg className={Style.svg} textAnchor="middle"></svg>
  );

  return (
    <div className={Style.container}>
      <div className={Style.hello}>
        <Typewriter text={`Hello, I am`} speed={100} />
        {ShowName}
      </div>
    </div>
  );
};

export default HomePage;
