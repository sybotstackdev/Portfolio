'use client';

import React, { useEffect, useId, useRef, useState, ReactNode } from "react";
import { animate } from "motion";
import { motion, useAnimation } from "motion/react";
import Particles from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const directions = {
        up: { y: [20, 0] },
        down: { y: [-20, 0] },
        left: { x: [20, 0] },
        right: { x: [-20, 0] },
      };

      animate(
        elementRef.current,
        { opacity: [0, 1], ...directions[direction] },
        { duration: 0.5, delay }
      );
    }
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn = ({ children, delay = 0, className = '' }: ScaleInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { scale: [0.8, 1], opacity: [0, 1] },
        { duration: 0.5, delay }
      );
    }
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      Array.from(children).forEach((child, index) => {
        animate(
          child,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.5, delay: index * staggerDelay }
        );
      });
    }
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export const HoverScale = ({ children, scale = 1.05, className = '' }: HoverScaleProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (elementRef.current) {
      animate(elementRef.current, { scale }, { duration: 0.2 });
    }
  };

  const handleMouseLeave = () => {
    if (elementRef.current) {
      animate(elementRef.current, { scale: 1 }, { duration: 0.2 });
    }
  };

  return (
    <div
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
};

interface RotateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const RotateIn = ({ children, delay = 0, className = '' }: RotateInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { rotate: [-180, 0], opacity: [0, 1] },
        { duration: 0.5, delay }
      );
    }
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}; 


 
type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};
export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();
 
  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };
 
  const generatedId = useId();
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#000a13",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
 
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: particleColor || "#ffffff",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: {} as SingleOrMultiple<string> | undefined,
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                },
                random: false,
                size: false,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                limit: {
                  mode: "delete",
                  value: 0,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || 4,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: "#000a13",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    value: 3,
                  },
                  rate: {
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              life: {
                count: 0,
                delay: {
                  value: 0,
                  sync: false,
                },
                duration: {
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: "#fff",
                },
                consent: false,
                distance: 100,
                enable: false,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              repulse: {
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};


interface TextHoverSmoothProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: string;
  transitionDuration?: number; // in seconds
}

export const TextHoverSmooth = ({
  children,
  className = "",
  hoverColor = "#38bdf8", // default to sky-400
  transitionDuration = 0.4,
}: TextHoverSmoothProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { color: hoverColor },
        { duration: transitionDuration, ease: "easeInOut" }
      );
    }
  };

  const handleMouseLeave = () => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { color: "" },
        { duration: transitionDuration, ease: "easeInOut" }
      );
    }
  };

  return (
    <span
      ref={elementRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: `color ${transitionDuration}s ease-in-out` }}
    >
      {children}
    </span>
  );
}

interface MotionTextProps {
  children: React.ReactNode;
  className?: string;
  initialColor?: string;
  animateColor?: string;
  transitionDuration?: number; // in seconds
  whileHoverScale?: number;
}

export const MotionText = ({
  children,
  className = "",
  initialColor = "#fff",
  animateColor = "#38bdf8",
  transitionDuration = 0.5,
  whileHoverScale = 1.08,
}: MotionTextProps) => {
  return (
    <motion.span
      className={className}
      initial={{ color: initialColor, opacity: 0, y: 10 }}
      animate={{ color: initialColor, opacity: 1, y: 0 }}
      transition={{ duration: transitionDuration, ease: "easeOut" }}
      whileHover={{
        color: animateColor,
        scale: whileHoverScale,
        transition: { duration: transitionDuration, ease: "easeInOut" },
      }}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </motion.span>
  );
};

export const BlinkingText = ({
  children,
  className = "",
  color1 = "#fff",
  color2 = "#38bdf8",
  duration = 8,
}: {
  children: React.ReactNode;
  className?: string;
  color1?: string;
  color2?: string;
  duration?: number; // seconds
}) => {
  return (
    <span
      className={className}
      style={{
        animation: `blinking-text ${duration}s infinite alternate`,
        color: color1,
        display: "inline-block",
      }}
    >
      {children}
      <style>
        {`
          @keyframes blinking-text {
            0% { color: ${color1}; opacity: 1; }
            50% { color: ${color2}; opacity: 0.5; }
            100% { color: ${color1}; opacity: 1; }
          }
        `}
      </style>
    </span>
  );
};
export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex  w-full items-center justify-center overflow-hidden">
      {children}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
