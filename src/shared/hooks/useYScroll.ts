import { useEffect, useState } from "react";

export const useYScroll = () => {
  const [yDistance, setYDistance] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setYDistance(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return yDistance;
};
