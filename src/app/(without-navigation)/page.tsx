"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "@/components/TypeWriter/TypeWriter";
import Style from "./page.module.scss";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [showName, setShowName] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const delayName = setTimeout(() => {
      setShowName(true);
    }, 1500);

    const delayRoles = setTimeout(() => {
      setShowLinks(true);
    }, 5500);

    return () => {
      clearTimeout(delayName);
      clearTimeout(delayRoles);
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

  const links = (
    <div className={Style.fadeIn}>
      <ul className={Style.navList}>
        <li className={Style.Items}>
          <Link href="/about">About Me</Link>
        </li>
        <li className={Style.Items}>
          <Link href="/work">My Work</Link>
        </li>
        <li className={Style.Items}>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={Style.container}>
      <div className={Style.hello}>
        <Typewriter text={`Hello, I am`} speed={100} />
        {ShowName}
      </div>

      <div className={Style.link}>{showLinks ? links : null}</div>
    </div>
  );
};

export default HomePage;
