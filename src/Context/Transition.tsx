import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import TransitionContext from "./TransitionContext";
import { SwitchTransition, Transition } from "react-transition-group";

interface TransitionComponentProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
}

const TransitionComponent = ({
  children,
  backgroundColor,
  backgroundImage,
  className = "",
}: TransitionComponentProps) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  const nodeRef = useRef<HTMLDivElement>(null);

  const backgroundStyle = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...backgroundStyle,
      }}
      className={className}
    >
      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={500}
          nodeRef={nodeRef}
          onEnter={() => {
            const node = nodeRef.current;
            if (!node) return;

            toggleCompleted(false);

            // Kill any existing animations
            gsap.killTweensOf(node);

            gsap.set(node, {
              autoAlpha: 0,
              scale: 0.8,
              xPercent: -100,
              transformOrigin: "center center",
            });

            gsap
              .timeline({
                onComplete: () => toggleCompleted(true),
              })
              .to(node, {
                autoAlpha: 1,
                xPercent: 0,
                duration: 0.25,
                ease: "power2.out",
              })
              .to(
                node,
                {
                  scale: 1,
                  duration: 0.25,
                  ease: "back.out(1.7)",
                },
                "-=0.15"
              );
          }}
          onExit={() => {
            const node = nodeRef.current;
            if (!node) return;

            // Kill any existing animations
            gsap.killTweensOf(node);

            gsap
              .timeline()
              .to(node, {
                scale: 0.8,
                duration: 0.2,
                ease: "power2.in",
              })
              .to(
                node,
                {
                  xPercent: 100,
                  autoAlpha: 0,
                  duration: 0.2,
                  ease: "power2.in",
                },
                "-=0.1"
              );
          }}
        >
          <div ref={nodeRef} style={{ width: "100%", height: "100%" }}>
            {children}
          </div>
        </Transition>
      </SwitchTransition>
    </div>
  );
};

export default TransitionComponent;
