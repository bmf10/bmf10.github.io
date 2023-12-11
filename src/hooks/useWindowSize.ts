"use client";
import { useEffect, useState } from "react";

function useWindowSize(): [number, number] {
  const [size, setSize] = useState([
    typeof window !== "undefined" ? window.innerHeight : 0,
    typeof window !== "undefined" ? window?.innerWidth : 0,
  ]);

  useEffect(() => {
    if (window) {
      const handleResize = () =>
        setSize([window.innerHeight, window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return size as [number, number];
}

export default useWindowSize;
