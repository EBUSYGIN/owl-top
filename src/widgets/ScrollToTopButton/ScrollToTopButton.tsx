"use client";

import cn from "classnames";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

import { Button, Icon } from "@/src/shared/ui";
import { useYScroll } from "@/src/shared/hooks";

import styles from "./ScrollToTopButton.module.css";

export function ScrollToTopButton() {
  const controls = useAnimation();
  const yDistance = useYScroll();

  useEffect(() => {
    controls.start({ opacity: (yDistance * 100) / document.body.scrollHeight });
  }, [yDistance, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <motion.div
      className={styles.wrapper}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <Button size="s" className={cn(styles.button)} onClick={scrollToTop}>
        <Icon.Up />
      </Button>
    </motion.div>
  );
}
