"use client";

import { type ReactNode, useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  down: { y: -40 },
  left: { x: 56 },
  right: { x: -56 },
  none: {},
  scale: { scale: 0.92 },
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.85,
  className = "",
  once = true,
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const o = offset[from];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: o.x ?? 0,
        y: o.y ?? 0,
        scale: o.scale ?? 1,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay },
      },
    }),
    [delay, reduce, stagger],
  );

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  from = "up",
  className = "",
}: {
  children: ReactNode;
  from?: Direction;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const o = offset[from];
  const variants: Variants = {
    hidden: reduce
      ? { opacity: 1 }
      : { opacity: 0, x: o.x ?? 0, y: o.y ?? 0, scale: o.scale ?? 1 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/** Slow word-by-word reveal for headlines */
export function SplitWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
