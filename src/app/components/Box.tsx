"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Box.module.scss";

interface Props {
  speed: number;
  classes?: string;
}

const variants = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
  },
};

const Box = ({ speed, classes }: Props) => {
  const boxSpeed = speed;
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * boxSpeed]);

  const isLeft = classes === "left";
  const isMid = classes === "mid";
  const isRight = classes === "right";

  const boxStyles = clsx(styles.box, {
    [styles.left]: isLeft,
    [styles.mid]: isMid,
    [styles.right]: isRight,
  });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animation"
      style={{ y: transform }}
      className={boxStyles}
    >
      <div className={styles.image}>
        <Image alt="concert" fill src="/images/concert.jpg" />
      </div>
      <span>11m total views</span>
    </motion.div>
  );
};

export default Box;
