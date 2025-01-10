"use client";
import { useTypewriter } from "@/lib/useTypeWriter";
import Style from "./TypeWriter.module.scss";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = (props: TypewriterProps) => {
  const { text, speed } = props;

  const displayText = useTypewriter(text, speed);

  return <p className={Style.displayText}>{displayText}</p>;
};

export default Typewriter;
