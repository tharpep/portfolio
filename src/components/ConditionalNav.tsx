"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function ConditionalNav() {
  const pathname = usePathname();
  
  // Don't show dev nav on photography pages
  if (pathname.startsWith("/photography")) {
    return null;
  }
  
  return <Nav />;
} 