import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/gsklogonobg.png";
import "../styles/LoadingScreen.css";

/**
 * LoadingScreen animation flow:
 * 1. Logo appears centered
 * 2. Pulses once
 * 3. Flies upward WHILE scaling down smoothly
 * 4. Lands exactly on navbar logo
 * 5. Navbar logo fades in
 * 6. Loader fades out
 */
const LoadingScreen = ({ onFinish }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const loaderLogo = logoRef.current;
    const navLogo = document.getElementById("nav-logo");

    if (!loaderLogo || !navLogo) return;

    // Lock transform origin so scale does not cause drift
    gsap.set(loaderLogo, {
      transformOrigin: "center center",
    });

    // Measure final navbar logo position
    const navRect = navLogo.getBoundingClientRect();
    const loaderRect = loaderLogo.getBoundingClientRect();

    // Calculate distance required to align centers
    const deltaX =
      navRect.left + navRect.width / 2 -
      (loaderRect.left + loaderRect.width / 2);

    const deltaY =
      navRect.top + navRect.height / 2 -
      (loaderRect.top + loaderRect.height / 2);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });

    tl
      // Pulse (attention grab)
      .to(loaderLogo, {
        scale: 1.08,
        opacity: 1,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
      })

      /**
       * Fly + resize together
       * Scale reduces gradually during movement,
       * preventing sudden edge overflow.
       */
      .to(loaderLogo, {
        x: deltaX,
        y: deltaY,
        scale: 0.3, // final size matches navbar logo
        duration: 1.1,
      })

      // Reveal navbar logo exactly at landing position
      .to(
        navLogo,
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.15"
      )

      // Fade out loader overlay
      .to(
        ".loading-screen",
        {
          opacity: 0,
          duration: 0.4,
          onComplete: onFinish,
        },
        "-=0.1"
      );
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <img
        ref={logoRef}
        src={logo}
        alt="GSK World"
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;
