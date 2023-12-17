import Link from "next/link";
import styles from "./logo.module.scss";
import { LogoBookmark } from "@/svgs";

interface LogoProps {
  fill?: "dark" | "light";
}

function Logo({ fill = "dark" }: LogoProps) {
  return <LogoBookmark />;
}

export default Logo;
